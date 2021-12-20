import { useState, useEffect, useCallback } from "react";
const useFetch = (url) => {
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [data, setData] = useState([]);
  const getData = useCallback(async () => {
    let data = [];
    try {
      const response = await fetch(url);
      data = await response.json();
    } catch (err) {
      console.log(err);
    }
    setData(data);
    setIsDataLoading(false);
  }, [url]);
  useEffect(() => {
    getData();
  }, [getData]);
  return [data, isDataLoading];
};

export default useFetch;
