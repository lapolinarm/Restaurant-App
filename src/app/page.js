"use client"; // Marca el componente como Client Component

import { useEffect, useState } from 'react';
import RestaurantCard from './components/RestaurantCard'; // Importa el componente

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch('https://the-fork.api.lewagon.com/api/v1/restaurants');

        // Verifica si la respuesta es correcta
        if (!response.ok) {
          throw new Error(`Error al obtener los restaurantes: ${response.statusText}`);
        }

        const data = await response.json();
        setRestaurants(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  const handleDelete = (id) => {
    setRestaurants(restaurants.filter(restaurant => restaurant.id !== id));
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main>
      <h1 className="text-3xl font-bold text-center mt-4">Lista de Restaurantes</h1>
      <div className="flex flex-wrap justify-center">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            onDelete={handleDelete} // Pasa la función handleDelete como prop
          />
        ))}
      </div>
    </main>
  );
}
