import { useState } from "react";
import { useZustand } from "../../../lib/store";
import { calculators } from "../calculators";
import Cleave from "cleave.js";

export const QuantityInput = ({ cell, row, rowIndex, fieldName }) => {
  const [value, setValue] = useState(cell || "");

  const { tableType, invoiceId } = row;

  const updateRow = useZustand((state) => state.updateRow);

  const acceptChanges = (e) => {
    const { value } = e.target;
    const num = Number(value).toFixed(0);

    const total = calculators[tableType](num, row.price);
    updateRow(invoiceId, tableType, rowIndex, { qty: num, total });
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <>
      <Cleave />
      {/* <input
        name={fieldName}
        style={{
          maxWidth: "100%",
          border: "none",
          outline: "none",
          background: "transparent",
          textAlign: "center"
        }}
        value={value}
        onChange={handleInputChange}
        onBlur={acceptChanges}
      /> */}
    </>
  );
};
