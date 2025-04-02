import { useState } from 'react';
import axios from 'axios';

const useDelete = (url, onSuccess) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteData = async (id) => {
    setLoading(true);
    setError(null);

    try {
      await axios.delete(`${url}/${id}`);
      onSuccess && onSuccess();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to delete');
      console.error('Delete error:', err);
    } finally {
      setLoading(false);
    }
  };

  return { deleteData, loading, error };
};

export default useDelete;