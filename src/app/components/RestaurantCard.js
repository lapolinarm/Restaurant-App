// src/app/components/RestaurantCard.js
import React from 'react';
import { useRouter } from 'next/navigation';

export default function RestaurantCard({ restaurant, onDelete }) {
  const router = useRouter();

  const handleDetailsClick = () => {
    router.push(`/restaurant/${restaurant.id}`);
  };

  const handleDeleteClick = async () => {
    const confirmDelete = window.confirm('¿Estás seguro de que deseas borrar este restaurante?');
    if (confirmDelete) {
      try {
        const response = await fetch(`https://the-fork.api.lewagon.com/api/v1/restaurants/${restaurant.id}`, {
          method: 'DELETE',
          headers: {
            'X-User-Email': process.env.NEXT_PUBLIC_API_EMAIL,
            'X-User-Token': process.env.NEXT_PUBLIC_API_TOKEN,
          },
        });

        if (response.ok) {
          onDelete(restaurant.id); // Llama a la función onDelete para eliminar el restaurante del estado
        } else {
          console.error('Error al borrar el restaurante:', response.statusText);
        }
      } catch (error) {
        console.error('Error al conectar con la API:', error);
      }
    }
  };

  return (
    <div className="border rounded-lg shadow-lg p-4 flex flex-col text-left transition-shadow duration-300 hover:shadow-2xl min-w-[250px] min-h-[180px]">
      <h2 className="text-xl font-semibold">{restaurant.name}</h2>
      <p>{restaurant.address}</p>
      <p className="text-gray-500 flex-grow">{restaurant.category}</p>
      <div className="flex justify-center mt-auto space-x-2">
        <button
          className="bg-blue-500 text-white text-sm px-2 py-1 rounded mr-2"
          onClick={handleDetailsClick}
        >
          Ver detalles
        </button>

        <button
          className="bg-red-500 text-white text-sm px-2 py-1 rounded"
          onClick={handleDeleteClick} // Cambia a handleDeleteClick
        >
          Borrar
        </button>
      </div>
    </div>
  );
}
