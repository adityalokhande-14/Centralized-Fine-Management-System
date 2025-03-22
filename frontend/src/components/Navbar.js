import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>CFMS</h2>
      <div>
        <Link to="/admin">Admin Dashboard</Link>
        <Link to="/user">User Dashboard</Link>
        <Link to="/login">Logout</Link>
      </div>
    </nav>
  );
};

export default Navbar;
