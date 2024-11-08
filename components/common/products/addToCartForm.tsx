"use client";

import fetchFromCMS from "@/app/get";
import { UPDATE_CART } from "@/mutations/cart";
import { User } from "@/types";
import { Product } from "@/types/product";
import { ArrowDown01Icon } from "hugeicons-react";
import { ChangeEvent, MouseEventHandler, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function AddToCartForm({
  product,
  isAuthenticated,
}: {
  product: Product;
  isAuthenticated: User;
}) {
  const [quantity, setQuantity] = useState(100);
  const [selectedLength, setSelectedLength] = useState<string>(
    product.lengths[0]?.id
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors[0]?.slug
  );

  const [formResponse, setFormResponse] = useState({
    quantity: 100,
    length: product.lengths[0]?.id,
    color: product.colors[0]?.id,
    product: product.id,
  });

  const handleFormChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    id?: string
  ) => {
    const { name, value } = e.target;

    if (name === "quantity") {
      const updatedQuantity = parseInt(value);
      setQuantity(updatedQuantity);
      setFormResponse((prevState) => ({
        ...prevState,
        quantity: updatedQuantity,
      }));
    } else if (name === "length") {
      setSelectedLength(value);
      setFormResponse((prevState) => ({
        ...prevState,
        length: value,
      }));
    } else if (name === "color") {
      setSelectedColor(value);
      setFormResponse((prevState) => ({
        ...prevState,
        color: value,
      }));
    }
  };

  const handleAddToCart: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    if (isAuthenticated) {
      try {
        const { quantity, length, color, product } = formResponse;
        const variables = {
          where: {
            id: isAuthenticated.cart.id,
          },
          data: {
            items: {
              create: {
                requestedPrice: "0",
                quantity,
                product: {
                  connect: {
                    id: product,
                  },
                },
                length: {
                  connect: {
                    id: length,
                  },
                },
                color: {
                  connect: {
                    id: color,
                  },
                },
              },
            },
          },
        };
        const { updateCart } = await fetchFromCMS(UPDATE_CART, variables);
        if (updateCart.itemsCount) {
          toast(`Success, total items in cart ${updateCart.itemsCount}`);
        }
      } catch (error) {
        toast(`Could not update cart, please try later`);
      }
    } else {
      if (
        window.confirm(
          "You need to login first to add items to cart. Proceed to login?"
        )
      ) {
        window.location.href = `${window.location.origin}/login`;
      }
    }
  };

  return (
    <form>
      <div className="mb-4">
        <ToastContainer />
        <label htmlFor="quantity" className="block text-sm font-medium mb-1">
          Quantity (grams)
        </label>
        <input
          id="quantity"
          name="quantity"
          type="number"
          placeholder="Quantity (grams)"
          value={quantity.toString()}
          onChange={handleFormChange}
          className="block appearance-none w-full border border-gray-200 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          min={1}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="length" className="block text-sm font-medium mb-1">
          Length
        </label>
        <div className="relative">
          <select
            id="length"
            name="length"
            value={selectedLength}
            onChange={(e) => handleFormChange(e, e.target.value)}
            className="block appearance-none w-full border border-gray-200 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            {product.lengths.map((length) => (
              <option key={length.id} value={length.id}>
                {length.name}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
            <ArrowDown01Icon />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="color" className="block text-sm font-medium mb-1">
          Color
        </label>
        <div className="relative">
          <select
            id="color"
            name="color"
            value={selectedColor}
            onChange={(e) => handleFormChange(e, e.target.value)}
            className="block appearance-none w-full border border-gray-200 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            {product.colors.map((color) => (
              <option key={color.id} value={color.id} className="capitalize">
                {color.name}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
            <ArrowDown01Icon />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        aria-label="Add to Cart"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </form>
  );
}