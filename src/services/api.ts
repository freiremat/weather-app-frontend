import { WeatherData, HistoryItem } from "@/types";

const API_BASE = "http://localhost:8000";

export async function getWeather(city: string): Promise<WeatherData> {
  const response = await fetch(`${API_BASE}/api/weather?city=${encodeURIComponent(city)}`);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.detail ?? "Erro ao buscar previsão do tempo.");
  }

  return response.json();
}

export async function getHistory(): Promise<HistoryItem[]> {
  const response = await fetch(`${API_BASE}/api/history`);

  if (!response.ok) {
    throw new Error("Erro ao buscar histórico.");
  }

  return response.json();
}
