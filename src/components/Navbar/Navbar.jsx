import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  return (
    <div className="navbar">
        <li>
      <Link className="link" to="/">
        Home
      </Link>
    </li>
    <li>
      <Link className="link" to="/poppy">
        Poppy
      </Link>
    </li>
    <li>
      <Link className="link" to="/search">
        Search
      </Link>
    </li>
    </div>
  )
}
