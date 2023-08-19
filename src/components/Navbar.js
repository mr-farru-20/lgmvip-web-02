import React from 'react';

const Navbar = ({ onGetUsers }) => {
  return (
    <nav className="navbar">
      <div className="brand">Your Brand Name</div>
      <button className="get-users-btn" onClick={onGetUsers}>
        Get Users
      </button>
    </nav>
  );
};

export default Navbar;
