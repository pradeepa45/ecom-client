import { Suspense } from "react";

import Loader from "@/components/loader";
import ProductPage from "@/components/common/products/single";
import fetchFromCMS from "@/app/get";
import { getProductWithSlug } from "@/queries/product";

export default async function Products({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await fetchFromCMS(getProductWithSlug, {
    where: {
      slug: {
        equals: slug,
      },
    },
  });
  return (
    <Suspense fallback={<Loader />}>
      <ProductPage product={data.products[0]} />
    </Suspense>
  );
}
