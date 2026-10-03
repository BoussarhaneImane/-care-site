// Cart.js
import React, { useState } from "react";

const Cart = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Article 1", price: 10 },
    { id: 2, name: "Article 2", price: 20 },
    { id: 3, name: "Article 3", price: 30 }
  ]);

  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Mon Panier</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="mb-2">
            {item.name} - {item.price} €
          </li>
        ))}
      </ul>
      <p className="text-xl font-semibold mt-4">Total: {total} €</p>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Payer
      </button>
    </div>
  );
};

export default Cart;
