import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './styles/ApartmentDetails.css'



const ApartmentDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const apartments = [
        { id: 1, name: "Luxury Lakefront Villa", location: "Barrie, Canada", price: 420, rating: 4.87, category: "3 Bedroom", image: "/aImages/a1.jpg" },
        { id: 2, name: "Skyline Penthouse", location: "New York, US", price: 911, rating: 4.98, category: "2 Bedroom", image: "/aImages/a2.jpg" },
        { id: 3, name: "Cozy Beachfront Cottage", location: "Kawartha Lakes, Canada", price: 632, rating: 4.96, category: "Small Apartment", image: "/aImages/a3.jpg" },
        { id: 4, name: "Modern Treehouse", location: "Curve Lake, Canada", price: 770, rating: 4.82, category: "Domes", image: "/aImages/a4.jpg" },
        { id: 5, name: "Mountain Escape Cabin", location: "Banff, Canada", price: 550, rating: 4.91, category: "Medium Apartment", image: "/aImages/a5.jpg" },
        { id: 6, name: "Urban Loft", location: "Los Angeles, US", price: 689, rating: 4.88, category: "2 Bedroom", image: "/aImages/a6.jpg" },
        { id: 7, name: "Seaside Getaway", location: "Miami, US", price: 720, rating: 4.89, category: "Small Apartment", image: "/aImages/a7.jpg" },
        { id: 8, name: "Rustic Lakeside Cabin", location: "Muskoka, Canada", price: 499, rating: 4.84, category: "3 Bedroom", image: "/aImages/a8.jpg" },
        { id: 9, name: "Sky High Luxury Suite", location: "Dubai, UAE", price: 1250, rating: 5.00, category: "Penthouse", image: "/aImages/a9.jpg" },
        { id: 10, name: "Santorini Cliffside Villa", location: "Santorini, Greece", price: 1150, rating: 4.95, category: "Luxury", image: "/aImages/a10.jpg" },
        { id: 11, name: "Tokyo High-Rise Studio", location: "Tokyo, Japan", price: 850, rating: 4.92, category: "Studio", image: "/aImages/a11.jpg" },
        { id: 12, name: "Parisian Charm Apartment", location: "Paris, France", price: 990, rating: 4.97, category: "2 Bedroom", image: "/aImages/a12.jpg" }
    ];


    const apartment = apartments.find((apt) => apt.id === parseInt(id));

    if (!apartment) {
        return <h2>Apartment not found !</h2>;
      }

  return (
    <div className="apartment-details">
      <button className="back-button" onClick={() => navigate("/")}>Back to Listings</button>
      <img src={apartment.image} alt={apartment.name} className="apartment-image"/>
      <h2>{apartment.name}</h2>
      <p className="location">{apartment.location}</p>
      <p className="price">${apartment.price} CAD/night</p>
      <p className="rating">⭐ {apartment.rating}</p>
      <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel provident qui voluptates rerum dolor quasi, architecto laboriosam sint ratione! Eos temporibus aspernatur obcaecati sunt voluptatibus similique veritatis. Molestias architecto delectus modi itaque hic cum! Beatae delectus a, eos accusamus, facere cupiditate saepe molestias dolore repellat fugit eveniet reiciendis impedit quibusdam voluptate totam. Obcaecati vitae ut accusamus ad soluta iure, eaque aliquam necessitatibus minima explicabo unde distinctio? Ullam quae natus, earum at magni blanditiis nihil dignissimos quam et voluptatibus, esse repellat? Pariatur eos tempora sint, est aliquid voluptates odio ratione mollitia quasi quod, laboriosam impedit quos quas excepturi hic at repellendus! Iure, dicta quisquam? Officiis molestias voluptas minima, dolore eius voluptate dolorum pariatur non voluptatem alias dicta inventore ipsam, hic, quibusdam distinctio natus aut culpa harum corporis? Dolorem qui ea rerum commodi sunt ad architecto possimus ut voluptatibus incidunt quos consequuntur officiis nisi similique, error voluptatum amet! Voluptatem autem, iure eligendi corporis cumque quibusdam quos, debitis molestias quisquam minima quia! Saepe vitae at odio nam aspernatur nisi praesentium laboriosam esse eos architecto a rem ad fugit placeat quibusdam, libero consequuntur!</p>
      <button className="reserve-btn">Reserve Now</button>
    </div>
  );
}

export default ApartmentDetails;