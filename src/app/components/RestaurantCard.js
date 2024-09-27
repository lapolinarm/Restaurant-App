// src/app/components/RestaurantCard.js
import React from 'react';

export default function RestaurantCard({ restaurant }) {
  return (
    <div className="border rounded-lg shadow-lg p-4 flex flex-col text-left transition-shadow duration-300 hover:shadow-2xl min-w-[250px] min-h-[180px]">
      <h2 className="text-xl font-semibold">{restaurant.name}</h2>
      <p>{restaurant.address}</p>
      <p className="text-gray-500 flex-grow">{restaurant.category}</p>
      <div className="flex justify-center mt-auto space-x-2">
        <button className="bg-blue-500 text-white text-sm px-2 py-1 rounded mr-2">Ver detalles</button>
        <button className="bg-red-500 text-white text-sm px-2 py-1 rounded">Borrar</button>
      </div>
    </div>
  );
}
