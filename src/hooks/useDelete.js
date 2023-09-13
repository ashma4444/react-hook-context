import { useEffect, useState } from "react";

function useDelete({ url, id }) {
  const [post, setPost] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = false;
    async function fetchDelete(isMounted) {
      isMounted = true;
      setLoading(true);
      fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then(() => {
          setPost(null);
        })
        .catch((e) => {
          setError(e.toString() || "sth went wrong");
        })
        .finally(() => {
          isMounted = false;
          setLoading(false);
        });
    }

    fetchDelete(isMounted);
    return (isMounted) => {
      isMounted = false;
    };
  }, []);

  return { post, isLoading, error };
}

export default useDelete;
