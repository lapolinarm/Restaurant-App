// src/app/page.js

"use client";
import { useEffect, useState } from 'react';
import RestaurantCard from './components/RestaurantCard';
import RestaurantFilter from './components/RestaurantFilter';
import NewRestaurantForm from './components/NewRestaurantForm';

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isPopupVisible, setPopupVisible] = useState(false);

  // Obtener los restaurantes inicialmente
  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch('https://the-fork.api.lewagon.com/api/v1/restaurants');
      const data = await response.json();
      setRestaurants(data);
      setFilteredRestaurants(data);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }
  };

  // Función para manejar el filtrado en tiempo real
  const handleFilter = (category) => {
    const filtered = restaurants.filter(restaurant =>
      restaurant.category.toLowerCase().includes(category.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  const handleNewRestaurant = (newRestaurant) => {
    setRestaurants([...restaurants, newRestaurant]);
    setFilteredRestaurants([...filteredRestaurants, newRestaurant]);
    setPopupVisible(false);
  };

  // Función para manejar la eliminación de un restaurante
  const handleDeleteRestaurant = (id) => {
    setRestaurants(restaurants.filter(restaurant => restaurant.id !== id));
    setFilteredRestaurants(filteredRestaurants.filter(restaurant => restaurant.id !== id));
  };

  return (
    <main className="flex flex-col items-start p-4 mx-auto w-full max-w-4xl min-h-screen h-96 overflow-y-scroll scrollbar-hidden">
      <h1 className="text-2xl font-bold mb-2">Lista de Restaurantes</h1>
      <div className="flex items-stretch mb-8">
        <RestaurantFilter onFilter={handleFilter} />
        <button
          onClick={() => setPopupVisible(true)}
          className="bg-blue-500 text-white p-2 rounded ml-4 flex items-center"
        >
          Nuevo Restaurante
        </button>
      </div>

      {/* Popup para el formulario */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-96">
            <h2 className="text-xl font-bold mb-4 text-center">Crear Nuevo Restaurante</h2>
            <NewRestaurantForm onNewRestaurant={handleNewRestaurant} />
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setPopupVisible(false)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 w-full">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            onDelete={handleDeleteRestaurant} // Pasa la función onDelete
          />
        ))}
      </div>
    </main>
  );
}
