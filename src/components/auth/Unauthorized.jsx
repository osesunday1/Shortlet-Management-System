import React from "react";
import { FiAlertTriangle } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Unauthorized = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-[#fff9f9] via-[#f3f4f6] to-white flex items-center justify-center px-6"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="max-w-xl w-full text-center space-y-10 p-8 bg-white rounded-2xl shadow-lg">
        <div className="flex items-center justify-center text-[#fc7177]">
          <FiAlertTriangle size={48} className="drop-shadow-md" />
        </div>

        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#fc7177] to-[#c365fd] bg-clip-text text-transparent">
          Unauthorized Access
        </h1>

        <p className="text-gray-700 text-base">
          You don’t have permission to view this page or your authorization has expired. Please login again or contact an administrator if you believe this is a mistake.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 bg-[#fc7177] text-white font-semibold rounded-lg shadow-md hover:bg-[#e65b69] transition"
          >
            Back to Home
          </Link>
          <Link
            to="/login"
            className="px-6 py-3 border border-[#fc7177] text-[#fc7177] font-semibold rounded-lg hover:bg-[#fc7177]/10 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Unauthorized;
