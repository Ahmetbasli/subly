import { useEffect, useState } from "react";
function useFetch<TData>(getData: () => Promise<TData>) {
  const [data, setData] = useState<TData | null>(null);
  const [loading, setLoading] = useState<boolean | null>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    try {
      (async () => {
        const data = await getData();
        setData(data);
      })();
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [getData]);

  const refetch = () => {
    setLoading(true);

    try {
      (async () => {
        const data = await getData();
        setData(data);
      })();
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, refetch };
}

export default useFetch;
