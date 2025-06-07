import React from 'react';

const Navbar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#2c3e50', // New dark blue background
    color: 'white',
    fontFamily: 'Arial, sans-serif',
  };

  const logoStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
  };

  const ulStyle = {
    display: 'flex',
    listStyleType: 'none',
    margin: '0',
    padding: '0',
  };

  const liStyle = {
    margin: '0 20px',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
  };

  const buttonStyle = {
    backgroundColor: '#27ae60', // Green button
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>🌾 HelpingHands</div>
      <ul style={ulStyle}>
        <li style={liStyle}><a href="#about" style={linkStyle}>About</a></li>
        <li style={liStyle}><a href="#donate" style={linkStyle}>Donate</a></li>
        <li style={liStyle}><a href="#volunteer" style={linkStyle}>Volunteer</a></li>
        <li style={liStyle}><a href="#contact" style={linkStyle}>Contact</a></li>
      </ul>
      <button style={buttonStyle}>
        Donate Now
      </button>
    </nav>
  );
};

export default Navbar;
