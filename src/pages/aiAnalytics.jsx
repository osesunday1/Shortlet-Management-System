import React from "react";
import { FiTrendingUp, FiBarChart2, FiEye, FiLayers } from "react-icons/fi";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AIAnalyticsPage = () => {
  return (
    <motion.div
      className="bg-gradient-to-b from-white via-[#f3f4f6] to-white text-gray-800 min-h-screen pt-20 pb-24 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <motion.div className="flex items-center gap-4" variants={fadeInUp} initial="hidden" animate="visible">
          <div className="bg-[#c365fd] p-3 rounded-full text-white shadow-lg">
            <FiTrendingUp size={24} />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#c365fd] to-[#63c419] bg-clip-text text-transparent">
            AI Analytics
          </h1>
        </motion.div>

        {/* Hero Image */}
        <motion.img
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
          alt="Analytics dashboard"
          className="rounded-2xl shadow-xl w-full object-cover"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        />

        {/* Overview */}
        <motion.div
          className="bg-white p-6 rounded-xl shadow-md space-y-6"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-semibold">See the Bigger Picture</h2>
          <p className="text-base">
            Make smarter business decisions with insights derived from your rental data. Our AI engine monitors trends, predicts outcomes, and suggests adjustments to help you grow faster.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Smart pricing suggestions that update with demand</li>
            <li>Live occupancy trends with predictive analytics</li>
            <li>Revenue breakdowns by time, property, and location</li>
            <li>Performance benchmarking with top hosts in your area</li>
          </ul>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          {[{
            icon: <FiBarChart2 />,
            title: "Revenue Forecasts",
            desc: "See your potential income week-over-week and adjust strategies accordingly."
          }, {
            icon: <FiEye />,
            title: "Market Visibility",
            desc: "Know where your listing ranks and how often it’s viewed across platforms."
          }, {
            icon: <FiLayers />,
            title: "Multi-property View",
            desc: "Compare analytics across all your listings in a single dashboard."
          }].map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-5 shadow hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-2 text-[#c365fd]">
                {item.icon}
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.div
          className="bg-[#f5f0fb] p-6 rounded-xl shadow border-l-4 border-[#c365fd]"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <p className="text-base italic text-gray-700">
            “The AI dashboard changed how I price and plan. Bookings went up, and so did my confidence.” — <strong>M. Lee, Superhost</strong>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AIAnalyticsPage;
