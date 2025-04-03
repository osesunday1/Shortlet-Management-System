import React from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCheck, FiHome, FiCalendar, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const BookingSuccess = () => {
  const location = useLocation();
  
  // Redirect if no booking data
  if (!location.state) {
    return <Navigate to="/" replace />;
  }

  const { guestName, apartmentName, bookingDetails } = location.state;

  // Format dates for display
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'oklch(0.95 0.09 136.33)' }}>
      {/* Header */}
      <div className="bg-[#9747FF] shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <Link 
            to="/apartments" 
            className="flex items-center gap-2 text-white hover:text-purple-200 transition-all duration-300 w-fit group font-medium"
          >
            <FiHome className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Listings
          </Link>
        </div>
      </div>

      <main className="container mx-auto px-6 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 p-8 text-center">
            {/* Success Icon with Animation */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-20 h-20 bg-[#9747FF] rounded-full mx-auto mb-6 flex items-center justify-center"
            >
              <FiCheck className="text-white w-10 h-10" />
            </motion.div>

            {/* Success Message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-[#9747FF] to-purple-500 bg-clip-text text-transparent">
                Booking Confirmed!
              </h1>
              
              <p className="text-xl text-gray-700">
                Thank you, <span className="font-semibold text-[#9747FF]">{guestName}</span>!
              </p>
              <p className="text-gray-600">
                Your stay at <span className="font-medium text-[#9747FF]">{apartmentName}</span> has been confirmed.
              </p>
            </motion.div>

            {/* Booking Details Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 space-y-6"
            >
              <div className="bg-purple-50 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Booking Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <FiMapPin className="text-[#9747FF] mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Apartment</p>
                      <p className="text-gray-700 font-medium">{apartmentName}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiCalendar className="text-[#9747FF] mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Check-in</p>
                      <p className="text-gray-700">{formatDate(bookingDetails.checkInDate)}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiCalendar className="text-[#9747FF] mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Check-out</p>
                      <p className="text-gray-700">{formatDate(bookingDetails.checkOutDate)}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiPhone className="text-[#9747FF] mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Contact</p>
                      <p className="text-gray-700">{bookingDetails.phone}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Steps */}
              <div className="bg-purple-50 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">What's Next?</h2>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center gap-3">
                    <FiCheck className="text-[#9747FF] flex-shrink-0" />
                    <span className="text-gray-600">A confirmation email has been sent to {bookingDetails.email}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FiCheck className="text-[#9747FF] flex-shrink-0" />
                    <span className="text-gray-600">Present your ID at check-in</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FiCheck className="text-[#9747FF] flex-shrink-0" />
                    <span className="text-gray-600">Check-in time starts at 2:00 PM</span>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Link 
                  to="/apartments"
                  className="px-8 py-3 bg-[#9747FF] text-white rounded-xl hover:bg-[#8033FF] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Browse More Properties
                </Link>
                <Link 
                  to="/"
                  className="px-8 py-3 border-2 border-[#9747FF] text-[#9747FF] rounded-xl hover:bg-purple-50 transition-all duration-300"
                >
                  Return Home
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default BookingSuccess; 