import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ContactUs from './pages/ContactUs';

// Placeholder components for other pages (Home, etc.)
const Home = () => (
  <div className="App" style={{ padding: '20px' }}>
    <h1 className="App-title">Welcome to Restaurant FE</h1>
    <p>This is the basic boilerplate setup. Welcome to the Home page!</p>
    <nav style={{ marginTop: '20px' }}>
      <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
      <Link to="/contact">Contact Us</Link>
    </nav>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;