import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';






const useFetch = (url, trigger = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token'); // Retrieve token from localStorage
        const headers = token ? { Authorization: `Bearer ${token}` } : {}; // Set Authorization header if token exists
      
        const response = await axios.get(url, { headers }); // Include headers with the request
        

        setData(response.data.data); // Ensure flexibility in handling different API response formats

      } catch (err) {
        setError(`Failed to fetch data: ${err.message}`);
        toast.error(error)
      } finally {
        setLoading(false);
      }
    };


    fetchData();
  }, [url, trigger]);

  return { data, loading, error };
};

export default useFetch;