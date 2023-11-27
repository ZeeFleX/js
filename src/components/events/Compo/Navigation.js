import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <div className="nav-buttons">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/favorite">Favorite</Link>
    </div>
  );
};

export default Navigation;