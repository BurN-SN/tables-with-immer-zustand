import { useEffect, useState } from "react";
import { COLUMNS } from "../Table/util";
import { contractTypes } from "../Table/util";

export const useConfigureTable = (value) => {
  const [prepared, setPrepared] = useState(null);
  useEffect(() => {
    if (!value) {
      setPrepared(null);
      return;
    }
    const result = {};
    contractTypes[value].forEach((table) => {
      result[table] = {
        tableType: table,
        columns: COLUMNS[table],
        data: []
      };
    });
    setPrepared(result);
  }, [value]);

  return prepared;
};
