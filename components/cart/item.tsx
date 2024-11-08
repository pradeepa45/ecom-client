"use client";

import fetchFromCMS from "@/app/get";
import { REMOVE_FROM_CART } from "@/mutations/cart";
import { CartItem as CartItemType } from "@/types/product";
import { Button } from "@nextui-org/react";
import { Delete01Icon } from "hugeicons-react";
import Link from "next/link";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const CartItemUI = ({
  item,
  handleDelete,
  loading,
  setLoading,
}: {
  item: CartItemType;
  handleDelete: (id: string) => void;
  loading?: boolean;
  setLoading: (loading: boolean) => void;
}) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const [length, setLength] = useState(item.length);
  const [color, setColor] = useState(item.color);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  const handleLengthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLength = item.product.lengths.find(
      (l) => l.value.toString() === e.target.value
    );
    if (selectedLength) {
      setLength(selectedLength);
    }
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedColor = item.product.colors.find(
      (c) => c.slug === e.target.value
    );
    if (selectedColor) {
      setColor(selectedColor);
    }
  };

  const handleRemoveItem = async () => {
    console.log("Removing item:", item.id);
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
        }
      );
      if (updateCart && deleteCartItem) {
        handleDelete(deleteCartItem.id);
      }
      setLoading(false);
    }
  };

  return (
    <div className="flex items-end justify-between border-b py-4">
      <ToastContainer />
      <div className="flex items-start space-x-4">
        <img
          src={item.product.image[0].image.publicUrl}
          alt={item.product.name}
          className="w-16 h-16 rounded-md"
        />
        <div>
          <div className="max-w-96 mb-4" title={item.product.name}>
            <h3 className="text-lg font-medium text-ellipsis line-clamp-1">
              <Link
                href={`/products/${item.product.slug}`}
                className="hover:underline"
              >
                {item.product.name}
              </Link>
            </h3>
            <p className="text-sm text-opacity-50">Length: {length.name}</p>
            <p className="text-sm text-opacity-50">Color: {color.name}</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <input
                value={quantity}
                onChange={handleQuantityChange}
                min={1}
                className="w-14"
              />
              gms
            </div>
            <select
              value={length.value}
              onChange={handleLengthChange}
              className="w-32"
            >
              {item.product.lengths.map((l) => (
                <option key={l.id} value={l.value}>
                  {l.name}
                </option>
              ))}
            </select>
            <select
              value={color.slug}
              onChange={handleColorChange}
              className="w-32"
            >
              {item.product.colors.map((c) => (
                <option key={c.id} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <Button color="danger" onClick={handleRemoveItem} className="mx-4">
        <Delete01Icon className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default CartItemUI;
