import fetchFromCMS from "@/app/get";
import {
  CREATE_USER_CART,
  GET_CART_ITEMS,
  GET_USER_CART,
} from "@/mutations/cart";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { getUserInfo } from "@/app/user";
import CartItemsList from "./list";

export default async function Cart() {
  const { authenticatedItem: user } = await getUserInfo();

  let cartId;
  if (!user) {
    return (
      <div>
        <h1>Cart</h1>
        <p>Please login to view your cart</p>
      </div>
    );
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
      <Card fullWidth>
        <CardBody>Your cart is empty</CardBody>
      </Card>
    );
  }

  return (
    <div>
      <Card fullWidth>
        <CardBody>
          <CartItemsList cart={cartItems} />
        </CardBody>
      </Card>
    </div>
  );
}
