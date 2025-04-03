import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import Footer from "./Footer";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
    .sendForm(
        "service_3dqhbnm",      // Replace with your EmailJS service ID
        "template_g3vxmyo",     // Replace with your EmailJS template ID
        formRef.current,
        "5yGKD1osKv35Dh8NJ"       // Replace with your EmailJS public key
      )

      .then(
        () => {
          setLoading(false);
          toast.success("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          toast.error("Failed to send message.");
          console.error(error);
        }
      );
  };

  return (
    <>
    <div className="max-w-xl mx-auto mt-12 bg-white shadow-xl rounded-lg p-8 border-1 border-primary-100">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
      <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className="w-full p-3 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 border rounded"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          className="w-full p-3 border rounded"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your message"
          required
          className="w-full p-3 border rounded"
        ></textarea>
        <input
          type="hidden"
          name="time"
          value={new Date().toLocaleString()}
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary-100 text-white py-3 rounded hover:bg-primary transition"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;