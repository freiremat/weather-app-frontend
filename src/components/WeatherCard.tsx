import { WeatherData } from "@/types";

interface Props {
  weather: WeatherData;
}

export default function WeatherCard({ weather }: Props) {
  return (
    <div className="w-full max-w-xl bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800">{weather.city}</h2>
        <p className="text-gray-500 capitalize">{weather.description}</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-gray-50 rounded-xl p-4 flex flex-col items-center gap-1">
          <span className="text-sm text-gray-500">Temperatura</span>
          <span className="text-xl font-semibold text-gray-800">{weather.temp.toFixed(1)}°C</span>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 flex flex-col items-center gap-1">
          <span className="text-sm text-gray-500">Sensação</span>
          <span className="text-xl font-semibold text-gray-800">{weather.feels_like.toFixed(1)}°C</span>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 flex flex-col items-center gap-1">
          <span className="text-sm text-gray-500">Umidade</span>
          <span className="text-xl font-semibold text-gray-800">{weather.humidity}%</span>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 flex flex-col items-center gap-1">
          <span className="text-sm text-gray-500">Vento</span>
          <span className="text-xl font-semibold text-gray-800">{weather.wind_speed} m/s</span>
        </div>
      </div>
    </div>
  );
}
