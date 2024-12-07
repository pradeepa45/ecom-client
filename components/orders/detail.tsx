"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/react";
import {
  ArrowLeft02Icon,
  Clock04Icon,
  ShoppingCart02Icon,
} from "hugeicons-react";
import moment from "moment";
import Link from "next/link";

import Tag from "../tag";

import OrderTable from "./table";

import { formatDate } from "@/hooks/formatDate";
import { Order } from "@/types/product";

interface OrderDetailPageProps {
  order?: Order;
}

const OrderDetailPage: React.FC<OrderDetailPageProps> = ({ order }) => {
  if (!order) {
    window.history.back();
    return <p>No order, redirecting...</p>;
  }

  return (
    <div className="container mx-auto py-8">
      <Link
        className="flex items-center hover:opacity-60 hover:underline mb-6"
        href="/dashboard/orders"
      >
        <ArrowLeft02Icon className="w-4 h-4 mr-2" />
        Back to Orders
      </Link>

      <div className="grid gap-6">
        <Card className="p-4">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl mb-2">
                  Order <span className="uppercase">#{order.id}</span>
                </h2>
                <Tag className="text-sm capitalize bg-success-100 text-success-500">
                  {order.status}
                </Tag>
                <div className="flex items-center space-x-4 text-sm opacity-90 mt-4">
                  <div className="flex items-center">
                    <Clock04Icon className="w-4 h-4 mr-1" />
                    {formatDate(order.createdAt)}
                  </div>
                  <div className="flex items-center">
                    <ShoppingCart02Icon className="w-4 h-4 mr-1" />
                    {order.itemsCount} items
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
        <Card className="p-4">
          <CardHeader>
            <h2>Order Details</h2>
          </CardHeader>
          <CardBody>
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <dt className="text-sm font-medium opacity-90">Order ID</dt>
                <dd className="text-sm opacity-60">{order.id}</dd>
              </div>
              <div className="space-y-1">
                <dt className="text-sm font-medium opacity-90">Created on</dt>
                <dd className="text-sm opacity-60">
                  {moment(order.createdAt).format("DD MMMM YYYY")}
                </dd>
              </div>
              <div className="space-y-1">
                <dt className="text-sm font-medium opacity-90">
                  Current status
                </dt>
                <dd className="text-sm opacity-60 capitalize">
                  {order.status}
                </dd>
              </div>
              <div className="space-y-1">
                <dt className="text-sm font-medium opacity-90">Total Items</dt>
                <dd className="text-sm opacity-60">{order.itemsCount}</dd>
              </div>
            </dl>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <OrderTable order={order} />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default OrderDetailPage;
