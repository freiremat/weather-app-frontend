import { fireEvent, render, screen } from "@testing-library/react";
import HistoryTable from "@/components/HistoryTable";
import { HistoryItem } from "@/types";

const mockHistory: HistoryItem[] = [
  { city: "Santos", lat: -23.96, lon: -46.33, consulted_at: "2026-04-27T10:00:00" },
  { city: "São Paulo", lat: -23.55, lon: -46.63, consulted_at: "2026-04-27T11:00:00" },
];

describe("HistoryTable", () => {
  it("exibe mensagem quando histórico está vazio", () => {
    render(<HistoryTable history={[]} onSelect={() => {}} />);
    expect(screen.getByText("Nenhuma consulta realizada ainda.")).toBeInTheDocument();
  });

  it("exibe itens do histórico", () => {
    render(<HistoryTable history={mockHistory} onSelect={() => {}} />);
    expect(screen.getByText("Santos")).toBeInTheDocument();
    expect(screen.getByText("São Paulo")).toBeInTheDocument();
  });

  it("chama onSelect com os dados corretos ao clicar em um item do histórico", () => {
    const onSelectMock = jest.fn();
    render(<HistoryTable history={mockHistory} onSelect={onSelectMock} />);

    fireEvent.click(screen.getByText("Santos"));

    expect(onSelectMock).toHaveBeenCalledWith({ city: "Santos", lat: -23.96, lon: -46.33, consulted_at: "2026-04-27T10:00:00" });
  });
});