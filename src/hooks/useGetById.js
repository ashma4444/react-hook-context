import { useEffect, useState } from "react";

function useGetById({ url, id }) {
  const [post, setPost] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = false;
    async function fetchById(isMounted) {
      isMounted = true;
      setLoading(true);
      fetch(`${url}/${id}`)
        .then((response) => response.json())
        .then((json) => {
          setPost(json);
        })
        .catch((e) => {
          setError(e.toString() || "sth went wrong");
        })
        .finally(() => {
          isMounted = false;
          setLoading(false);
        });
    }

    fetchById(isMounted);
    return (isMounted) => {
      isMounted = false;
    };
  }, []);

  return { post, isLoading, error };
}

export default useGetById;
