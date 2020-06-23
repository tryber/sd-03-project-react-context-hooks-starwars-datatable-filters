import { useState, useEffect } from 'react';

function useFetchData(callback) {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = () => {
      setLoading(true);
      callback().then(
        (response) => {
          setData(response.results);
          setLoading(false);
        },
        (response) => {
          setError(response.message);
          setLoading(false);
        },
      );
    };
    fetch();
    return () => {
      setLoading(false);
      setData([]);
    };
  }, [callback]);

  return {
    data,
    error,
    loading,
  };
}

export default useFetchData;
