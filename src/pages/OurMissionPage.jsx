import React from "react";
import { FiTarget, FiZap, FiGlobe } from "react-icons/fi";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const OurMissionPage = () => {
  return (
    <motion.div
      className="bg-gradient-to-b from-white via-[#f5f7ff] to-white text-gray-800 min-h-screen pt-20 pb-24 px-6"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <div className="max-w-5xl mx-auto space-y-16">
        <motion.h1 className="text-4xl font-bold text-center bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
          Our Mission
        </motion.h1>

        <motion.p className="text-center text-lg max-w-3xl mx-auto">
          We are on a mission to simplify property management through innovation, intelligence, and integrity — helping people focus on what truly matters.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <FiTarget />,
              title: "Purpose-Driven",
              desc: "Every feature we build solves a real-world problem for hosts and renters."
            },
            {
              icon: <FiZap />,
              title: "Innovation-Powered",
              desc: "We leverage automation and AI to cut through complexity."
            },
            {
              icon: <FiGlobe />,
              title: "Globally Inclusive",
              desc: "We’re building for the world — supporting users across languages, regions, and devices."
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4 text-indigo-500">
                {item.icon}
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-white p-6 rounded-xl shadow border-l-4 border-indigo-500 text-gray-700 italic"
        >
          “When we make renting better, we improve lives. That's our ultimate mission.” — <strong>Rental Solutions Vision Team</strong>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OurMissionPage;
