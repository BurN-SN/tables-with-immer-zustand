import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { addNewRow } from "../components/Table/util";

export const useZustand = create(
  immer((set, get) => ({
    tabs: [],
    activeTab: null,

    newTab: (tab) =>
      set((draft) => {
        draft.tabs.push(tab);
        draft.activeTab = tab.id;
      }),

    init: (id, payload) => {
      const exists = get()[id];
      if (!exists) {
        set((draft) => {
          draft[id] = payload;
        });
      }
    },

    //
    replaceTableRow: (invoiceId, tableType, rowIndex, newRow) => {
      set((draft) => {
        draft[invoiceId][tableType][rowIndex] = newRow;
      });
    },

    updateTotal: (invoiceId, tableType, rowIndex, total) => {
      set((draft) => {
        draft[invoiceId][tableType].data[rowIndex].total = total;
      });
    },

    updateRow: (invoiceId, tableType, rowIndex, newValues) => {
      console.log("NEW VALUES", newValues);
      set((draft) => {
        for (const key in newValues) {
          // debugger;
          draft[invoiceId][tableType].data[rowIndex][key] = newValues[key];
        }
        // console.log("DRAFT", draft);
      });
    },

    addTableRow: (invoiceId, tableType) => {
      set((draft) => {
        draft[invoiceId][tableType].data.push(addNewRow(tableType, invoiceId));
      });
    },

    currentInvoice: () => {
      const currentInvoiceId = get().tabs.find((t) => t.id === get().activeTab)
        .invoiceId;
      return get()[currentInvoiceId];
    },

    getRow: (staticRow, index) => {
      const { invoiceId, tableType } = staticRow;
      return get()[invoiceId]?.[tableType]?.data?.[index];
    },

    currentTabObject: () => get().tabs.find((t) => t.id === get().activeTab)
  }))
);
