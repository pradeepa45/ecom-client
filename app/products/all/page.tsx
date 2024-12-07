import fetchFromCMS from "@/app/get";
import ProductListing from "@/components/common/products/list";
import Loader from "@/components/loader";
import { getProducts } from "@/queries/products";
import { Suspense } from "react";

export default async function Products() {
  const { products } = await fetchFromCMS(getProducts, {
    where: {
      status: {
        in: ["available", "AVAILABLE"],
      },
    },
  });
  return (
    <Suspense fallback={<Loader />}>
      <ProductListing products={products} />
    </Suspense>
  );
}
