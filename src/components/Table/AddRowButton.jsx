import styles from "./Table.module.scss";
import { useZustand } from "../../lib/store";

export const AddRowButton = ({ invoiceId, tableType }) => {
  const [id, addTableRow] = useZustand((state) => {
    const { tabs, activeTab } = state;
    const invoiceId = tabs.find((t) => t.id === activeTab).invoiceId;
    return [invoiceId, state.addTableRow];
  });

  const handleAddRow = () => {
    addTableRow(id, tableType);
  };
  return (
    <button className={styles.addRowBtn} onClick={handleAddRow}>
      + ROW
    </button>
  );
};
