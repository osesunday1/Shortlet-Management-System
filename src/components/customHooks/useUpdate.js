import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const useUpdate = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateData = async (url, updatedData) => { // Accept the updated data as the second argument
    try {
      const token = localStorage.getItem('token'); // Retrieve token from localStorage
      const headers = token ? { Authorization: `Bearer ${token}` } : {}; // Set Authorization header if token exists

      setLoading(true);
      
      // Send PUT request to update the data
      const response = await axios.put(url, updatedData, { headers });
      
      // Show success toast and return updated data
      toast.success("Update Successful");
      return response.data; // Return the updated data
    } catch (err) {
      setError('Failed to update data');
      toast.error(`Failed to update data: ${err.message}`);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { updateData, loading, error };
};

export default useUpdate;