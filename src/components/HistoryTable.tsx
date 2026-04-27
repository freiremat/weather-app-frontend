import { HistoryItem } from "@/types";

interface Props {
  history: HistoryItem[];
  onSelect: (item: HistoryItem) => void;
}

export default function HistoryTable({ history, onSelect }: Props) {
  if (history.length === 0) {
    return <p className="text-gray-400 text-sm">Nenhuma consulta realizada ainda.</p>;
  }

  return (
    <div className="w-full max-w-xl overflow-x-auto rounded-2xl shadow-md">
      <table className="w-full text-sm bg-white">
        <thead className="bg-green-600 text-white">
          <tr>
            <th className="px-4 py-3 text-left">Cidade</th>
            <th className="px-4 py-3 text-left">Latitude</th>
            <th className="px-4 py-3 text-left">Longitude</th>
            <th className="px-4 py-3 text-left">Data/Hora</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, index) => (
            <tr
              key={index}
              onClick={() => onSelect(item)}
              className="border-t border-gray-100 hover:bg-green-50 cursor-pointer transition-colors"
            >
              <td className="px-4 py-3 text-gray-800">{item.city}</td>
              <td className="px-4 py-3 text-gray-600">{item.lat.toFixed(4)}</td>
              <td className="px-4 py-3 text-gray-600">{item.lon.toFixed(4)}</td>
              <td className="px-4 py-3 text-gray-600">
                {new Date(item.consulted_at).toLocaleString("pt-BR")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
