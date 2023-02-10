import { QuantityInput, Total } from "../Formatters";

export const PARTS_COLS = [
  {
    dataField: "qty",
    text: "QTY",
    formatter: (col, row, rowI) => (
      <QuantityInput cell={col} row={row} rowIndex={rowI} fieldName={"qty"} />
    )
  },
  {
    dataField: "oem",
    text: "OEM"
  },
  {
    dataField: "asset",
    text: "ASSET"
  },
  {
    dataField: "partNumber",
    text: "PART #"
  },
  {
    dataField: "description",
    text: "DESC"
  },

  {
    dataField: "unitPrice",
    text: "PRICE"
  },
  {
    dataField: "total",
    text: "TOTAL",
    formatter: (col, row, i) => <Total col={col} row={row} rowIndex={i} />
  }
];

export const PARTS_MARKUP_COLS = [
  {
    dataField: "qty",
    text: "QTY",
    formatter: QuantityInput
  },
  {
    dataField: "oem",
    text: "OEM"
  },
  {
    dataField: "asset",
    text: "ASSET"
  },
  {
    dataField: "partNumber",
    text: "PART #"
  },
  {
    dataField: "description",
    text: "DESC"
  },

  {
    dataField: "unitPrice",
    text: "PRICE"
  },
  {
    dataField: "markup",
    text: "Markup"
  },
  {
    dataField: "total",
    text: "TOTAL"
  }
];

export const PARTS_ALLOWANCE_COLS = [
  {
    dataField: "allowance"
  }
];
