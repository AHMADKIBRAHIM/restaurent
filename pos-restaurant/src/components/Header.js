// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header style={headerStyle}>
      <nav>
        <ul style={navStyle}>
          <li style={navItemStyle}>
            <Link to="/tables">الطاولات</Link>
          </li>
          <li style={navItemStyle}>
            <Link to="/orders">الطلبات</Link>
          </li>
          <li style={navItemStyle}>
            <Link to="/payment">الدفع</Link>
          </li><li style={navItemStyle}>
            <Link to="/orderscreen1">orderscreen1</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#333',
  padding: '10px',
  color: 'white',
  textAlign: 'center'
};

const navStyle = {
  listStyleType: 'none',
  display: 'flex',
  justifyContent: 'center',
  padding: 0
};

const navItemStyle = {
  margin: '0 15px'
};

export default Header;
