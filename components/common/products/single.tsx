import Tag from "../../tag";

import AddToCartForm from "./addToCartForm";

import { Product } from "@/types/product";
import Rating from "@/components/common/products/rating";
import { User } from "@/types";

export default function ProductPage({
  product,
  user,
}: {
  product: Product;
  user: User;
}) {
  return (
    <div className="flex flex-col gap-8 p-6 rounded-lg mx-auto mb-20">
      <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
      <div className="flex justify-between gap-6">
        <div className="flex flex-col basis-3/5">
          <div className="grid grid-cols-2 gap-4">
            {product.image.map((item) => (
              <img
                key={item.id}
                alt={item.altText}
                className="h-full mt-4 rounded-lg shadow-md"
                height={200}
                src={item.image.publicUrl}
                width={350}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col p-6 rounded-lg  basis-2/5">
          <h3 className="text-xl font-semibold">Product Details</h3>
          <div className="flex items-center my-4">
            <span className="text-sm font-medium  mr-2">Rating:</span>
            <Rating rating={4} />
          </div>
          <Tag
            className={`capitalise mb-4 ${
              product.status === "AVAILABLE"
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {product.status}
          </Tag>
          <p className="mb-4">{product.description}</p>

          {product.status.toLowerCase() === "available" && (
            <AddToCartForm isAuthenticated={user} product={product} />
          )}
        </div>
      </div>
    </div>
  );
}
