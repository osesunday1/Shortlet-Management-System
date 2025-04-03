import { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import axios from "axios";

const AddBookingComp = () => {
  const { apiUrl } = useContext(AppContext); // Assuming API URL is stored in context
  const [formData, setFormData] = useState({
    guestName: "",
    email: "",
    phone: "",
    apartment: "",
    checkInDate: "",
    checkOutDate: "",
  });

  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setErrorMessage("");

    try {
      const response = await axios.post(
        `${apiUrl}/api/v1/bookings/add-booking`,
        formData
      );
      setMessage(response.data.message);
      setFormData({
        guestName: "",
        email: "",
        phone: "",
        apartment: "",
        checkInDate: "",
        checkOutDate: "",
      });
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Failed to add booking.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-xl">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
        Add a New Booking
      </h2>

      {/* Display success or error message */}
      {message && (
        <p className="text-center text-green-600 font-medium mb-4">{message}</p>
      )}
      {errorMessage && (
        <p className="text-center text-red-600 font-medium mb-4">{errorMessage}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          {/* Guest Name */}
          <input
            type="text"
            name="guestName"
            placeholder="Guest Name"
            value={formData.guestName}
            onChange={handleChange}
            required
            className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />

          {/* Apartment Selector */}
          <select
            name="apartment"
            value={formData.apartment}
            onChange={handleChange}
            required
            className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          >
            <option value="">Select Apartment</option>
            <option value="Ivory Pearl">Ivory Pearl</option>
            <option value="Cozy Suites">Cozy Suites</option>
            <option value="Sunset Villa">Sunset Villa</option>
          </select>

          {/* Check-In Date */}
          <input
            type="date"
            name="checkInDate"
            value={formData.checkInDate}
            onChange={handleChange}
            required
            className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />

          {/* Check-Out Date */}
          <input
            type="date"
            name="checkOutDate"
            value={formData.checkOutDate}
            onChange={handleChange}
            required
            className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-white text-purple-600 font-semibold border-2 border-purple-600 rounded-xl hover:bg-purple-300 hover:text-black
           focus:outline-none focus:ring-4 focus:ring-purple-500 transition duration-300"
        >
          Add Booking
        </button>
      </form>
    </div>
  );
};

export default AddBookingComp;
