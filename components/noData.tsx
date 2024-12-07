import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";

export default function Oops({
  title,
  content,
  cta,
}: {
  title?: string;
  content?: React.ReactNode;
  cta?: React.ReactNode;
}) {
  return (
    <Card fullWidth className="flex justify-center flex-col mt-4 p-4">
      {title && (
        <CardHeader>
          <h2 className="text-2xl font-semibold">{title}</h2>
        </CardHeader>
      )}
      {content && <CardBody className="inline-flex">{content}</CardBody>}
      {cta && <CardFooter>{cta}</CardFooter>}
    </Card>
  );
}
