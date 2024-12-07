import { getUserInfo } from "@/app/user";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

export default async function Settings() {
  const { authenticatedItem: user } = await getUserInfo();

  return (
    <Card className="p-4 mt-4">
      <CardHeader>
        <h1 className="text-2xl font-bold">User Dashboard</h1>
      </CardHeader>
      <CardBody>
        <h2 className="text-lg font-semibold mb-2">User Information</h2>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Role:</strong>{" "}
          {user.isAdmin ? "Admin" : user.isCustomer ? "Customer" : "User"}
        </p>
      </CardBody>
    </Card>
  );
}
