// src/app/components/RestaurantDetails.js

"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image"; // Importar el componente Image de Next.js

export default function RestaurantDetails() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [chef, setChef] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Función para obtener detalles del restaurante
    const fetchRestaurantDetails = async () => {
      try {
        const response = await fetch(
          `https://the-fork.api.lewagon.com/api/v1/restaurants/${id}`,
          {
            headers: {
              "X-User-Email": process.env.NEXT_PUBLIC_API_EMAIL,
              "X-User-Token": process.env.NEXT_PUBLIC_API_TOKEN,
            },
          }
        );
        const data = await response.json();
        setRestaurant(data);
      } catch (err) {
        setError("Error fetching restaurant details");
      }
    };

    // Función para obtener información del chef
    const fetchChefDetails = async () => {
      try {
        const response = await fetch(
          `https://the-fork.api.lewagon.com/api/v1/restaurants/${id}/chef.json`,
          {
            headers: {
              "X-User-Email": process.env.NEXT_PUBLIC_API_EMAIL,
              "X-User-Token": process.env.NEXT_PUBLIC_API_TOKEN,
            },
          }
        );
        const data = await response.json();
        setChef(data);
      } catch (err) {
        setError("Error fetching chef details");
      }
    };

    fetchRestaurantDetails();
    fetchChefDetails();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!restaurant || !chef) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
        <h2 className="text-3xl font-bold mb-4">{restaurant.name}</h2>
        <p className="text-gray-600 mb-2">Categoría: {restaurant.category}</p>
        <p className="text-gray-600 mb-4">Dirección: {restaurant.address}</p>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Chef: {chef.name}</h3>
          <p className="text-gray-600 mb-2">
            Años de experiencia: {chef.years_of_experience}
          </p>
          {/* Utilizamos el componente Image de Next.js */}
          <div className="w-32 h-32 mx-auto mb-4 relative">
            <Image
              // src={chef.avatar_url || '/images/avatar.png'}
              src={'/images/avatar.png'}
              alt={chef.name}
              className="rounded-full object-cover"
              width={50}
              height={50}
              priority={true} // Cargar de manera prioritaria
            />
          </div>
        </div>

        <button
          onClick={() => router.back()}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Volver atrás
        </button>
      </div>
    </div>
  );
}
