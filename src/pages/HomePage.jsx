import React from 'react';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <header style={{ padding: '50px', backgroundColor: '#f4f4f4' }}>
        <h1>Delicious Dining Experience</h1>
        <p>Explore our menu and enjoy the best flavors in town.</p>
      </header>
      <main style={{ padding: '20px' }}>
        <p>Welcome to the homepage. Check out our featured dishes!</p>
        {/* Content will be added here later */}
      </main>
    </div>
  );
};

export default HomePage;