import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [messageSent, setMessageSent] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessageSent("");
    setErrorMessage("");

    try {
      setMessageSent("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setErrorMessage("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-xl">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
        Contact Us
      </h2>

      {messageSent && (
        <p className="text-center text-green-600 font-medium mb-4">{messageSent}</p>
      )}
      {errorMessage && (
        <p className="text-center text-red-600 font-medium mb-4">{errorMessage}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-white text-purple-600 font-semibold border-2 border-purple-600 rounded-xl hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-500 transition duration-300"
        >
          Send Message
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Operating Hours</h3>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Monday to Friday: 9:00 AM - 6:00 PM</li>
          <li>Saturday: 10:00 AM - 4:00 PM</li>
          <li>Sunday: Closed</li>
        </ul>
      </div>

      {/* Google Map for Fanshawe College */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Find Us</h3>
        <div className="w-full h-64 rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5834.702802471468!2d-81.20843312228996!3d43.01299019999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882eed0db33e1e9f%3A0xafcae4298924fa54!2sFanshawe%20College!5e0!3m2!1sen!2sca!4v1743706707830!5m2!1sen!2sca"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
