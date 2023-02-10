import { useZustand } from "./store";

export const getNextTabId = () => {
  const { tabs } = useZustand.getState();
  var ids = tabs.map((a) => a.id);
  if (ids.length === 0) return 1;
  return Math.max(...ids) + 1;
};

export const randomized = () => Math.random().toString(36).substring(7);

export const currentTab = () => {
  const { tabs, activeTab } = useZustand.getState();
  return tabs.find((t) => t.id === activeTab);
};
