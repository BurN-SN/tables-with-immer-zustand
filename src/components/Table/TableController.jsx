import BootstrapTable from "react-bootstrap-table-next";
import { currentTab } from "../../lib/helpers";
import styles from "./Table.module.scss";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { useZustand } from "../../lib/store";
import { AddRowButton } from "./AddRowButton";
import { Currency } from "../Shared";

export const TableController = () => {
  const { invoiceId } = currentTab();

  const currentInvoice = useZustand((state) => state.currentInvoice());

  // if (!currentInvoice) return <>ERROR</>;

  return Object.entries(currentInvoice)?.map((e) => {
    return <TableComponent invoiceId={invoiceId} tableType={e[0]} />;
  });
};

// Wrapping each table in its own component allows us to access state
// for JUST that table specifically, while performing the map in the parent.
const TableComponent = ({ invoiceId, tableType }) => {
  const { columns, data } = useZustand((state) => {
    return state.currentInvoice()[tableType];
  });

  const total = data.reduce((acc, lineItem) => acc + lineItem.total, 0);

  return (
    <div className={styles.tableWrapper}>
      <BootstrapTable
        key={`${invoiceId}_${tableType}`}
        classes={styles.w100}
        columns={columns}
        data={data}
        keyField={"total"}
        striped
        caption={tableType}
      />
      {/* THE FOLLOWING WOULD BE THE FOOTER OF THE TABLE */}
      <div className={styles.footerRow}>
        <AddRowButton tableType={tableType} invoiceId={invoiceId} />
        {/* <button className={styles.addRowBtn}>+ ROW</button> */}
        <p>
          <span>
            <b>Table Total:</b>
            &nbsp;
            <Currency value={total} />
          </span>
        </p>
      </div>
    </div>
  );
};
