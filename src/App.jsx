import React from 'react';
import MenuItem from './components/MenuItem';

function App() {
  const menuItems = [
    { name: "Burger", price: 12.99 },
    { name: "Fries", price: 4.50 },
    { name: "Soda", price: 2.00 },
  ];

  return (
    <div className="App">
      <h1>Restaurant</h1>
      <div className="menu">
        <h2>Menu</h2>
        <ul>
          {menuItems.map((item) => (
            <MenuItem key={item.name} name={item.name} price={item.price} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;