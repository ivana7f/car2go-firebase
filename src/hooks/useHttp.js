import { useState } from "react";

// custom hook for other requests (POST,PUT,DELETE,...)
function useHttp(requestConfig, applyData) {
  const [error, setError] = useState(null);

  async function sendRequest() {
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method,
        headers: requestConfig.headers,
        body: JSON.stringify(requestConfig.body),
      });

      if (!response.ok) {
        throw Error(requestConfig.errorMessage);
      }

      const data = await response.json();

      applyData(data);
    } catch (error) {
      setError(error.message);
    }
  }

  return {
    error,
    setError,
    sendRequest,
  };
}

export default useHttp;
