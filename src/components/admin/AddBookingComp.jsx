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

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await axios.post(
        `http://localhost:5000/api/v1/bookings/add-booking`,
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
      setMessage(error.response?.data?.message || "Failed to add booking.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-white shadow-2xl rounded-2xl mt-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        📝 Add Booking
      </h2>
  
      {message && (
        <p className="text-center text-green-600 font-medium mb-4">
          {message}
        </p>
      )}
  
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="guestName"
          placeholder="Guest Name"
          value={formData.guestName}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400"
        />
  
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400"
        />
  
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400"
        />
  
        <select
          name="apartment"
          value={formData.apartment}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        >
          <option value="">Select Apartment</option>
          <option value="Ivory Pearl">Ivory Pearl</option>
          <option value="Cozy Suites">Cozy Suites</option>
          <option value="Sunset Villa">Sunset Villa</option>
        </select>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="date"
            name="checkInDate"
            value={formData.checkInDate}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
          <input
            type="date"
            name="checkOutDate"
            value={formData.checkOutDate}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
        </div>
  
        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-200"
        >
          ➕ Add Booking
        </button>
      </form>
    </div>
  );
};

export default AddBookingComp;