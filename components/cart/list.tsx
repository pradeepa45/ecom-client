"use client";

import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import Link from "next/link";

import CartItemUI from "./item";

import { Cart, CartItem } from "@/types/product";
import fetchFromCMS from "@/app/get";
import { CREATE_ORDER_FROM_CART } from "@/mutations/order";

export default function CartItemsList({
  cart,
  readOnly = false,
}: {
  cart: Cart;
  readOnly?: boolean;
}) {
  const [cartItems, setCart] = useState(cart);
  const [loading, setLoading] = useState(false);

  const handleDelete = (id: string) => {
    setLoading(true);
    const newCart = cartItems.items.filter((item) => item.id !== id);

    setCart({
      ...cartItems,
      items: newCart,
    });
    setLoading(false);
  };

  useEffect(() => {
    setCart(cart);
  }, [cart]);

  // if (loading) {
  //   return <Loader />;
  // }

  const handleQuoteRequest = async () => {
    if (cart.items.length < 1) alert("You cannot checkout with an empty cart!");
    setLoading(true);
    const { createOrderFromCart } = await fetchFromCMS(CREATE_ORDER_FROM_CART, {
      createOrderFromCartId: cart.id,
    });

    console.log(createOrderFromCart);
    if (createOrderFromCart.id) {
      window.location.href = `/dashboard/orders/${createOrderFromCart.id}`;
    }
    setLoading(false);
  };

  return (
    <>
      {cartItems.items.map((item: CartItem) => (
        <CartItemUI
          key={item.id}
          handleDelete={handleDelete}
          item={item}
          loading={loading}
          readOnly={readOnly}
          setLoading={setLoading}
        />
      ))}
      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-medium">
          Total Items: {cartItems.itemsCount}
        </span>
        {readOnly ? (
          <Button
            color="secondary"
            isLoading={loading}
            onClick={handleQuoteRequest}
          >
            Request a quote
          </Button>
        ) : (
          <Link href="/dashboard/checkout">
            <Button
              color="primary"
              isLoading={loading}
              onClick={() => setLoading(true)}
            >
              Checkout
            </Button>
          </Link>
        )}
      </div>
    </>
  );
}
