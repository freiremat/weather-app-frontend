"use client";

import { useState } from "react";
import { getWeather, getHistory } from "@/services/api";
import { WeatherData, HistoryItem } from "@/types";
import SearchBar from "@/components/SearchBar";
import WeatherCard from "@/components/WeatherCard";
import HistoryTable from "@/components/HistoryTable";
import dynamic from "next/dynamic";

const MapView = dynamic(() => import("@/components/MapView"), { ssr: false });

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [mapLocation, setMapLocation] = useState<{ lat: number; lon: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSearch(city: string) {
    setLoading(true);
    setError(null);
    try {
      const data = await getWeather(city);
      setWeather(data);
      setMapLocation({ lat: data.lat, lon: data.lon });
      const updatedHistory = await getHistory();
      setHistory(updatedHistory);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Erro desconhecido.");
    } finally {
      setLoading(false);
    }
  }

  function handleHistorySelect(item: HistoryItem) {
    setMapLocation({ lat: item.lat, lon: item.lon });
  }

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 gap-8">
      <h1 className="text-3xl font-bold text-green-700">Previsão do Tempo</h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <p className="text-gray-500">Buscando...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
      {mapLocation && <MapView lat={mapLocation.lat} lon={mapLocation.lon} />}

      {history.length > 0 && <HistoryTable history={history} onSelect={handleHistorySelect} />}
    </main>
  );
}
