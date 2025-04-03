import React from "react";
import { FiBox, FiClock, FiClipboard, FiTool } from "react-icons/fi";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const InventoryInsights = () => {
  return (
    <motion.div
      className="bg-gradient-to-b from-white via-[#f3f4f6] to-white text-gray-800 min-h-screen pt-20 pb-24 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-5xl mx-auto space-y-16">
        <motion.div className="flex items-center gap-4" variants={fadeInUp} initial="hidden" animate="visible">
          <div className="bg-[#c365fd] p-3 rounded-full text-white shadow-lg">
            <FiBox size={24} />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#c365fd] to-[#63c419] bg-clip-text text-transparent">
            Inventory Insights
          </h1>
        </motion.div>

       <motion.img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="Inventory dashboard"
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
          <h2 className="text-2xl font-semibold">Optimize Your Operations</h2>
          <p className="text-base">
            Stay on top of your shortlet inventory with real-time visibility into availability, turnover, and essential supplies. Get proactive alerts and streamline your daily operations with ease.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Live availability tracking across all properties</li>
            <li>Automated turnover planning for check-in/out transitions</li>
            <li>Maintenance reminders to keep units guest-ready</li>
            <li>Monitor consumables like linens, toiletries, and cleaning stock</li>
          </ul>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          {[{
            icon: <FiClipboard />,
            title: "Unit Availability",
            desc: "Quickly see which units are occupied, vacant, or need attention."
          }, {
            icon: <FiClock />,
            title: "Turnover Scheduling",
            desc: "Efficiently manage cleaning and prep time between bookings."
          }, {
            icon: <FiTool />,
            title: "Maintenance Monitoring",
            desc: "Stay ahead of issues with scheduled and predictive upkeep alerts."
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

        <motion.div
          className="bg-[#f5f0fb] p-6 rounded-xl shadow border-l-4 border-[#c365fd]"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <p className="text-base italic text-gray-700">
            “The inventory dashboard keeps me organized and ready for anything. No more last-minute surprises.” — <strong>J. Moreno, Host Partner</strong>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InventoryInsights;
