import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
  const [data, setData] = useState({}); //default empty object, as data returned from api will be in object form (found out by observing api's response)
                                        //also prevents crashes

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res[currency]);
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
