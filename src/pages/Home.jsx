import React, { useState, useEffect } from 'react';
import { FiCalendar, FiTrendingUp, FiShield, FiArrowRight, FiSun, FiMoon } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Footer from '../components/admin/Footer';
import Tilt from 'react-parallax-tilt';

// Color constants from your logo
const PRIMARY_COLORS = {
  green: '#63c419',
  purple: '#c365fd',
  pink: '#fc7177'
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1 });

  if (loading) return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-[#63c419]/20 to-[#c365fd]/10 dark:from-gray-900 dark:to-gray-800">
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-[#63c419] to-[#c365fd]"
      />
    </div>
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-[#f8fafc]'}`}>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 p-3 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg z-50 backdrop-blur-sm hover:scale-110 transition-transform"
      >
        {darkMode ? <FiSun className="text-[#fc7177]" /> : <FiMoon className="text-[#63c419]" />}
      </button>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="relative w-full h-screen overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#63c419]/70 to-[#c365fd]/70 dark:from-gray-900/90 dark:to-gray-800/90" />
        <motion.img 
          src="https://images.unsplash.com/photo-1521747116042-5a810fda9664"
          style={{ scale }}
          className="w-full h-full object-cover object-center absolute inset-0"
          alt="Modern workspace"
        />
        
        <div className="relative z-10 text-center text-white py-20 px-6 h-full flex flex-col justify-center">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#63c419] to-[#c365fd] bg-clip-text text-transparent"
          >
            Smart Rental Management
          </motion.h1>
          
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
            <motion.p 
              whileHover={{ scale: 1.02 }}
              className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-gray-200 font-medium"
            >
              Transform your property management with AI-powered insights
            </motion.p>
          </Tilt>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/apartments" 
                className="px-8 py-4 bg-[#63c419] text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-[#4da214] transition-all shadow-lg hover:shadow-xl"
              >
                Get Started <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button 
                className="px-8 py-4 border-2 border-white/20 text-white rounded-xl hover:border-white/40 hover:bg-white/10 backdrop-blur-sm"
              >
                Watch Demo
              </button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        ref={featuresRef}
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="py-20 bg-purple-300 dark:bg-gray-800/80 backdrop-blur-sm"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#63c419] to-[#c365fd] bg-clip-text text-transparent">
            Core Features
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Intelligent solutions for modern property management
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 max-w-6xl mx-auto">
          {[ 
            { icon: <FiCalendar />, title: "Smart Booking", color: PRIMARY_COLORS.green },
            { icon: <FiTrendingUp />, title: "AI Analytics", color: PRIMARY_COLORS.purple },
            { icon: <FiShield />, title: "Secure Payments", color: PRIMARY_COLORS.pink }
          ].map((feature, index) => (
            <Tilt key={index} tiltMaxAngleX={5} tiltMaxAngleY={5}>
              <motion.div
                whileHover={{ y: -10 }}
                className={`group p-8 rounded-2xl shadow-sm dark:shadow-gray-700/30 transition-all ${
                  darkMode ? 'bg-gray-700' : 'bg-white'
                } hover:shadow-md`}
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  {React.cloneElement(feature.icon, { 
                    size: 28,
                    className: "transition-colors duration-300",
                    style: { color: feature.color } 
                  })}
                </div>
                <h3 className={`text-xl font-semibold mb-3 ${
                  darkMode ? 'text-gray-100' : 'text-gray-800'
                }`}>
                  {feature.title}
                </h3>
                <p className={`mb-4 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {[
                    "AI-powered pricing & automated reservations",
                    "Real-time analytics & revenue optimization",
                    "Bank-level security & instant payouts made easy"
                  ][index]}
                </p>
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 font-medium"
                  style={{ color: feature.color }}
                >
                  Learn more <FiArrowRight />
                </motion.button>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        ref={ctaRef}
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="py-20 bg-gradient-to-r from-[#63c419] to-[#c365fd] text-center"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Your Journey Today
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of successful property managers worldwide
          </p>
          <motion.div 
            className="flex justify-center gap-4"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-[#63c419] rounded-xl font-semibold shadow-xl hover:shadow-2xl"
            >
              Start Free Trial
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white text-white rounded-xl hover:bg-white/10"
            >
              Contact Sales
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Home;