import BookingsCalendar from "../../components/admin/BookingsCalendar";
import TotalBookings from '../../components/admin/TotalBookings';
import MonthlyBookingsChart from '../../components/admin/MonthlyBookingsChart';


const Dashboard = () => {
  return (
    <div className="flex flex-wrap justify-center align-center gap-20 p-4 my-auto mx-auto">
      <TotalBookings />
      <MonthlyBookingsChart />
      <div>
        <BookingsCalendar />
      </div>
    </div>
  );
};

export default Dashboard;