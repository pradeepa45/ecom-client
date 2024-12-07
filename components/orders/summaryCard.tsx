import { Card, CardBody } from "@nextui-org/react";
import { ShoppingCart02Icon } from "hugeicons-react";
import Link from "next/link";

import Tag from "../tag";

import { Order } from "@/types/product";
import { formatDate } from "@/hooks/formatDate";
import { formatCurrency } from "@/hooks/formatCurrency";

const OrderCard = ({ order }: { order: Order }) => {
  return (
    <Card
      fullWidth
      isPressable
      className="mb-4 cursor-pointer hover:shadow-lg transition-shadow"
    >
      <Link className="w-full" href={`/dashboard/orders/${order.id}`}>
        <CardBody className="pt-6">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-2">
              <div className="flex items-center space-x-2">
                <ShoppingCart02Icon className="w-5 h-5 text-gray-500" />
                <span className="font-medium">#{order.id}</span>
              </div>
              <p className="text-sm text-gray-500">
                Order created {formatDate(order.createdAt)}
              </p>
              <div className="flex items-center gap-1">
                <span>Current status:</span>
                <Tag className="text-sm bg-success-50 capitalize">
                  {order.status}
                </Tag>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm">
                {order.itemsCount} {order.itemsCount === 1 ? "item" : "items"}
              </p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Total Amount:</span>
              <span className="font-medium">
                {formatCurrency(order.totalAmount) || "Pending"}
              </span>
            </div>
          </div>
        </CardBody>
      </Link>
    </Card>
  );
};

export default OrderCard;
