// src/app/components/SkeletonCard.js
import React from 'react';

export default function SkeletonCard() {
  return (
    <div className="border rounded-lg shadow-lg p-4 flex flex-col text-left min-w-[250px] min-h-[180px]">
      <div className="h-6 bg-white rounded w-3/4 animate-pulse mb-2"></div>
      <div className="h-4 bg-white rounded w-1/2 animate-pulse mb-2"></div>
      <div className="h-4 bg-white rounded w-1/2 animate-pulse mb-2"></div>
      <div className="mt-auto flex justify-center space-x-0">
        {/* Simulación del botón "Ver detalles" */}
        <div className="h-8 bg-white rounded w-[76px] mr-2 animate-pulse"></div>
        {/* Simulación del botón "Borrar" */}
        <div className="h-8 bg-white rounded w-[60px] border-2 border-white animate-pulse"></div>
      </div>
    </div>
  );
}
