import { useZustand } from "../../../lib/store";
import { Currency } from "../../Shared/Currency";

export const Total = ({ row, rowIndex }) => {
  const data = useZustand()[row.invoiceId][row.tableType].data[rowIndex].total;

  return <Currency value={data} />;
};
