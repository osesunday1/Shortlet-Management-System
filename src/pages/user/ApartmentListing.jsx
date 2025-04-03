import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/admin/Footer';

const ApartmentListing = () => {
  const [dateRange, setDateRange] = useState({
    startDate: '',
    endDate: ''
  });
  const [selectedType, setSelectedType] = useState('all');

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
      reviews: 24
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
      reviews: 18
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
      reviews: 32
    },
    {
      id: 4,
      name: "Penthouse Suite D",
      type: "3b3b",
      price: "₦150,000",
      available: true,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      description: "Luxurious penthouse with panoramic city views",
      amenities: ["Gourmet Kitchen", "Wi-Fi", "Climate Control", "Smart Home", "Private Terrace", "Jacuzzi"],
      size: "200 sq.m",
      maxOccupancy: 6,
      bedrooms: 3,
      bathrooms: 3,
      location: "Top Floor",
      rating: 5.0,
      reviews: 15
    },
    {
      id: 5,
      name: "Garden Studio E",
      type: "1b1b",
      price: "₦55,000",
      available: true,
      image: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8",
      description: "Charming studio with private garden access",
      amenities: ["Kitchenette", "Wi-Fi", "Air Conditioning", "Garden Access", "Patio"],
      size: "50 sq.m",
      maxOccupancy: 2,
      bedrooms: 1,
      bathrooms: 1,
      location: "Garden District",
      rating: 4.7,
      reviews: 21
    },
    {
      id: 6,
      name: "Executive Suite F",
      type: "2b2b",
      price: "₦85,000",
      available: true,
      image: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e",
      description: "Modern suite perfect for business travelers",
      amenities: ["Full Kitchen", "High-Speed Wi-Fi", "Office Space", "Smart TV", "Gym Access"],
      size: "100 sq.m",
      maxOccupancy: 4,
      bedrooms: 2,
      bathrooms: 2,
      location: "Business District",
      rating: 4.8,
      reviews: 27
    }
  ];

  const filterApartments = () => {
    return apartments.filter(apt => {
      if (selectedType === 'all') return true;
      return apt.type === selectedType;
    });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'oklch(0.95 0.09 136.33)' }}>
      {/* Back to Home Button */}
      <div className="bg-[#9747FF] shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-white hover:text-purple-200 transition-all duration-300 w-fit group font-medium"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Homepage
          </Link>
        </div>
      </div>

      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
            Available Apartments
          </span>
        </h1>

        {/* Filters */}
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg mb-12 transform hover:shadow-xl transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Check-in Date</label>
              <input
                type="date"
                value={dateRange.startDate}
                onChange={(e) => setDateRange(prev => ({ ...prev, startDate: e.target.value }))}
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 hover:border-purple-300"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Check-out Date</label>
              <input
                type="date"
                value={dateRange.endDate}
                onChange={(e) => setDateRange(prev => ({ ...prev, endDate: e.target.value }))}
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 hover:border-purple-300"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Apartment Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 hover:border-purple-300"
              >
                <option value="all">All Types</option>
                <option value="1b1b">1 Bed, 1 Bath</option>
                <option value="2b2b">2 Bed, 2 Bath</option>
                <option value="3b2b">3 Bed, 2 Bath</option>
              </select>
            </div>
          </div>
        </div>

        {/* Apartment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filterApartments().map((apartment) => (
            <div 
              key={apartment.id} 
              className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={apartment.image} 
                  alt={apartment.name} 
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {apartment.name}
                </h3>
                <p className="text-gray-600 mb-4">{apartment.description}</p>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                    {apartment.price}/night
                  </span>
                  <span className="text-sm px-4 py-1.5 bg-purple-100 text-purple-800 rounded-full font-medium">
                    {apartment.type.toUpperCase()}
                  </span>
                </div>
                <Link 
                  to={`/apartments/${apartment.id}`}
                  className="block w-full text-center bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transform hover:shadow-lg transition-all duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ApartmentListing; 