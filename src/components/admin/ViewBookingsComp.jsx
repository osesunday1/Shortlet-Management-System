import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaEdit, FaTrash } from "react-icons/fa";
import EditBookingModal from "./EditBookingModal";

const ViewBookingsComp = () => {
  const apiUrl = import.meta.env.VITE_BACKEND_URL;
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  


  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${apiUrl}/bookings/get-bookings`);
      setBookings(res.data);
    } catch (err) {
      toast.error("Failed to fetch bookings");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (booking) => {
    setSelectedBooking(booking); // Open modal
  };

  const handleCloseModal = () => {
    setSelectedBooking(null);
  };

  const handleSaveChanges = async (id, updatedData) => {
    try {
      const res = await axios.put(`${apiUrl}/bookings/bookings/${id}`, updatedData);
      toast.success("Booking updated successfully");
      setBookings((prev) =>
        prev.map((b) => (b._id === id ? res.data.booking : b))
      );
      handleCloseModal();
    } catch (err) {
      toast.error("Failed to update booking");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this booking?")) return;
    try {
      await axios.delete(`${apiUrl}/bookings/bookings/${id}`);
      setBookings(bookings.filter((b) => b._id !== id));
      toast.success("Booking deleted");
    } catch (err) {
      toast.error("Failed to delete");
    }
  };
  return (
      <div className="max-w-6xl mx-auto p-6 bg-white shadow-2xl rounded-xl mt-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          🏨 Bookings Overview
        </h2>
  
        {loading ? (
          <p className="text-center text-gray-500 animate-pulse">Loading bookings...</p>
        ) : bookings.length === 0 ? (
          <p className="text-center text-gray-500">No bookings available.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Guest</th>
                  <th className="py-3 px-6 text-left">Email</th>
                  <th className="py-3 px-6 text-left">Apartment</th>
                  <th className="py-3 px-6 text-left">Check-in</th>
                  <th className="py-3 px-6 text-left">Check-out</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm">
                {bookings.map((booking, index) => (
                  <tr
                    key={booking._id}
                    className="border-b border-gray-200 hover:bg-gray-50 transition-all"
                  >
                    <td className="py-3 px-6">{booking.guestName}</td>
                    <td className="py-3 px-6">{booking.email}</td>
                    <td className="py-3 px-6">{booking.apartment}</td>
                    <td className="py-3 px-6">
                      {new Date(booking.checkInDate).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-6">
                      {new Date(booking.checkOutDate).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-6 text-center flex justify-center gap-4">
                      <button
                        onClick={() => handleEdit(booking)}
                        className="text-blue-500 hover:text-blue-700 transition-transform hover:scale-110"
                        title="Edit"
                      >
                        <FaEdit size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(booking._id)}
                        className="text-red-500 hover:text-red-700 transition-transform hover:scale-110"
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
  
        {selectedBooking && (
          <EditBookingModal
            booking={selectedBooking}
            onClose={handleCloseModal}
            onSave={handleSaveChanges}
          />
        )}
      </div>
    );
};

export default ViewBookingsComp;