// Home.jsx
import { Link } from "react-router-dom";
import Footer from "./Footer";
import cabinImg from "../assets/cabin.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      {/* Hero Section */}
      <section
  className="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center text-white"
  style={{ backgroundImage: "url('/cabin.jpg')" }}
>
  <div className="bg-black/60 p-10 rounded-lg text-center max-w-2xl shadow-xl">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      Welcome to Land-BNB
    </h1>
    <p className="text-lg md:text-xl mb-6">
      Effortlessly manage your short-term rentals with comfort and clarity.
    </p>
    <button className="bg-primary-100 hover:bg-primary-200 cursor-pointer  text-white px-6 py-3 rounded-lg transition ">
      Get Started
    </button>
  </div>
</section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-white hover:text-white hover:bg-primary-200 cursor-pointer rounded-xl shadow-md p-6 text-center hover:shadow-lg transition border border-primary-200">
              <img
                src="https://img.icons8.com/ios-filled/100/booking.png"
                alt="Easy Booking"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Streamlined Booking</h3>
              <p className="text-gray-600">Book, track, and manage your rentals with just a few clicks.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white hover:bg-primary-200 hover:text-white cursor-pointer rounded-xl shadow-md p-6 text-center hover:shadow-lg transition border border-primary-200">
              <img
                src="https://img.icons8.com/ios-filled/100/combo-chart.png"
                alt="Analytics"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 hover">Powerful Insights</h3>
              <p className="text-gray-600">Visualize your revenue, occupancy, and growth in real-time.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white hover:text-white hover:bg-primary-200 cursor-pointer rounded-xl shadow-md p-6 text-center hover:shadow-lg transition border border-primary-200">
              <img
                src="https://img.icons8.com/ios-filled/100/security-checked.png"
                alt="Secure Payments"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
              <p className="text-gray-600">Ensure safe payments and manage finances effortlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;