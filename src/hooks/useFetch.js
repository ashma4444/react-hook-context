import React, { useState, useEffect } from "react";

function useFetch({ url }) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          // console.log({ json });
          setData(json);
        })
        .catch((e) => {
          setError(e.toString() || "Something went wrong...");
        })
        .finally(setLoading(false));
    }
    fetchData();
  }, []);
  return { data, isLoading, error };
}

export default useFetch;
