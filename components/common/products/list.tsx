import ProductListingCard from "@/components/common/products/card";
import { Product } from "@/types/product";

export default function ProductListing({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {products?.map((item: Product) => (
        <ProductListingCard key={item.id} product={item} />
      ))}
    </div>
  );
}
