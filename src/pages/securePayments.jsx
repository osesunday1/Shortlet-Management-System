import React from "react";
import { FiShield, FiLock, FiCreditCard, FiClipboard } from "react-icons/fi";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SecurePaymentsPage = () => {
  return (
    <motion.div
      className="bg-gradient-to-b from-white via-[#fef7f7] to-white text-gray-800 min-h-screen pt-20 pb-24 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <motion.div className="flex items-center gap-4" variants={fadeInUp} initial="hidden" animate="visible">
          <div className="bg-[#fc7177] p-3 rounded-full text-white shadow-lg">
            <FiShield size={24} />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#fc7177] to-[#c365fd] bg-clip-text text-transparent">
            Secure Payments
          </h1>
        </motion.div>

        {/* Hero Image */}
        <motion.img
          src="https://images.unsplash.com/photo-1563013544-824ae1b704d3"
          alt="Secure payment"
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
          <h2 className="text-2xl font-semibold">Trust in Every Transaction</h2>
          <p className="text-base">
            Guests want confidence, and hosts need reliable income. We built our payment system to deliver both — with industry-standard security and real-time tracking.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Bank-grade encryption on all transactions</li>
            <li>Automatic payouts via Stripe and PayPal</li>
            <li>Anti-fraud machine learning systems</li>
            <li>Detailed exportable logs and audit reports</li>
          </ul>
        </motion.div>

        {/* Feature Blocks */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          {[{
            icon: <FiLock />,
            title: "Encrypted Transactions",
            desc: "All payments go through secure, SSL-encrypted channels — no shortcuts."
          }, {
            icon: <FiCreditCard />,
            title: "Fast Payouts",
            desc: "Stripe and PayPal ensure fast, hassle-free fund transfers to your account."
          }, {
            icon: <FiClipboard />,
            title: "Full Transparency",
            desc: "Every transaction is logged and downloadable, so you're always in the loop."
          }].map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-5 shadow hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-2 text-[#fc7177]">
                {item.icon}
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.div
          className="bg-[#fff3f3] p-6 rounded-xl shadow border-l-4 border-[#fc7177]"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <p className="text-base italic text-gray-700">
            “I’ve never had to worry about payments since using this system — it’s fast and completely transparent.” — <strong>Samantha A., Property Manager</strong>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SecurePaymentsPage;
