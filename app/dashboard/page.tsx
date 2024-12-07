import { Card, CardBody } from "@nextui-org/react";
import Link from "next/link";

import fetchFromCMS from "@/app/get";
import {
  CREATE_USER_CART,
  GET_CART_ITEMS,
  GET_USER_CART,
} from "@/mutations/cart";
import { getUserInfo } from "@/app/user";
import CartItemsList from "@/components/cart/list";
import Oops from "@/components/noData";

export default async function Cart() {
  const { authenticatedItem: user } = await getUserInfo();

  let cartId;

  if (!user) {
    return <Oops title="Please login to view your cart" />;
  }

  const { carts } = await fetchFromCMS(GET_USER_CART, {
    where: {
      user: {
        id: {
          equals: user.id,
        },
      },
    },
  });

  if (!carts || carts.length === 0) {
    const { createCart } = await fetchFromCMS(CREATE_USER_CART, {
      data: {
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    cartId = createCart.id;
  } else if (carts.length !== 0) {
    cartId = carts[0].id;
  }

  const { cart: cartItems } = await fetchFromCMS(GET_CART_ITEMS, {
    where: {
      id: cartId,
    },
  });

  if (!cartItems || cartItems?.items.length === 0) {
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
        title="Your cart is empty"
      />
    );
  }

  return (
    <div className="flex flex-col mb-20 gap-4 mt-4 py-4">
      <Card fullWidth>
        <CardBody className="px-4">
          <CartItemsList cart={cartItems} />
        </CardBody>
      </Card>
    </div>
  );
}
