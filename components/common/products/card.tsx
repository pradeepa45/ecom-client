"use client";

import { Product } from "@/types/product";
import { Card, CardBody, CardFooter, Image, Link } from "@nextui-org/react";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`}>
      <Card shadow="sm" isPressable>
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="md"
            radius="md"
            width="100%"
            height={400}
            alt={product.image[0]?.altText}
            className="w-full object-cover h-[140px] rounded-b-none"
            src={product.image[0].image.publicUrl}
          />
        </CardBody>
        <CardFooter className="text-small flex-col items-center">
          <strong className="min-h-10">{product.name}</strong>
        </CardFooter>
      </Card>
    </Link>
  );
}
