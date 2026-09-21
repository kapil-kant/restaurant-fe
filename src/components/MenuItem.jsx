import React from 'react';

function MenuItem({ name, price }) {
  return (
    <li>
      {name} - ${price.toFixed(2)}
    </li>
  );
}

export default MenuItem;