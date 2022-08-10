import React, { useContext } from "react";
import CurrencyContext from "../../store/currency-context";
import classes from "./Header.module.scss";

function Currency() {
  const currencyCtx = useContext(CurrencyContext);

  return (
    <select
      // name="currency"
      className={classes.selectField}
      onChange={(e) => {
        currencyCtx.setCurrency(e.target.value);
        // currencyCtx.convertCurrency();
      }}
      defaultValue={currencyCtx.currency}
    >
      <option value="EUR">EUR</option>
      <option value="USD">USD</option>
      <option value="GBP">GBP</option>
      <option value="CHF">CHF</option>
      <option value="BAM">BAM</option>
    </select>
  );
}

export default Currency;
