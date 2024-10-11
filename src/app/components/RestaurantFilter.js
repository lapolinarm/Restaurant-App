import React, { useState } from 'react';

export default function RestaurantFilter({ onFilter }) {
  const [category, setCategory] = useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
    onFilter(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Buscar por categoría"
      value={category}
      onChange={handleChange}
      className="text-gray-500 border rounded p-2 w-72"
    />
  );
}
