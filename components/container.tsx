import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <section className="gap-4 py-8 md:py-10 min-h-screen">
      <div className="text-center justify-center">{children}</div>
    </section>
  );
}
