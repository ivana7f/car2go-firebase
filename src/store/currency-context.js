import React, { useEffect, useState } from "react";

// creating context
const CurrencyContext = React.createContext({});

// creating context provider
export function CurrencyContextProvider(props) {
  const [currency, setCurrency] = useState("EUR");
  const [convertRate, setConvertRate] = useState(1);

  async function getConvertRate() {
    try {
      const response = await fetch(
        `https://api.getgeoapi.com/v2/currency/convert?api_key=d333f85660ad97bd03e396faf08e14b66b7eb1cc&from=EUR&to=${currency}&amount=1&format=json`
      );
      const data = await response.json();
      setConvertRate(data.rates[`${currency}`]["rate"]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getConvertRate();
  }, [currency]);

  const contextValue = {
    convertRate,
    currency,
    setCurrency,
  };

  return (
    <CurrencyContext.Provider value={contextValue}>
      {props.children}
    </CurrencyContext.Provider>
  );
}

export default CurrencyContext;
