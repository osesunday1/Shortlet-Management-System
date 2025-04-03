import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const ViewApartmentsComp = () => {
  const { allApartments } = useContext(AppContext);
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-xl rounded-xl mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        🏘️ All Bookings (Apartments)
      </h2>
  
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
              <th className="p-3 text-left border-t rounded-tl-lg">#</th>
              <th className="p-3 text-left border-t">Apartment Name</th>
              <th className="p-3 text-center border-t">Rooms</th>
              <th className="p-3 text-center border-t">Floor</th>
              <th className="p-3 text-center border-t">Available</th>
              <th className="p-3 text-center border-t">Clean</th>
              <th className="p-3 text-center border-t rounded-tr-lg">Occupied</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {allApartments.length > 0 ? (
              allApartments.map((apartment, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-all"
                >
                  <td className="p-3 text-center">{index + 1}</td>
                  <td className="p-3">{apartment.name}</td>
                  <td className="p-3 text-center">{apartment.rooms}</td>
                  <td className="p-3 text-center">{apartment.floor}</td>
                  <td className="p-3 text-center">{apartment.available}</td>
                  <td className="p-3 text-center">{apartment.clean}</td>
                  <td className="p-3 text-center">{apartment.occupied}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="p-5 text-center text-gray-500 italic"
                >
                  No apartments available.
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