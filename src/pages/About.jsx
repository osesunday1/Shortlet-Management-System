import Footer from "./Footer";

// About.jsx
const About = () => {
    return (
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
          <div className="grid gap-8 md:grid-cols-3">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow text-center shadow-md rounded-xl ">
              <img
                src="https://via.placeholder.com/100"
                alt="Founder"
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-bold">Oseyenbhin Sunday</h3>
              <p className="text-sm text-gray-500">Founder & Full Stack Developer</p>
            </div>
  
            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow text-center shadow-md rounded-xl ">
              <img
                src="https://i.postimg.cc/FsWLGhN6/Whats-App-Image-2025-04-03-at-16-20-54.jpg"
                alt="Product Manager"
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-bold">Yuvraj Singh</h3>
              <p className="text-sm text-gray-500">Software Engineer</p>
            </div>
  
            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow text-center shadow-md rounded-xl ">
              <img
                src="https://i.postimg.cc/BbZjcVys/ose.jpg"
                alt="UI/UX Designer"
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-bold">Oseyenbhin Sunday</h3>
              <p className="text-sm text-gray-500">Master Startegist</p>
            </div>
          </div>
        </section>
         {/* Footer */}
              <Footer />
      </div>
    );
  };
  
  export default About;