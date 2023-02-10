import {
  LABOR_COLS,
  LABOR_SPECIAL_RATE_COLS,
  PARTS_COLS,
  PARTS_MARKUP_COLS,
  PARTS_ALLOWANCE_COLS,
  TRIP_COLS
} from "./columnConfig";
// import { PARTS_COLS } from "./columnConfig/Parts";

export const contractTypes = {
  labor: ["labor", "trip"],
  labor_Markup: ["labor", "partsMarkup", "trip"],
  laborParts_Markup: ["labor", "partsMarkup", "trip"],
  laborParts_SelectRate: ["laborSelectRate", "parts", "trip"],
  parts: ["parts"],
  laborParts: ["labor", "parts", "trip"],
  labor_Plus: ["labor", "partsAllowance", "trip"],
  laborParts_Plus: ["labor", "parts", "partsAllowance", "trip"]
};

export const COLUMNS = {
  labor: LABOR_COLS,
  laborSelectRate: LABOR_SPECIAL_RATE_COLS,
  parts: PARTS_COLS,
  trip: TRIP_COLS,
  partsMarkup: PARTS_MARKUP_COLS,
  partsAllowance: PARTS_ALLOWANCE_COLS
};

export const columnsByTable = {
  labor: ["asset", "component", "repair", "hours", "rate", "total"],
  laborSelectRate: [
    "asset",
    "component",
    "repair",
    "repairCode",
    "percentage",
    "rate",
    "total"
  ],
  partsMarkup: [
    "qty",
    "oem",
    "asset",
    "partNumber",
    "description",
    "price",
    "markup",
    "total"
  ],
  parts: ["qty", "oem", "asset", "partNumber", "description", "price", "total"],
  trip: ["miles", "tripType", "tripRate", "total"]
};

export const addNewRow = (tableType, invoiceId) => {
  const result = { tableType, invoiceId };
  columnsByTable[tableType].forEach((field) => {
    result[field] = null;
  });
  result.total = 0;
  return result;
};
