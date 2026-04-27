import { render, screen } from "@testing-library/react";
import WeatherCard from "@/components/WeatherCard";
import { WeatherData } from "@/types";

const mockWeather: WeatherData = {
  city: "Santos",
  temp: 28.95,
  feels_like: 31.1,
  humidity: 61,
  wind_speed: 3.09,
  description: "céu limpo",
  lat: -23.96,
  lon: -46.33,
};

describe("WeatherCard", () => {
  it("exibe o nome da cidade", () => {
    render(<WeatherCard weather={mockWeather} />);
    expect(screen.getByText("Santos")).toBeInTheDocument();
  });

  it("exibe a descrição do clima", () => {
    render(<WeatherCard weather={mockWeather} />);
    expect(screen.getByText("céu limpo")).toBeInTheDocument();
  });

  it("exibe a temperatura", () => {
    render(<WeatherCard weather={mockWeather} />);
    expect(screen.getByText("28.9°C")).toBeInTheDocument();
  });

  it("exibe a sensação térmica", () => {
    render(<WeatherCard weather={mockWeather} />);
    expect(screen.getByText("31.1°C")).toBeInTheDocument();
  });

  it("exibe a umidade", () => {
    render(<WeatherCard weather={mockWeather} />);
    expect(screen.getByText("61%")).toBeInTheDocument();
  });

  it("exibe a velocidade do vento", () => {
    render(<WeatherCard weather={mockWeather} />);
    expect(screen.getByText("3.09 m/s")).toBeInTheDocument();
  });
});
