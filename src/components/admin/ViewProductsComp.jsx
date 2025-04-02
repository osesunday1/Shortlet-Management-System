import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaEdit, FaTrash } from "react-icons/fa";

const ViewProductsComp = () => {
  const apiUrl = import.meta.env.VITE_BACKEND_URL;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [editFormData, setEditFormData] = useState({ name: "", price: "", quantity: "" });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${apiUrl}/products/get-products`);
      setProducts(res.data);
    } catch (err) {
      toast.error("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (product) => {
    setEditingProduct(product);
    setEditFormData({
      name: product.name,
      price: product.price,
      quantity: product.quantity,
    });
  };

  const handleEditChange = (e) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const res = await axios.put(`${apiUrl}/products/${editingProduct._id}`, editFormData);
      toast.success("Product updated");
      setProducts((prev) =>
        prev.map((p) => (p._id === editingProduct._id ? res.data.product : p))
      );
      setEditingProduct(null);
    } catch (err) {
      toast.error("Update failed");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await axios.delete(`${apiUrl}/products/${id}`);
      setProducts((prev) => prev.filter((p) => p._id !== id));
      toast.success("Product deleted");
    } catch (err) {
      toast.error("Failed to delete product");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-2xl rounded-xl mt-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">📦 Product Inventory</h2>

      {loading ? (
        <p className="text-center text-gray-500 animate-pulse">Loading products...</p>
      ) : products.length === 0 ? (
        <p className="text-center text-gray-500">No products available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Price</th>
                <th className="py-3 px-6 text-left">Quantity</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              {products.map((product) => (
                <tr
                  key={product._id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-all"
                >
                  <td className="py-3 px-6">{product.name}</td>
                  <td className="py-3 px-6">${product.price}</td>
                  <td className="py-3 px-6">{product.quantity}</td>
                  <td className="py-3 px-6 text-center flex justify-center gap-4">
                    <button
                      onClick={() => handleEditClick(product)}
                      className="text-blue-500 hover:text-blue-700 transition-transform hover:scale-110 cursor-pointer"
                      title="Edit"
                    >
                      <FaEdit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="text-red-500 hover:text-red-700 transition-transform hover:scale-110 cursor-pointer"
                      title="Delete"
                    >
                      <FaTrash size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {editingProduct && (
        <div className="mt-6 border-t pt-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Edit Product</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="name"
              value={editFormData.name}
              onChange={handleEditChange}
              className="p-2 border border-gray-300 rounded"
              placeholder="Product Name"
            />
            <input
              type="number"
              name="price"
              value={editFormData.price}
              onChange={handleEditChange}
              className="p-2 border border-gray-300 rounded"
              placeholder="Price"
            />
            <input
              type="number"
              name="quantity"
              value={editFormData.quantity}
              onChange={handleEditChange}
              className="p-2 border border-gray-300 rounded"
              placeholder="Quantity"
            />
          </div>
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleUpdate}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer"
            >
              Save Changes
            </button>
            <button
              onClick={() => setEditingProduct(null)}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewProductsComp;