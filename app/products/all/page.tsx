import ProductListing from "@/components/common/products/list";

export default async function Products() {
  return (
    <>
      {/* <div className="flex my-6 gap-6 border rounded-lg p-6">
        <MultiSelectFilter options={lengths} placeholder="Select lengths" />
        <MultiSelectFilter options={colors} placeholder="Select colors" />
      </div> */}
      <ProductListing />
    </>
  );
}
