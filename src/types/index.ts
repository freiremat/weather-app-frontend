export interface WeatherData {
  city: string;
  temp: number;
  feels_like: number;
  humidity: number;
  wind_speed: number;
  description: string;
  lat: number;
  lon: number;
}

export interface HistoryItem {
  city: string;
  lat: number;
  lon: number;
  consulted_at: string;
}