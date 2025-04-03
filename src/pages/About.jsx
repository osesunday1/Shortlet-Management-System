import Footer from "./Footer";

// About.jsx
const About = () => {
    return (
        <div className="min-h-screen bg gray text-gray-800 py-16 px-6">
      {/* Intro */}
        {/* Intro */}
        <section className="max-w-5xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Land-BNB</h1>
          <p className="text-lg text-gray-600">
            Land-BNB is a smart property management platform tailored for shortlet apartment owners. Our goal is to make managing bookings, inventory, and guest experiences as seamless and stress-free as possible.
          </p>
        </section>
  
        {/* Mission */}
        <section className="max-w-4xl mx-auto mb-20 text-center border border-gray-200 shadow-md rounded-xl p-10 bg-primary">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">🌍 Our Mission</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
            To empower hosts with intuitive tools that streamline short-term rental management,
            improve efficiency, and deliver memorable guest experiences.
        </p>
        </section>
  
        {/* Team */}
        <section className="max-w-6xl mx-auto">
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
                src="https://via.placeholder.com/100"
                alt="Product Manager"
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-bold">Jane Doe</h3>
              <p className="text-sm text-gray-500">Product Manager</p>
            </div>
  
            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow text-center shadow-md rounded-xl ">
              <img
                src="https://via.placeholder.com/100"
                alt="UI/UX Designer"
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-bold">John Smith</h3>
              <p className="text-sm text-gray-500">UI/UX Designer</p>
            </div>
          </div>
        </section>
         {/* Footer */}
              <Footer />
      </div>
    );
  };
  
  export default About;