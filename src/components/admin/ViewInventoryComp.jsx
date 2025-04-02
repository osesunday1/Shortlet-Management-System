import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaEdit, FaTrash, FaDownload } from "react-icons/fa";
import jsPDF from "jspdf";
import "jspdf-autotable";
import autoTable from "jspdf-autotable";

const ViewInventoryComp = () => {
  const apiUrl = import.meta.env.VITE_BACKEND_URL;
  const [records, setRecords] = useState([]);
  const [editing, setEditing] = useState(null);
  const [formData, setFormData] = useState({ quantity: "" });

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    try {
      const res = await axios.get(`${apiUrl}/inventories/get-inventories`);
      setRecords(res.data);
    } catch (err) {
      toast.error("Failed to load inventory records");
    }
  };

  const handleEditClick = (record) => {
    setEditing(record);
    setFormData({ quantity: record.quantity });
  };

  const handleEditChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const res = await axios.put(`${apiUrl}/inventories/inventories/${editing._id}`, formData);
      toast.success("Record updated");
      fetchRecords();
      setEditing(null);
    } catch (err) {
      toast.error("Failed to update record");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this record?")) return;
    try {
      await axios.delete(`${apiUrl}/inventories/inventories/${id}`);
      toast.success("Record deleted");
      fetchRecords();
    } catch (err) {
      toast.error("Failed to delete");
    }
  };

  const generateInvoice = (record) => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("SMS Inventory Invoice", 14, 20);
    doc.setFontSize(12);
    doc.text(`Client: ${record.client.guestName}`, 14, 30);
    doc.text(`Date: ${new Date(record.createdAt).toLocaleDateString()}`, 14, 38);

    autoTable(doc, {
        startY: 50,
        head: [["Product", "Price", "Quantity", "Total"]],
        body: [
          [
            record.product.name,
            `₦${record.product.price}`,
            record.quantity,
            `₦${record.totalAmount}`
          ]
        ]
      });

    doc.text("Thank you for your business!", 14, doc.lastAutoTable.finalY + 10);
    doc.save(`Invoice_${record.client.guestName}.pdf`);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-2xl rounded-xl mt-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        📋 Inventory Records
      </h2>

      {records.length === 0 ? (
        <p className="text-center text-gray-500">No records found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Client</th>
                <th className="py-3 px-6 text-left">Product</th>
                <th className="py-3 px-6 text-left">Quantity</th>
                <th className="py-3 px-6 text-left">Total</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              {records.map((record) => (
                <tr key={record._id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-6">{record.client.guestName}</td>
                  <td className="py-3 px-6">{record.product.name}</td>
                  <td className="py-3 px-6">{record.quantity}</td>
                  <td className="py-3 px-6">₦{record.totalAmount}</td>
                  <td className="py-3 px-6 flex justify-center gap-3">
                    <button
                      onClick={() => handleEditClick(record)}
                      className="text-blue-500 hover:text-blue-700"
                      title="Edit"
                    >
                      <FaEdit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(record._id)}
                      className="text-red-500 hover:text-red-700"
                      title="Delete"
                    >
                      <FaTrash size={18} />
                    </button>
                    <button
                      onClick={() => generateInvoice(record)}
                      className="text-green-600 hover:text-green-800"
                      title="Download Invoice"
                    >
                      <FaDownload size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {editing && (
        <div className="mt-6 border-t pt-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Edit Record</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleEditChange}
              className="p-2 border border-gray-300 rounded"
              placeholder="New Quantity"
            />
          </div>
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleUpdate}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Save Changes
            </button>
            <button
              onClick={() => setEditing(null)}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewInventoryComp;