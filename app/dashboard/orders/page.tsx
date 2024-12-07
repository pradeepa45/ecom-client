import fetchFromCMS from "@/app/get";
import { getUserInfo } from "@/app/user";
import OrdersPage from "@/components/orders/list";
import { GET_USER_ORDERS } from "@/queries/orders";

export default async function Orders() {
  const { authenticatedItem: user } = await getUserInfo();

  const { orders } = await fetchFromCMS(GET_USER_ORDERS, {
    where: {
      user: {
        id: {
          equals: user.id,
        },
      },
    },
  });

  return <OrdersPage orders={orders} />;
}
