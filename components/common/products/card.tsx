"use client";

import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Link,
  Skeleton,
} from "@nextui-org/react";

import { Product } from "@/types/product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`}>
      <Card isPressable shadow="sm">
        <CardBody className="overflow-visible p-0">
          <Skeleton isLoaded={!!product.image[0].image.publicUrl}>
            <Image
              alt={product.image[0]?.altText}
              className="w-full object-cover h-[140px] rounded-b-none"
              height={400}
              radius="md"
              shadow="md"
              src={product.image[0].image.publicUrl}
              width="100%"
            />
          </Skeleton>
        </CardBody>
        <CardFooter className="text-small flex-col items-center">
          <Skeleton isLoaded={!!product.name}>
            <strong className="h-14 block">{product.name}</strong>
          </Skeleton>
        </CardFooter>
      </Card>
    </Link>
  );
}
