"use client";
import { useEffect, useState } from 'react';
import RestaurantCard from './components/RestaurantCard';
import RestaurantFilter from './components/RestaurantFilter';

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // Obtener los restaurantes inicialmente
  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch('https://the-fork.api.lewagon.com/api/v1/restaurants');
      const data = await response.json();
      setRestaurants(data);
      setFilteredRestaurants(data); // Inicialmente, los restaurantes filtrados son todos
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }
  };

  // Función para manejar el filtrado en tiempo real
  const handleFilter = (category) => {
    const filtered = restaurants.filter(restaurant =>
      restaurant.category.toLowerCase().includes(category.toLowerCase())
    );
    setFilteredRestaurants(filtered); // Actualizamos solo los restaurantes filtrados
  };

  return (
    <main className="flex flex-col items-start p-4 mx-auto max-w-3xl">
      <h1 className="text-2xl font-bold mb-2">Lista de Restaurantes</h1>
      <RestaurantFilter onFilter={handleFilter} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </main>
  );
}
