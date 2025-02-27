import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const ViewBookingsComp = () => {
  const { allGuest } = useContext(AppContext);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Bookings</h2>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-3 border">#</th>
              <th className="p-3 border">Guest Name</th>
              <th className="p-3 border">Check-in Date</th>
              <th className="p-3 border">Check-out Date</th>
            </tr>
          </thead>
          <tbody>
            {allGuest.length > 0 ? (
              allGuest.map((guest, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="p-3 text-center">{index + 1}</td>
                  <td className="p-3">{guest.name}</td>
                  <td className="p-3">{guest.email}</td>
                  <td className="p-3">{guest.phone}</td>
                  <td className="p-3">{guest.roomNumber}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-4 text-center text-gray-500">
                  No bookings available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewBookingsComp;