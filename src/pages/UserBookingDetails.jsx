import { useState } from "react";
import "./styles/UserBookings.css";

const UserBookingDetails = () => {
  const [userBookings, setUserBookings] = useState([
    { id: 1, apartment: "Luxury Lakefront Villa", checkIn: "10-04-2025", checkOut: "15-04-2025", status: "Confirmed" },
    { id: 2, apartment: "Skyline Penthouse", checkIn: "01-05-2025", checkOut: "06-05-2025", status: "Pending" }
  ]);

  const [pastBookings, setPastBookings] = useState([
    { id: 3, apartment: "Beachside Resort", checkIn: "10-01-2025", checkOut: "15-01-2025", status: "Completed" },
    { id: 4, apartment: "Mountain Cabin", checkIn: "05-02-2025", checkOut: "10-02-2025", status: "Completed" }
  ]);

  const handleCancelBooking = (id, status) => {
    if (status === "Confirmed") {
      const confirmPayment = window.confirm("Canceling this booking requires a $10 payment. Proceed?");
      if (!confirmPayment) return;
      alert("$10 has been charged for cancellation.");
    }
    setUserBookings(userBookings.filter(booking => booking.id !== id));
    alert("Booking canceled successfully.");
  };

  return (
    <div className="user-bookings-container">
      <h2>My Bookings</h2>
      <div className="bookings-table">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Apartment</th>
              <th>Check-in</th>
              <th>Check-out</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userBookings.length > 0 ? (
              userBookings.map((booking, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{booking.apartment}</td>
                  <td>{booking.checkIn}</td>
                  <td>{booking.checkOut}</td>
                  <td className={`status ${booking.status.toLowerCase()}`}>{booking.status}</td>
                  <td>
                    <button
                      className="cancel-btn"
                      onClick={() => handleCancelBooking(booking.id, booking.status)}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No upcoming bookings found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <h2>Past Bookings</h2>
      <div className="bookings-table">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Apartment</th>
              <th>Check-in</th>
              <th>Check-out</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {pastBookings.length > 0 ? (
              pastBookings.map((booking, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{booking.apartment}</td>
                  <td>{booking.checkIn}</td>
                  <td>{booking.checkOut}</td>
                  <td className={`status ${booking.status.toLowerCase()}`}>{booking.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No past bookings found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserBookingDetails;