import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Link from "next/link";

import fetchFromCMS from "@/app/get";
import { getUserInfo } from "@/app/user";
import CartItemsList from "@/components/cart/list";
import { GET_CART_ITEMS } from "@/mutations/cart";

export default async function Checkout() {
  const { authenticatedItem: user } = await getUserInfo();

  if (!user.cart) {
    return (
      <Card fullWidth className="flex justify-center flex-col mt-4 p-4">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Your cart is empty</h2>
        </CardHeader>
        <CardBody className="inline-flex">
          <p>
            Add some{" "}
            <Link className="text-primary-300" href="/products/all">
              products
            </Link>
            , then proceed to checkout
          </p>
        </CardBody>
      </Card>
    );
  }

  const { cart } = await fetchFromCMS(GET_CART_ITEMS, {
    where: {
      id: user.cart?.id,
    },
  });

  return (
    <div className="flex flex-col mb-20 gap-4 py-4">
      <Link className="hover:underline" href="/dashboard">
        Back to cart
      </Link>
      <Card>
        <CardBody>
          <CartItemsList readOnly cart={cart} />
        </CardBody>
      </Card>
    </div>
  );
}
