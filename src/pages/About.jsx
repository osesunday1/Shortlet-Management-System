import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
// About.jsx
const About = () => {

  



    return (
      <>
        <div className="min-h-screen bg gray text-gray-800 py-16 px-6">
      {/* Intro */}
        {/* Intro */}
        <section className="max-w-6xl mx-auto mb-20 bg-white rounded-xl shadow-2xl border-b-4 border-primary-100 p-8">
          <h1 className="text-4xl font-bold mb-4">About Land-BNB</h1>
          <p className="text-lg text-gray-600">
            Land-BNB is a smart property management platform tailored for shortlet apartment owners. Our goal is to make managing bookings, inventory, and guest experiences as seamless and stress-free as possible.
          </p>
        </section>
  
        {/* Mission */}
        <section className="max-w-6xl mx-auto mb-20 bg-white rounded-xl shadow-2xl border-b-4 border-primary-100 p-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">🌍 Our Mission</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
            To empower hosts with intuitive tools that streamline short-term rental management,
            improve efficiency, and deliver memorable guest experiences.
        </p>
        </section>
  
        {/* Team */}
        <section className="max-w-6xl mx-auto mb-20 bg-white rounded-xl shadow-2xl border-b-4 border-primary-100 p-8">
  <h2 className="text-2xl font-semibold text-center mb-10">Meet the Team</h2>
  <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
    {/* Repeatable Card */}
    {[
      {
        name: "Jaseem Ismail",
        role: "Founder & Full Stack Developer",
        img: "https://i.postimg.cc/YSwD26ZY/qqweewq.jpg",
      },
      {
        name: "Yuvraj Singh",
        role: "Software Engineer",
        img: "https://i.postimg.cc/FsWLGhN6/Whats-App-Image-2025-04-03-at-16-20-54.jpg",
      },
      {
        name: "Oseyenbhin Sunday",
        role: "Master Strategist",
        img: "https://i.postimg.cc/BbZjcVys/ose.jpg",
      },
      {
        name: "Alwin Antony",
        role: "Software Engineer",
        img: "https://i.postimg.cc/63FYSCr8/Whats-App-Image-2025-04-03-at-17-18-31.jpg",
      },
      {
        name: "Ayush BK",
        role: "Full Stack Developer",
        img: "https://i.postimg.cc/JnzqtPqD/Whats-App-Image-2025-04-03-at-17-17-32.jpg",
      },
    ].map((member, index) => (
      <div
        key={index}
        className="bg-white p-4 rounded-lg shadow text-center hover:shadow-lg transition"
      >
        <img
          src={member.img}
          alt={member.name}
          className="rounded-full mx-auto mb-3 w-24 h-24 object-cover border-4 border-primary-100"
        />
        <h3 className="text-md font-bold">{member.name}</h3>
        <p className="text-xs text-gray-500">{member.role}</p>
      </div>
    ))}
  </div>
</section>
         
      </div>
      {/* Footer */}
      <Footer />
      </>
    );
  };
  
  export default About;