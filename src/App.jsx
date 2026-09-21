import React from 'react';
import MenuItem from './components/MenuItem';

function App() {
  const menuItems = [
    { id: 1, name: 'Burger', price: 12.99 },
    { id: 2, name: 'Fries', price: 4.50 },
    { id: 3, name: 'Soda', price: 2.00 },
  ];

  return (
    <div className="App">
      <h1>Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        {menuItems.map(item => (
          <MenuItem key={item.id} name={item.name} price={item.price} />
        ))}
      </ul>
    </div>
  );
}

export default App;