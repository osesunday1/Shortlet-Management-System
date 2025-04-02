import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddInventoryComp = () => {
  const apiUrl = import.meta.env.VITE_BACKEND_URL;

  const [clients, setClients] = useState([]);
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    client: "",
    product: "",
    quantity: ""
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchClients();
    fetchProducts();
  }, []);

  const fetchClients = async () => {
    try {
      const res = await axios.get(`${apiUrl}/bookings/guest-dropdown`);
      setClients(res.data);
    } catch (err) {
      toast.error("Failed to fetch guests");
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${apiUrl}/products/get-products`);
      setProducts(res.data);
    } catch (err) {
      toast.error("Failed to fetch products");
    }
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${apiUrl}/inventories/add-inventory`, formData);
      toast.success(res.data.message || "Inventory record added!");
      setFormData({ client: "", product: "", quantity: "" });
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to add inventory record");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-white shadow-2xl rounded-2xl mt-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">📋 Add Inventory Record</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <select
          name="client"
          value={formData.client}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select Guest</option>
          {clients.map((guest) => (
            <option key={guest._id} value={guest._id}>
              {guest.guestName}
            </option>
          ))}
        </select>

        <select
          name="product"
          value={formData.product}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select Product</option>
          {products.map((p) => (
            <option key={p._id} value={p._id}>
              {p.name}  — ${p.price}
            </option>
          ))}
        </select>

        <input
          type="number"
          name="quantity"
          placeholder="Quantity Consumed"
          value={formData.quantity}
          onChange={handleChange}
          required
          min={1}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full p-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-200"
        >
          {loading ? "Saving..." : "Add Record"}
        </button>
      </form>
    </div>
  );
};

export default AddInventoryComp;
