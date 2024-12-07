import fetchFromCMS from "@/app/get";
import OrderDetailPage from "@/components/orders/detail";
import { GET_ORDER_INFO } from "@/mutations/order";

export default async function OrderDetail({
  params,
}: {
  params: {
    id: number;
  };
}) {
  const { id } = params;
  const { order } = await fetchFromCMS(GET_ORDER_INFO, {
    where: {
      id,
    },
    take: 1,
  });

  return <OrderDetailPage order={order} />;
}
