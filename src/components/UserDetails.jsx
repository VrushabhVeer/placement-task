import React from "react";

function UserDetails({ user }) {
  return (
    <div className="container">
      <div>
        <img
          className="userIcon"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="user-icon"
        />
      </div>
      <div className="userDetails">
        <h2>{user.username}</h2>
        <h3>{user.name}</h3>
        <p>Email- {user.email}</p>
        <p>Phone- {user.phone}</p>
        <p className="website">Website {user.website}</p>
        <p>Address- {user.address.street}</p>
        <p>City- {user.address.city}</p>
      </div>
    </div>
  );
}

export default UserDetails;
