import { useState, useEffect } from 'react';

function useFetch({ url, bodyType = 'json' }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchUrl() {
    const response = await fetch(url);
    if (bodyType === 'json') {
      setData(await response.json());
    } else if (bodyType === 'text') {
      setData(await response.text());
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchUrl();
  }, []);
  return [data, loading];
}

export { useFetch };
