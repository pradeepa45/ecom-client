export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="gap-4 py-8 md:py-10">
      <div className="text-center justify-center">{children}</div>
    </section>
  );
}
