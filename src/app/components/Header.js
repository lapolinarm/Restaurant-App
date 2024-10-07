import React from 'react';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-xl font-bold">Logo</div>

      {/* Enlaces de navegación */}
      <nav className="space-x-4">
        <a href="#" className="hover:text-gray-400">Inicio</a>
        <a href="#" className="hover:text-gray-400">Sobre Nosotros</a>
        <a href="#" className="hover:text-gray-400">Servicios</a>
        <a href="#" className="hover:text-gray-400">Contacto</a>
      </nav>

      {/* Botones de acción */}
      <div className="space-x-2">
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Registrarse
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Login
        </button>
      </div>
    </header>
  );
}
