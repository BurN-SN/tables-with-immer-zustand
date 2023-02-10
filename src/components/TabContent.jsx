import { currentTab } from "../lib/helpers";
import { useZustand } from "../lib/store";
import { TableController } from "./Table";

export const TabContent = () => {
  const { tabs } = useZustand();
  const currentTabModel = currentTab();

  const display = {
    labor: "Labor Only",
    labor_Markup: "Labor With Markup",
    laborParts_Markup: "Parts & Labor w/ Markup",
    laborParts_SelectRate: "Parts & Labor w/ Select Rate",
    parts: "Parts Only",
    laborParts: "Parts & Labor",
    labor_Plus: "Labor Plus",
    laborParts_Plus: "Parts and Labor Plus"
    // laborParts_SelectRate: "Select Rate",
    // laborMarkupLennox: "Labor Markup (Lennox)",
    // partsOnlyLennox: "Parts Only (Lennox)",
    // commercialPartsLaborMarkup: "Parts & Labor w/ Markup - Commercial",
    // commercialLaborMarkup: "Labor w/ Markup - Commercial"
  };

  return tabs.length === 0 ? (
    <h1>Click the ADD button to get started</h1>
  ) : (
    <>
      <h1>{display[currentTabModel?.tableConfigType]}</h1>
      <TableController />
    </>
  );
};
