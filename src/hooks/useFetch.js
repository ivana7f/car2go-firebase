import { useCallback, useEffect, useState } from "react";

// custom hook for sending GET requests
function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setError(null);
    try {
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw Error("Could not fetch data");
      }

      const data = await response.json();
      setData(Object.entries(data));
      setError(null);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error };
}

export default useFetch;
