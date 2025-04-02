import { useState } from 'react';
import axios from 'axios';

const useUpdate = (url, onSuccess) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateData = async (id, payload) => {
    setLoading(true);
    setError(null);

    try {
      await axios.put(`${url}/${id}`, payload);
      onSuccess && onSuccess();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update');
      console.error('Update error:', err);
    } finally {
      setLoading(false);
    }
  };

  return { updateData, loading, error };
};

export default useUpdate;