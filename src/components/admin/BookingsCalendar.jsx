import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import axios from "axios";

const BookingsCalendar = () => {
  const [bookedDates, setBookedDates] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/bookings/get-bookings");
        const bookings = res.data;

        const allDates = bookings.flatMap(booking => {
          const start = new Date(booking.checkInDate);
          const end = new Date(booking.checkOutDate);
          const datesInRange = [];

          for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
            datesInRange.push(new Date(d).toDateString());
          }

          return datesInRange;
        });

        setBookedDates(allDates);
      } catch (err) {
        console.error("Error fetching bookings:", err);
      }
    };

    fetchBookings();
  }, []);

  const tileContent = ({ date, view }) => {
    if (view === "month" && bookedDates.includes(date.toDateString())) {
      return <div className="w-2 h-2 mt-1 mx-auto rounded-full bg-red-500"></div>; // Dot indicator
    }
    return null;
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month" && bookedDates.includes(date.toDateString())) {
      return "bg-red-200 text-black font-semibold rounded-lg"; // Full cell background
    }
    return null;
  };

  return (
    <div className="flex justify-center items-center bg-gray-100">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Booking Calendar</h2>
      <Calendar
        tileClassName={tileClassName}
        tileContent={tileContent}
        calendarType="gregory"
      />
      <p className="text-sm mt-3 text-center text-gray-500">🔴 indicates booked date</p>
    </div>
  </div>
  );
};

export default BookingsCalendar;