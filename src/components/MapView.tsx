"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Deleta o ícone padrão que possui bug
delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
// Seta os novos caminhos que o bundler consegue entender
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

interface Props {
  lat: number;
  lon: number;
}

function RecenterMap({ lat, lon }: Props) {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lon], 10);
  }, [lat, lon, map]);
  return null;
}

export default function MapView({ lat, lon }: Props) {
  return (
    <div className="w-full max-w-xl h-72 rounded-2xl overflow-hidden shadow-md">
      <MapContainer center={[lat, lon]} zoom={10} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <Marker position={[lat, lon]} />
        <RecenterMap lat={lat} lon={lon} />
      </MapContainer>
    </div>
  );
}
