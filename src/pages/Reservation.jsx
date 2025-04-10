import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import Footer from "./Footer";

const Reservation = () => {
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
          toast.success("Reservation sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          toast.error("Error sending reservation.");
          console.error(error);
        }
      );
  };

  return (
    <>
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-xl rounded-lg p-8 border-1 mb-45 border-primary-100">
      <h2 className="text-2xl font-bold mb-6 text-center">Reservation Form</h2>
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
          placeholder="Email Address"
          required
          className="w-full p-3 border rounded"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="date"
            name="checkin"
            required
            className="w-full p-3 border rounded"
          />
          <input
            type="date"
            name="checkout"
            required
            className="w-full p-3 border rounded"
          />
        </div>
        <textarea
          name="message"
          placeholder="Additional Notes (e.g. number of guests, preferences)"
          rows="4"
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
          className="w-full bg-primary-100 text-white py-3 rounded hover:bg-primary-200 cursor-pointer transition"
        >
          {loading ? "Sending..." : "Submit Reservation"}
        </button>
      </form>
      
    </div>
    <Footer/>
    </>
  );
};

export default Reservation;