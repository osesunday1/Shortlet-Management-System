import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./styles/Home.css";
import "./UserBookingDetails";
import "./UserDetailsPage";

const Home = () => {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(""); // State to track selected category

  const categories = ["3 Bedroom", "2 Bedroom", "Small Apartment", "Domes", "Medium Apartment"];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Update selected category
    console.log(`Filtering for: ${category}`);
  };

  const apartments = [
    { id: 1, name: "Luxury Lakefront Villa", location: "Barrie, Canada", price: 420, rating: 4.87, category: "3 Bedroom", image: "src/pages/aImages/a1.jpg" },
    { id: 2, name: "Skyline Penthouse", location: "New York, US", price: 911, rating: 4.98, category: "2 Bedroom", image: "src/pages/aImages/a2.jpg" },
    { id: 3, name: "Cozy Beachfront Cottage", location: "Kawartha Lakes, Canada", price: 632, rating: 4.96, category: "Small Apartment", image: "src/pages/aImages/a3.jpg" },
    { id: 4, name: "Modern Treehouse", location: "Curve Lake, Canada", price: 770, rating: 4.82, category: "Domes", image: "src/pages/aImages/a4.jpg" },
    { id: 5, name: "Mountain Escape Cabin", location: "Banff, Canada", price: 550, rating: 4.91, category: "Medium Apartment", image: "src/pages/aImages/a5.jpg" },
    { id: 6, name: "Urban Loft", location: "Los Angeles, US", price: 689, rating: 4.88, category: "2 Bedroom", image: "src/pages/aImages/a6.jpg" },
    { id: 7, name: "Seaside Getaway", location: "Miami, US", price: 720, rating: 4.89, category: "Small Apartment", image: "src/pages/aImages/a7.jpg" },
    { id: 8, name: "Rustic Lakeside Cabin", location: "Muskoka, Canada", price: 499, rating: 4.84, category: "3 Bedroom", image: "src/pages/aImages/a8.jpg" },
    { id: 9, name: "Sky High Luxury Suite", location: "Dubai, UAE", price: 1250, rating: 5.00, category: "Penthouse", image: "src/pages/aImages/a9.jpg" },
    { id: 10, name: "Santorini Cliffside Villa", location: "Santorini, Greece", price: 1150, rating: 4.95, category: "Luxury", image: "src/pages/aImages/a10.jpg" },
    { id: 11, name: "Tokyo High-Rise Studio", location: "Tokyo, Japan", price: 850, rating: 4.92, category: "Studio", image: "src/pages/aImages/a11.jpg" },
    { id: 12, name: "Parisian Charm Apartment", location: "Paris, France", price: 990, rating: 4.97, category: "2 Bedroom", image: "src/pages/aImages/a12.jpg" }
  ];


  const filteredApartments = selectedCategory
    ? apartments.filter(apt => apt.category === selectedCategory)
    : apartments;

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo" onClick={() => navigate('/')}>Land-BNB</h2>
        <div className="search-bar">
          <input type="text" placeholder="Destinations" />
          <input 
            type="date" 
            value={checkIn} 
            onChange={(e) => setCheckIn(e.target.value)} 
            placeholder="Check-in" 
          />
          <input 
            type="date" 
            value={checkOut} 
            onChange={(e) => setCheckOut(e.target.value)} 
            placeholder="Check-out" 
          />
          <button>Search</button>
        </div>
        <div className="user-menu">
          <button onClick={() => navigate('/user-details')}>Profile</button>
          <button onClick={() => navigate('/user-bookings')}>My Bookings</button>
        </div>
      </nav>

      {/* Category Filters (Now as Buttons) */}
      <div className="category-filters">
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? "selected" : ""}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Featured Listings */}
      <div className="apartments">
        <h2>Featured Stays</h2>
        <div className="apartment-list">
          {filteredApartments.map((apt) => (
            <div key={apt.id} className="apartment-card">
              <img src={apt.image} alt={apt.name} />
              <div className="info">
                <h3>{apt.name}</h3>
                <p>{apt.location}</p>
                <p className="price">${apt.price} CAD/night</p>
                <p className="rating">⭐ {apt.rating}</p>
                <button onClick={() => navigate(`/guest/${apt.id}`)}>View Details</button>
              </div>
            </div>
          ))}
        </div>
        {/* See More Button */}
        <div className="see-more-container">
          <button className="see-more-btn" onClick={() => navigate('/explore')}>See More Listings</button>
        </div>
      </div>

      {/* Support Section */}
      <div className="support-section">
        <h2>Need Help?</h2>
        <p>We are here 24/7 to assist you with your bookings and stay experience.</p>
        <button onClick={() => navigate('/support')}>Contact Support</button>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>&copy; 2025 Land-BNB. Crafted for luxury & comfort.</p>
      </div>
    </div>
  );
};

export default Home;
