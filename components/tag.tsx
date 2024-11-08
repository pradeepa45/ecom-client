export default function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium w-fit ${className}`}
    >
      {children}
    </span>
  );
}
