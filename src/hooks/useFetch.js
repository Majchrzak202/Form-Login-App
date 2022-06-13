import { useCallback } from "react";

const useFetch = () => {
  const sendRequest = useCallback(async (requestConfig, applyData) => {
    const response = await fetch(requestConfig.url, {
      method: requestConfig.method ? requestConfig.method : 'GET',
      headers: requestConfig.headers ? requestConfig.headers : {}, 
      body: requestConfig.body ? JSON.stringify(requestConfig.body) : null 
    });

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const data = await response.json();

    applyData(data);
  }, []);

  return { sendRequest };
};

export default useFetch;
