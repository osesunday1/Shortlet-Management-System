import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Footer from '../../components/admin/Footer';
import { FiHome, FiUsers, FiMaximize, FiCheck, FiStar } from 'react-icons/fi';

const ApartmentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apartment, setApartment] = useState(null);
  const [bookingData, setBookingData] = useState({
    guestName: '',
    email: '',
    phone: '',
    apartment: '',
    checkInDate: '',
    checkOutDate: ''
  });

  // This is your apartments data - you can move this to a separate file
  const apartments = [
    {
      id: 1,
      name: "Luxury Suite A",
      type: "2b2b",
      price: "₦75,000",
      available: true,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      description: "Modern 2-bedroom apartment with full amenities",
      amenities: ["Full Kitchen", "Wi-Fi", "Air Conditioning", "Smart TV", "Washer/Dryer"],
      size: "120 sq.m",
      maxOccupancy: 4,
      bedrooms: 2,
      bathrooms: 2,
      location: "City Center",
      rating: 4.8,
      reviews: 24,
      floor: "3rd Floor",
      features: [
        "Floor-to-ceiling windows",
        "Private balcony",
        "Modern furnishings",
        "Fully equipped kitchen",
        "En-suite bathroom"
      ]
    },
    {
      id: 2,
      name: "Cozy Studio B",
      type: "1b1b",
      price: "₦50,000",
      available: true,
      image: "https://images.unsplash.com/photo-1560448075-bb485b067938",
      description: "Perfect single bedroom apartment for couples",
      amenities: ["Kitchenette", "Wi-Fi", "Air Conditioning", "TV"],
      size: "45 sq.m",
      maxOccupancy: 2,
      bedrooms: 1,
      bathrooms: 1,
      location: "Downtown",
      rating: 4.6,
      reviews: 18,
      floor: "2nd Floor",
      features: [
        "Cozy layout",
        "City views",
        "Modern appliances",
        "Built-in storage",
        "Breakfast bar"
      ]
    },
    {
      id: 3,
      name: "Family Suite C",
      type: "3b2b",
      price: "₦100,000",
      available: true,
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
      description: "Spacious 3-bedroom apartment for families",
      amenities: ["Full Kitchen", "Wi-Fi", "Air Conditioning", "Smart TV", "Balcony", "Pool Access"],
      size: "150 sq.m",
      maxOccupancy: 6,
      bedrooms: 3,
      bathrooms: 2,
      location: "Suburban Area",
      rating: 4.9,
      reviews: 32,
      floor: "5th Floor",
      features: [
        "Family-sized living room",
        "Large dining area",
        "Master suite",
        "Children's play area",
        "Storage room"
      ]
    }
    // ... add more apartments as needed
  ];

  useEffect(() => {
    // Find the apartment based on the ID from the URL
    const foundApartment = apartments.find(apt => apt.id === parseInt(id));
    if (foundApartment) {
      setApartment(foundApartment);
      // Pre-set the apartment name in booking data
      setBookingData(prev => ({ ...prev, apartment: foundApartment.name }));
    }
  }, [id]);

  const handleBooking = (e) => {
    e.preventDefault();
    navigate('/booking-success', {
      state: {
        guestName: bookingData.guestName,
        apartmentName: apartment.name,
        bookingDetails: {
          ...bookingData,
          apartment: apartment.name,
          checkInDate: new Date(bookingData.checkInDate).toISOString(),
          checkOutDate: new Date(bookingData.checkOutDate).toISOString()
        }
      }
    });
  };

  if (!apartment) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'oklch(0.95 0.09 136.33)' }}>
      {/* Header */}
      <div className="bg-[#9747FF] shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <Link 
            to="/apartments" 
            className="flex items-center gap-2 text-white hover:text-purple-200 transition-all duration-300 w-fit group font-medium"
          >
            <FiHome className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Listings
          </Link>
        </div>
      </div>

      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500">
              {/* Image */}
              <div className="relative h-[400px] overflow-hidden">
                <img 
                  src={apartment.image} 
                  alt={apartment.name} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#9747FF] text-white px-6 py-3 rounded-xl font-semibold shadow-lg">
                  {apartment.price}/night
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h1 className="text-3xl font-bold mb-2 text-gray-800">{apartment.name}</h1>
                    <p className="text-gray-600 text-lg">{apartment.description}</p>
                  </div>
                  <div className="flex items-center gap-2 bg-purple-100 px-6 py-3 rounded-xl">
                    <FiStar className="text-[#9747FF]" />
                    <span className="font-semibold text-[#9747FF]">{apartment.rating}</span>
                    <span className="text-gray-600">({apartment.reviews} reviews)</span>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-purple-50 p-4 rounded-xl">
                    <div className="flex items-center gap-3">
                      <FiUsers className="text-[#9747FF] text-xl" />
                      <div>
                        <p className="text-sm text-gray-600">Max Occupancy</p>
                        <p className="font-semibold text-gray-800">{apartment.maxOccupancy} Guests</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl">
                    <div className="flex items-center gap-3">
                      <FiMaximize className="text-[#9747FF] text-xl" />
                      <div>
                        <p className="text-sm text-gray-600">Size</p>
                        <p className="font-semibold text-gray-800">{apartment.size}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800">Amenities</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {apartment.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-3 bg-purple-50 px-4 py-3 rounded-xl">
                        <FiCheck className="text-[#9747FF]" />
                        <span className="text-gray-700">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800">Features</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {apartment.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 bg-purple-50 px-4 py-3 rounded-xl">
                        <FiCheck className="text-[#9747FF]" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:sticky lg:top-8 h-fit">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Book Now</h2>
              <form onSubmit={handleBooking} className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="guestName"
                    placeholder="Enter your name"
                    className="w-full p-3 rounded-xl border border-purple-100 focus:ring-2 focus:ring-[#9747FF] focus:border-[#9747FF] transition-all duration-300 hover:border-[#9747FF]"
                    value={bookingData.guestName}
                    onChange={(e) => setBookingData({...bookingData, guestName: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full p-3 rounded-xl border border-purple-100 focus:ring-2 focus:ring-[#9747FF] focus:border-[#9747FF] transition-all duration-300 hover:border-[#9747FF]"
                    value={bookingData.email}
                    onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    className="w-full p-3 rounded-xl border border-purple-100 focus:ring-2 focus:ring-[#9747FF] focus:border-[#9747FF] transition-all duration-300 hover:border-[#9747FF]"
                    value={bookingData.phone}
                    onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Check-in Date</label>
                  <input
                    type="date"
                    name="checkInDate"
                    className="w-full p-3 rounded-xl border border-purple-100 focus:ring-2 focus:ring-[#9747FF] focus:border-[#9747FF] transition-all duration-300 hover:border-[#9747FF]"
                    value={bookingData.checkInDate}
                    onChange={(e) => setBookingData({...bookingData, checkInDate: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Check-out Date</label>
                  <input
                    type="date"
                    name="checkOutDate"
                    className="w-full p-3 rounded-xl border border-purple-100 focus:ring-2 focus:ring-[#9747FF] focus:border-[#9747FF] transition-all duration-300 hover:border-[#9747FF]"
                    value={bookingData.checkOutDate}
                    onChange={(e) => setBookingData({...bookingData, checkOutDate: e.target.value})}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#9747FF] text-white py-4 rounded-xl hover:bg-[#8033FF] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                >
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ApartmentDetail; 