import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const apartments = [
  {
    id: 1,
    title: "Ivory Pearl",
    img: "/a1.jpg",
    price: "$100/night",
    desc: "A luxurious escape with a sleek modern interior and premium amenities.",
  },
  {
    id: 2,
    title: "Cozy Haven",
    img: "/a2.jpg",
    price: "$180/night",
    desc: "Perfect for peaceful relaxation with a cozy ambiance and soft lighting.",
  },
  {
    id: 3,
    title: "Skyline Loft",
    img: "/a3.jpg",
    price: "$90/night",
    desc: "Stylish city apartment ideal for business travelers and explorers.",
  },
  {
    id: 4,
    title: "Sunset Villa",
    img: "/a4.jpg",
    price: "$70,000/night",
    desc: "Compact, serene, and perfect for solo travelers or couples.",
  },
  {
    id: 5,
    title: "Ocean Breeze",
    img: "/a5.jpg",
    price: "$150/night",
    desc: "Breathtaking cityscape views with executive living experience.",
  },
  {
    id: 6,
    title: "Penthouse Elite",
    img: "/a6.jpg",
    price: "$120/night",
    desc: "Spacious and designed for families with kids and groups.",
  },
];

const Listings = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className="min-h-screen bg-gray py-16 px-6">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Available Apartments
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {apartments.map((apt) => (
            <div
              key={apt.id}
              onClick={() => navigate("/reservation")}
              className="bg-white border-1 border-primary-100 cursor-pointer rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
            >
              <img
                src={apt.img}
                alt={apt.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {apt.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{apt.desc}</p>
                <p className="text-primary-100 font-bold">{apt.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Listings;