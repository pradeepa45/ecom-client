import fetchFromCMS from "@/app/get";
import ProductListingCard from "@/components/common/products/card";
import Loader from "@/components/loader";
import { getProducts } from "@/queries/products";
import { Product } from "@/types/product";
import { Suspense } from "react";

export default async function ProductListing() {
  const data = await fetchFromCMS(getProducts, {
    where: {
      status: {
        in: ["available", "AVAILABLE"],
      },
    },
  });
  return (
    <Suspense fallback={<Loader />}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data?.products?.map((item: Product) => (
          <ProductListingCard key={item.id} product={item} />
        ))}
      </div>
    </Suspense>
  );
}
