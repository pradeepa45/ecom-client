"use client";

import { Tab, Tabs } from "@nextui-org/react";

interface Tab {
  key: string;
  title: string;
  children: React.ReactNode;
}

export default function TabNavigation({ tabs }: { tabs: Tab[] }) {
  return (
    <Tabs aria-label="Options" radius="lg" size="lg">
      {tabs.map((tab) => (
        <Tab key={tab.key} title={tab.title}>
          <div className="p-4">{tab.children}</div>
        </Tab>
      ))}
    </Tabs>
  );
}
