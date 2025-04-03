import React, { useState, useEffect } from "react";

const EditBookingModal = ({ booking, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    guestName: "",
    email: "",
    phone: "",
    apartment: "",
    checkInDate: "",
    checkOutDate: "",
  });

  useEffect(() => {
    if (booking) {
      setFormData({
        guestName: booking.guestName,
        email: booking.email,
        phone: booking.phone,
        apartment: booking.apartment,
        checkInDate: booking.checkInDate?.slice(0, 10),
        checkOutDate: booking.checkOutDate?.slice(0, 10),
      });
    }
  }, [booking]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(booking._id, formData); // call parent function
  };

  if (!booking) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-xl">
        <h2 className="text-xl font-semibold mb-4">Edit Booking</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="guestName" value={formData.guestName} onChange={handleChange} required className="w-full p-2 border rounded" placeholder="Guest Name" />
          <input name="email" value={formData.email} onChange={handleChange} required className="w-full p-2 border rounded" placeholder="Email" />
          <input name="phone" value={formData.phone} onChange={handleChange} required className="w-full p-2 border rounded" placeholder="Phone" />
          <input name="apartment" value={formData.apartment} onChange={handleChange} required className="w-full p-2 border rounded" placeholder="Apartment" />
          <input type="date" name="checkInDate" value={formData.checkInDate} onChange={handleChange} required className="w-full p-2 border rounded" />
          <input type="date" name="checkOutDate" value={formData.checkOutDate} onChange={handleChange} required className="w-full p-2 border rounded" />
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBookingModal;