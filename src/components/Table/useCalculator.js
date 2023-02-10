import { useZustand } from "../../lib/store";
import { calculators } from "./calculators";

export const useCalculator = () => {
  const updateTable = useZustand((state) => state.updateTotal);

  const calculate = (newField, tableType, invoiceId, row, rowIndex) => {
    const newRow = calculators[tableType](newField, row.price);

    updateTable(invoiceId, tableType, rowIndex, newRow);
    // return calculators[tableType](newField, tableType);
    // switch (tableType) {
    //   case "parts": {
    //     return calculator[tableType](newField);
    //   }
    //   default:
    //     return newField;
    // }
  };

  return calculate;
};
