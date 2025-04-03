import React from "react";
import { FiCalendar, FiClock, FiUsers, FiSettings } from "react-icons/fi";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SmartBookings = () => {
  return (
    <motion.div
      className="bg-gradient-to-b from-white via-[#f3f4f6] to-white text-gray-800 min-h-screen pt-20 pb-24 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-5xl mx-auto space-y-16">
        <motion.div className="flex items-center gap-4" variants={fadeInUp} initial="hidden" animate="visible">
          <div className="bg-[#63c419] p-3 rounded-full text-white shadow-lg">
            <FiCalendar size={24} />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#63c419] to-[#c365fd] bg-clip-text text-transparent">
            Smart Bookings
          </h1>
        </motion.div>

        <motion.img
          src="https://images.unsplash.com/photo-1516321497487-e288fb19713f"
          alt="Calendar and booking"
          className="rounded-2xl shadow-xl w-full object-cover"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        />

        <motion.div
          className="bg-white p-6 rounded-xl shadow-md space-y-6"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-semibold">Why Smart Bookings Matter</h2>
          <p className="text-base">
            Managing rentals isn't just about listing properties. It's about time, automation, and providing a seamless experience from search to check-out. Smart Bookings helps you streamline operations with intelligence.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Eliminate double-bookings across multiple platforms</li>
            <li>Automated guest communication: confirmations, reminders, follow-ups</li>
            <li>Dynamic availability adjustment and calendar sync</li>
            <li>Custom rules for cancellations, gaps, and lead times</li>
          </ul>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          {[{
            icon: <FiClock />,
            title: "24/7 Availability",
            desc: "Let guests book instantly while your calendar stays up-to-date across channels."
          }, {
            icon: <FiUsers />,
            title: "Guest Insights",
            desc: "Access guest preferences and behaviors to improve experiences."
          }, {
            icon: <FiSettings />,
            title: "Custom Rules",
            desc: "Set booking limits, time gaps, and manual approval logic for flexibility."
          }].map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-5 shadow hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-2 text-[#63c419]">
                {item.icon}
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="bg-[#fef9f9] p-6 rounded-xl shadow border-l-4 border-[#63c419]"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <p className="text-base italic text-gray-700">
            “Since integrating Smart Bookings, we’ve reduced calendar conflicts by 95%. It’s like having an assistant working 24/7.” — <strong>J. Rivera, Host</strong>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SmartBookings;
