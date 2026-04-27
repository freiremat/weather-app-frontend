"use client";

import { useState } from "react";

interface Props {
  onSearch: (city: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
  const [city, setCity] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (city.trim()) onSearch(city.trim());
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-xl">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Digite o nome da cidade..."
        className="
        flex-1
        px-4
        py-2 
        rounded-lg 
        border 
        border-gray-300 
        text-gray-900 
        bg-white 
        focus:outline-none 
        focus:ring-2 
        focus:ring-green-500"
      />
      <button
        type="submit"
        className="
        px-6 
        py-2 
        bg-green-600 
        text-white rounded-lg 
        hover:bg-green-700 
        transition-colors"
      >
        Consultar Previsão
      </button>
    </form>
  );
}
