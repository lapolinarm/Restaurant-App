// src/app/components/RestaurantCard.js

import React from 'react';

export default function RestaurantCard({ restaurant }) {
  return (
    <div className="border rounded-lg shadow-lg p-4 flex flex-col items-center text-center">
      <h2 className="text-xl font-semibold">{restaurant.name}</h2>
      <p>{restaurant.address}</p>
      <p className="text-gray-500">{restaurant.category}</p>
      <div className="mt-2">
        <button className="bg-blue-500 text-white text-sm px-2 py-1 rounded mr-2">Ver detalles</button>
        <button className="bg-red-500 text-white text-sm px-2 py-1 rounded">Borrar</button>
      </div>
    </div>
  );
}
