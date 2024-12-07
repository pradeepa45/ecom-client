"use client";

import { Button } from "@nextui-org/react";
import { Delete01Icon } from "hugeicons-react";
import Link from "next/link";
import { useState } from "react";

import { CartItem as CartItemType } from "@/types/product";
import { REMOVE_FROM_CART } from "@/mutations/cart";
import fetchFromCMS from "@/app/get";

const CartItemUI = ({
  item,
  handleDelete,
  setLoading,
  readOnly,
}: {
  item: CartItemType;
  handleDelete: (id: string) => void;
  loading?: boolean;
  setLoading: (loading: boolean) => void;
  readOnly?: boolean;
}) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const [length, setLength] = useState(item.length);
  const [color, setColor] = useState(item.color);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  const handleLengthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLength = item.product.lengths.find(
      (l) => l.value.toString() === e.target.value,
    );

    if (selectedLength) {
      setLength(selectedLength);
    }
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedColor = item.product.colors.find(
      (c) => c.slug === e.target.value,
    );

    if (selectedColor) {
      setColor(selectedColor);
    }
  };

  const handleRemoveItem = async () => {
    if (confirm("Are you sure you want to remove this item from your cart?")) {
      setLoading(true);
      const { updateCart, deleteCartItem } = await fetchFromCMS(
        REMOVE_FROM_CART,
        {
          where: {
            id: item.cart.id,
          },
          data: {
            items: {
              disconnect: {
                id: item.id,
              },
            },
          },
          deleteCartItemWhere2: {
            id: item.id,
          },
        },
      );

      if (updateCart && deleteCartItem) {
        handleDelete(deleteCartItem.id);
      }
      setLoading(false);
    }
  };

  return (
    <div className="flex items-end justify-between border-b py-4">
      <div className="flex items-start space-x-4">
        <img
          alt={item.product.name}
          className="w-16 h-16 rounded-md"
          src={item.product.image[0].image.publicUrl}
        />
        <div>
          <div className="mb-4" title={item.product.name}>
            <h3 className="text-lg font-medium line-clamp-1">
              <Link
                className="hover:underline"
                href={`/products/${item.product.slug}`}
              >
                {item.product.name}
              </Link>
            </h3>
            <p className="text-sm text-opacity-50">Length: {length.name}</p>
            <p className="text-sm text-opacity-50">Color: {color.name}</p>
            {readOnly && (
              <p className="text-sm text-opacity-50">
                Quantity: {item.quantity} grams
              </p>
            )}
          </div>
          {!readOnly && (
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <input
                  className="w-14"
                  min={1}
                  value={quantity}
                  onChange={handleQuantityChange}
                />
                gms
              </div>
              <select
                className="w-32"
                value={length.value}
                onChange={handleLengthChange}
              >
                {item.product.lengths.map((l) => (
                  <option key={l.id} value={l.value}>
                    {l.name}
                  </option>
                ))}
              </select>
              <select
                className="w-32"
                value={color.slug}
                onChange={handleColorChange}
              >
                {item.product.colors.map((c) => (
                  <option key={c.id} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>
      {!readOnly && (
        <Button className="mx-4" color="danger" onClick={handleRemoveItem}>
          <Delete01Icon className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
};

export default CartItemUI;
