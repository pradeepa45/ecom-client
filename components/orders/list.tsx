"use client";

import { Card, Input } from "@nextui-org/react";
import { Search02Icon } from "hugeicons-react";
import React, { useState } from "react";
import Link from "next/link";

import Oops from "../noData";

import OrderCard from "./summaryCard";

import { Order } from "@/types/product";

const OrdersPage = ({ orders }: { orders: Order[] }) => {
  const [searchTerm, setSearchTerm] = useState("");

  if (orders.length === 0) {
    return (
      <Oops
        content={
          <p>
            Add some{" "}
            <Link className="text-primary-300" href="/products/all">
              products
            </Link>
            , then proceed to checkout
          </p>
        }
        title="Your have not placed any orders yet"
      />
    );
  }

  return (
    <div className="px-4 py-8">
      <div className="px-0">
        <h2 className="text-2xl font-bold">Orders</h2>
      </div>

      <Card className="flex items-center my-6 p-4 flex-row gap-2">
        <Search02Icon className=" text-gray-400" />
        <Input
          placeholder="Search orders..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Card>

      <div className="space-y-4">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;
