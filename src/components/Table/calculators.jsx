export const calculators = {
  // parts: (newValue, row) => {
  //   const newRow = { ...row, ...newValue };

  //   const qty = newRow.qty || 0;
  //   const price = newRow.price || 1;
  //   const { oem } = newRow;
  //   console.log(qty, "*", price, "=", qty * price);

  //   newRow.total = qty * price;

  //   return newRow;
  // },
  parts: (newQty, price) => {
    const qty = newQty || 0;
    const preparedPrice = price || 1;
    console.log(qty, "*", preparedPrice, "=", qty * preparedPrice);
    return qty * preparedPrice;
  }
};
