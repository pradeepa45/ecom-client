import TabNavigation from "@/components/tabs";
import Cart from "@/components/cart";
import { getUserInfo } from "../user";

const tabs = [
  {
    key: "cart",
    title: "Cart",
    children: <Cart />,
  },
  {
    key: "orders",
    title: "Orders",
    children: <p>Orders</p>,
  },
  {
    key: "account",
    title: "Account",
    children: <p>Account</p>,
  },
];

export default async function Dashboard() {
  const user = await getUserInfo();

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>
          There seems to be an issue on our side, please login after sometime.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex w-full flex-col items-center">
        <TabNavigation tabs={tabs} />
      </div>
    </div>
  );
}
