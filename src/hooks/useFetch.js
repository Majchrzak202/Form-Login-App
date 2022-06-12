import React, { useState } from "react";

const useFetch = (requestConfig, applyData) => {


  const sendRequest = async () => {
    const response = await fetch(requestConfig.url);

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const data = await response.json();

    applyData(data)
  };



  return {sendRequest: sendRequest}
};


export default useFetch; 
