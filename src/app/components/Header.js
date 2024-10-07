import React from 'react';

export default function Header() {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-xl font-bold">Logo</div>

      {/* Enlaces de navegación */}
      <nav className="space-x-4">
        <a href="#" className="hover:text-[#13CE83]">Inicio</a>
        <a href="#" className="hover:text-[#13CE83]">Sobre Nosotros</a>
        <a href="#" className="hover:text-[#13CE83]">Servicios</a>
        <a href="#" className="hover:text-[#13CE83]">Contacto</a>
      </nav>

      {/* Botones de acción */}
      <div className="space-x-2">
        <button className="bg-transparent text-white border-2 border-white px-4 py-2 rounded">
          Registrarse
        </button>

        <button className="bg-[#13CE83] text-white px-4 py-2 rounded">
          Login
        </button>
      </div>
    </header>
  );
}
