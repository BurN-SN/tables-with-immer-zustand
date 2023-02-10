import { TabContent } from "./components/TabContent";
import { TabNav } from "./components/TabNav";
import { useZustand } from "./lib/store";
import "./styles.css";

export default function App() {
  const [tabs] = useZustand((state) => [state.tabs, state.newTab]);
  // console.log("state", useZustand.getState());

  return (
    <div className="App">
      <TabNav />
      {tabs.length === 0 ? (
        <h1>Click the ( + ) button to get started</h1>
      ) : (
        <TabContent />
      )}
    </div>
  );
}
