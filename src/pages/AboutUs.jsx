import "./styles/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* About Section */}
      <section className="about-section">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          Welcome to Land-BNB, your trusted provider of premium accommodations. Our mission is to deliver 
          unparalleled stays, blending luxury, comfort, and convenience. Whether you're seeking a short-term 
          getaway or a long-term rental, we ensure every guest enjoys a seamless experience.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2 className="section-title">Our Services</h2>
        <div className="services-list">
          <div className="service-card">
            <h3>Luxury Accommodations</h3>
            <p>Choose from a wide range of high-end apartments and villas.</p>
          </div>
          <div className="service-card">
            <h3>24/7 Customer Support</h3>
            <p>We are available around the clock to assist with your needs.</p>
          </div>
          <div className="service-card">
            <h3>Exclusive Member Discounts</h3>
            <p>Enjoy special rates and promotions for our loyal customers.</p>
          </div>
          <div className="service-card">
            <h3>Personalized Stays</h3>
            <p>We offer tailored experiences to make your stay unforgettable.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2 className="section-title">Contact Us</h2>
        <p className="contact-info">📍 Address: 123 Luxury Lane, Toronto, Canada</p>
        <p className="contact-info">📞 Phone: +1 (234) 567-8901</p>
        <p className="contact-info">📧 Email: support@landbnb.com</p>
      </section>
    </div>
  );
};

export default AboutUs;
