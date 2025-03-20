import { useState } from "react";
import "./styles/UserDetails.css";

const UserDetailsPage = () => {
  const [user, setUser] = useState({
    name: "Darth Vader",
    email: "Anakillskywalker@gmail.com",
    phone: "123-456-7890",
    address: "123 Highbury, London, Canada",
    membership: "Gold Member",
    bookings: 5,
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="user-details-container">
      <h2>User Profile</h2>
      <div className="user-card">
        <img src="src/pages/aImages/User.jpg" alt="User Avatar" className="user-avatar" />
        <p>
          <strong>Name:</strong>
          {isEditing ? (
            <input type="text" name="name" value={user.name} onChange={handleInputChange} />
          ) : (
            user.name
          )}
        </p>
        <p>
          <strong>Email:</strong>
          {isEditing ? (
            <input type="email" name="email" value={user.email} onChange={handleInputChange} />
          ) : (
            user.email
          )}
        </p>
        <p>
          <strong>Phone:</strong>
          {isEditing ? (
            <input type="text" name="phone" value={user.phone} onChange={handleInputChange} />
          ) : (
            user.phone
          )}
        </p>
        <p>
          <strong>Address:</strong>
          {isEditing ? (
            <input type="text" name="address" value={user.address} onChange={handleInputChange} />
          ) : (
            user.address
          )}
        </p>
        <p>
          <strong>Membership:</strong> {user.membership}
        </p>
        <p>
          <strong>Bookings Made:</strong> {user.bookings}
        </p>
        <button className="edit-btn" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "Cancel" : "Edit Profile"}
        </button>
        {isEditing && (
          <button
            className="save-btn"
            onClick={() => setIsEditing(false)}
          >
            Save Changes
          </button>
        )}
      </div>
    </div>
  );
};

export default UserDetailsPage;