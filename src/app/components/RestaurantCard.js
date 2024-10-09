// src/app/components/RestaurantCard.js
import React from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle } from "lucide-react";

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
    <div className="bg-[#2c2c2c] border rounded-lg shadow-lg p-4 flex flex-col text-left min-w-[250px] min-h-[180px]
    [background:linear-gradient(45deg,
    #172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient
    (from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme
    (colors.purple.600)_86%,_theme(colors.purple.500)_90%,_theme(colors.
    purple.600)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl
    border border-transparent animate-border">
      <h2 className="text-xl font-semibold">{restaurant.name}</h2>
      <p>{restaurant.address}</p>
      <p className="text-gray-500 flex-grow">{restaurant.category}</p>
      <div className="flex justify-center mt-auto space-x-0">
        <button
          className="bg-[#13CE83] text-white text-sm px-2 py-1 rounded mr-2"
          onClick={handleDetailsClick}
        >
          Ver detalles
        </button>

        <button
          className="border-2 border-white-500 text-white-500 text-sm px-2 py-1 rounded bg-transparent"
          onClick={handleDeleteClick} // Cambia a handleDeleteClick
        >
          Borrar
        </button>
      </div>
    </div>
  );
}
