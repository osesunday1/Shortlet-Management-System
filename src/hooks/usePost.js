import { useState } from 'react';
import axios from 'axios';

const usePost = (url, onSuccess) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (payload) => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.post(url, payload);
      onSuccess && onSuccess(res.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to post');
      console.error('POST error:', err);
    } finally {
      setLoading(false);
    }
  };

  return { postData, loading, error };
};

export default usePost;