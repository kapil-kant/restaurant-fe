import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#333', color: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Restaurant FE</h2>
        <div>
          <a href="#" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Home</a>
          <a href="#" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Menu</a>
          <a href="#" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;