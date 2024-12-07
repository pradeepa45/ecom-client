"use client";

import { Tab, Tabs } from "@nextui-org/react";
import { usePathname } from "next/navigation";

interface Tab {
  key: string;
  title: string;
  href: string;
}

export default function TabNavigation({ tabs }: { tabs: Tab[] }) {
  const pathname = usePathname();

  return (
    <Tabs
      fullWidth
      aria-label="Options"
      radius="lg"
      selectedKey={pathname}
      size="lg"
    >
      {tabs.map((tab) => (
        <Tab key={tab.href} href={tab.href} title={tab.title} />
      ))}
    </Tabs>
  );
}
