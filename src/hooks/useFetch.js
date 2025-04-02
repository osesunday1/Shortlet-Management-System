import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url, trigger = null) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(url);
        setData(res.data.tasks || res.data);
      } catch (err) {
        setError(err.message || 'Error fetching data');
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, [url, trigger]);
  
    return { data, loading, error, refetch: fetchData };
  };

export default useFetch;