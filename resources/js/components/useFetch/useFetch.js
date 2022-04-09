import { useEffect, useState } from "react"

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetch(url,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(res => {
        if (!res.ok) {
          throw Error('Couldnt fetch data from server')
        }
        return res.json()
      })
      .then((resData) => {
        setData(resData);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      })
  }, [url])
  return { data, isLoading, error };
}

export default useFetch;