import { getUserInfo } from "../user";

import TabNavigation from "@/components/tabs";

const tabs = [
  {
    key: "cart",
    title: "Cart",
    href: "/dashboard",
  },
  {
    key: "orders",
    title: "Orders",
    href: "/dashboard/orders",
  },
  {
    key: "settings",
    title: "Settings",
    href: "/dashboard/settings",
  },
];

export default async function Dashboard({
  children,
}: {
  children: React.ReactNode;
}) {
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
      <div className="flex w-full flex-col">
        <TabNavigation tabs={tabs} />
        {children}
      </div>
    </div>
  );
}
