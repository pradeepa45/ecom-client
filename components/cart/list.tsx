"use client";

import { Cart, CartItem } from "@/types/product";
import CartItemUI from "./item";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";

export default function CartItemsList({ cart }: { cart: Cart }) {
  const [cartItems, setCart] = useState(cart);
  const [loading, setLoading] = useState(false);

  const handleDelete = (id: string) => {
    const newCart = cartItems.items.filter((item) => item.id !== id);
    setCart({
      ...cartItems,
      items: newCart,
    });
  };

  useEffect(() => {
    setCart(cart);
  }, [cart]);

  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <>
      {cartItems.items.map((item: CartItem) => (
        <CartItemUI
          key={item.id}
          item={item}
          handleDelete={handleDelete}
          loading={loading}
          setLoading={setLoading}
        />
      ))}
      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-medium">
          Total Items: {cartItems.itemsCount}
        </span>
        <Button color="primary">Checkout</Button>
      </div>
    </>
  );
}
