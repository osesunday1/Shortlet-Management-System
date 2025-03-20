import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const ViewApartmentsComp = () => {
  const { allApartments } = useContext(AppContext);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Bookings</h2>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-3 border">#</th>
              <th className="p-3 border">Apartment Name</th>
              <th className="p-3 border">Number of Rooms</th>
              <th className="p-3 border">Floor</th>
              <th className="p-3 border">Available</th>
              <th className="p-3 border">Clean</th>
              <th className="p-3 border">Occupied</th>
            </tr>
          </thead>
          <tbody>
            {allApartments.length > 0 ? (
              allApartments.map((apartment, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="p-3 text-center">{index + 1}</td>
                  <td className="p-3">{apartment.name}</td>
                  <td className="p-3">{apartment.rooms}</td>
                  <td className="p-3">{apartment.floor}</td>
                  <td className="p-3">{apartment.available}</td>
                  <td className="p-3">{apartment.clean}</td>
                  <td className="p-3">{apartment.occupied}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-4 text-center text-gray-500">
                  No Apartments available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApartmentsComp;