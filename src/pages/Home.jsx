import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1 className="App-title">Welcome to Restaurant FE</h1>
      <p>This is the basic boilerplate setup. Welcome to the Home page!</p>
      <nav style={{ marginTop: '20px' }}>
        <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </div >
  );
};

export default Home;