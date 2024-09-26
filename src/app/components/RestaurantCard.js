// src/app/components/RestaurantCard.js

export default function RestaurantCard({ restaurant, onDelete }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4 max-w-xs">
      <h2 className="text-xl font-semibold text-gray-800">{restaurant.name}</h2>
      <p className="text-gray-600">{restaurant.address}</p>
      <p className="text-gray-500">{restaurant.category}</p>
      <div className="flex justify-between mt-4">
        <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition duration-300">
          Ver Detalles
        </button>
        <button
          onClick={() => onDelete(restaurant.id)} // Llama a la función onDelete con el ID del restaurante
          className="bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600 transition duration-300"
        >
          Borrar
        </button>
      </div>
    </div>
  );
}
