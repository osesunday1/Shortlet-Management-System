import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiMapPin, FiPhone } from 'react-icons/fi';
import { Link, Outlet } from 'react-router-dom';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="relative w-full h-[60vh] bg-gradient-to-r from-blue-500 to-indigo-600"
      >
        <div className="absolute inset-0 bg-opacity-60 bg-gradient-to-r from-blue-500 to-indigo-600" />
        <div className="relative z-10 text-center text-white py-24">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-gray-200"
          >
            We are a team of innovators dedicated to making property management simple and efficient.
          </motion.p>
        </div>
      </motion.section>

      {/* Company Info with Navigation Cards */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="py-20 bg-gray-100 text-center"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600 dark:text-teal-300">
            Who We Are
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-900 max-w-2xl mx-auto">
            A team of experts building intelligent solutions for property managers. We focus on automation, security, and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 max-w-6xl mx-auto">
          {[
            {
              icon: <FiUsers />,
              title: 'Our Team',
              path: 'our-team',
              description: 'A group of passionate and experienced professionals.',
            },
            {
              icon: <FiMapPin />,
              title: 'Our Mission',
              path: 'our-mission',
              description: 'To revolutionize property management through technology.',
            },
            {
              icon: <FiPhone />,
              title: 'Contact Us',
              path: '/contact',
              description: 'We’re always here to help you with any inquiries.',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group p-8 rounded-2xl shadow-lg dark:shadow-gray-700/30 transition-all bg-white dark:bg-gray-700"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-blue-500/10">
                {React.cloneElement(feature.icon, {
                  size: 28,
                  className: 'text-blue-500 dark:text-blue-400',
                })}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
                {feature.title}
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
              <Link
                to={feature.path}
                className="text-blue-600 hover:underline font-medium"
              >
                Learn more &rarr;
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Nested Page Content */}
      <div className="w-full px-4 md:px-8 mt-16">
      <Outlet />
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>&copy; 2025 Rental Solutions. All Rights Reserved.</p>
          <div className="mt-4">
            <Link to="/" className="text-blue-400 hover:text-blue-500">
              Back to Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
