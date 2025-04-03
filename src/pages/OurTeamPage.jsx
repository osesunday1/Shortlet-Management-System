import React from "react";
import { FiUserCheck, FiBriefcase, FiSmile } from "react-icons/fi";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const OurTeamPage = () => {
  return (
    <motion.div
      className="bg-gradient-to-b from-white via-[#f0f4ff] to-white text-gray-800 min-h-screen pt-20 pb-24 px-6"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <div className="max-w-5xl mx-auto space-y-16">
        <motion.h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
          Meet Our Team
        </motion.h1>

        <motion.p className="text-center text-lg max-w-3xl mx-auto">
          We are a diverse team of innovators, designers, and problem-solvers. Our goal? To make rental management seamless, intelligent, and personal.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <FiUserCheck />,
              title: "Experienced",
              desc: "Each team member brings years of industry expertise and innovation."
            },
            {
              icon: <FiBriefcase />,
              title: "Dedicated",
              desc: "We're committed to improving the lives of property owners and tenants alike."
            },
            {
              icon: <FiSmile />,
              title: "People-First",
              desc: "We build tech with a heart — always focused on real human needs."
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4 text-blue-600">
                {item.icon}
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-white p-6 rounded-xl shadow border-l-4 border-blue-500 text-gray-700 italic"
        >
          “We don’t just build software. We build solutions that empower people to succeed.” — <strong>The Rental Solutions Team</strong>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OurTeamPage;
