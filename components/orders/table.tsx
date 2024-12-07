"use client";

import React, { Key } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
} from "@nextui-org/react";
import { Clock04Icon } from "hugeicons-react";

import { Order, OrderItem } from "@/types/product";
import { formatDate } from "@/hooks/formatDate";

const statusColorMap: {
  [x: string]: "secondary" | "default" | "primary" | "success" | "danger";
} = {
  paid: "secondary",
  shipped: "secondary",
  created: "primary",
  delivered: "success",
  cancelled: "danger",
};

const columns = [
  { name: "PRODUCT DETAILS", uid: "name" },
  { name: "STATUS", uid: "status" },
  { name: "LAST UPDATED", uid: "lastUpdated" },
];

export default function OrderTable({ order }: { order: Order }) {
  const renderCell = React.useCallback(
    (column: OrderItem, columnKey: Key) => {
      if (!columnKey) {
        return "-";
      }
      switch (columnKey) {
        case "name":
          return (
            <User
              avatarProps={{
                radius: "lg",
                src: column.product.image[0].image.publicUrl,
              }}
              description={
                <div className="flex items-center gap-1">
                  {column.length && <p>{column.length.name} |</p>}
                  {column.color && <p>{column.color.name} |</p>}
                  <p>{column.quantity} gms</p>
                </div>
              }
              name={column.product.name}
            />
          );
        case "status":
          return (
            <Chip
              className="capitalize"
              color={statusColorMap[order.status]}
              size="sm"
              variant="flat"
            >
              {order.status}
            </Chip>
          );
        case "lastUpdated":
          return (
            <div className="relative flex items-center gap-2">
              <Clock04Icon />
              <span>{formatDate(order.createdAt)}</span>
            </div>
          );
        default:
          return "-";
      }
    },
    [order.status],
  );

  return (
    <Table shadow="none">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={order.items}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
