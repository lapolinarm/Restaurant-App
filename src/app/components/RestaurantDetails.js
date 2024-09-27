// src/app/components/RestaurantDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Para obtener el id de la URL

export default function RestaurantDetails() {
  const { id } = useParams(); // Obtener el id de la URL
  const [restaurant, setRestaurant] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      try {
        const response = await fetch(`https://the-fork.api.lewagon.com/api/v1/restaurants/${id}`, {
          headers: {
            'X-User-Email': process.env.NEXT_PUBLIC_API_EMAIL,  // Email almacenado en .env.local
            'X-User-Token': process.env.NEXT_PUBLIC_API_TOKEN,  // Token almacenado en .env.local
          }
        });
        const data = await response.json();
        setRestaurant(data);
      } catch (err) {
        setError('Error fetching restaurant details');
      }
    };

    fetchRestaurantDetails();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{restaurant.name}</h2>
      <p className="text-gray-500">{restaurant.category}</p>
      <p>{restaurant.address}</p>
      {/* Mostrar más detalles si están disponibles */}
    </div>
  );
}
