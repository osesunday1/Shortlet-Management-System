import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify"; 

const usePost = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const postData = async ({ 
    postData, 
    method = "POST", // ✅ Supports multiple methods (POST, PUT, DELETE)
    successMessage = "Action completed successfully!", // ✅ Dynamic success message
    onSuccess, // ✅ Callback function after success
    onError // ✅ Callback function after error
  }) => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token"); 
      const headers = token ? { Authorization: `Bearer ${token}` } : {};

      const result = await axios({
        method, // ✅ Supports different HTTP methods
        url,
        data: postData,
        headers
      });

      setResponse(result.data);
      toast.success(successMessage);

      if (onSuccess) onSuccess(result.data); // ✅ Execute success callback if provided
      return result.data;

    } catch (err) {
      const errorMessage = err.response?.data?.message || "Something went wrong. Please try again.";
      setError(errorMessage);
      toast.error(errorMessage);

      if (onError) onError(errorMessage); // ✅ Execute error callback if provided
      return null;

    } finally {
      setLoading(false);
    }
  };

  return { postData, loading, error, response };
};

export default usePost;