// src/app/components/NewRestaurantForm.js
"use client";
import { useState } from 'react';

export default function NewRestaurantForm({ onNewRestaurant }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newRestaurant = {
      restaurant: {
        name,
        address,
        category,
      },
    };

    try {
      const response = await fetch('https://the-fork.api.lewagon.com/api/v1/restaurants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-User-Email': process.env.NEXT_PUBLIC_API_EMAIL,
          'X-User-Token': process.env.NEXT_PUBLIC_API_TOKEN,
        },
        body: JSON.stringify(newRestaurant),
      });

      const data = await response.json();
      if (response.ok) {
        onNewRestaurant(data); // Notifica al componente padre de un nuevo restaurante
        // Resetea los campos del formulario
        setName('');
        setAddress('');
        setCategory('');
      } else {
        console.error('Error creating restaurant:', data);
      }
    } catch (error) {
      console.error('Error fetching:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mb-4">
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="border border-gray-300 p-2 rounded"
      />
      <input
        type="text"
        placeholder="Dirección"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
        className="border border-gray-300 p-2 rounded"
      />
      <input
        type="text"
        placeholder="Categoría"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
        className="border border-gray-300 p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Nuevo Restaurante
      </button>
    </form>
  );
}
