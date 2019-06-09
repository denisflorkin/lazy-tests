import React from 'react';
import { Link } from 'react-router-dom';


const NavItem = ({ path, name, isActive }) => (
  <Link to={path} className="nav-item" style={{ ...(isActive ? { fontWeight: 'bold' } : {}) }}>
    {name}
  </Link>
);

export default NavItem;
