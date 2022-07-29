import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // sending GET request
  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, {
      signal: abortCont.signal,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setData(Object.entries(data));
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
        } else {
          setError(error.message);
          setIsLoading(false);
        }
      });

    return () => abortCont.abort();
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;
