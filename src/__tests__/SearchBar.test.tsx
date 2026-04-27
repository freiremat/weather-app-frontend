import { fireEvent, render, screen } from "@testing-library/react";
import SearchBar from "@/components/SearchBar";

describe("SearchBar", () => {
  it("renderiza o input e o botão", () => {
    render(<SearchBar onSearch={() => {}} />);
    expect(screen.getByPlaceholderText("Digite o nome da cidade...")).toBeInTheDocument();
    expect(screen.getByText("Consultar Previsão")).toBeInTheDocument();
  });

  it("chama a função onSearch ao clicar no botão", () => {
        const onSearchMock = jest.fn();
        render(<SearchBar onSearch={onSearchMock} />);

        fireEvent.change(screen.getByPlaceholderText("Digite o nome da cidade..."), { target: { value: "Santos" } });  
        fireEvent.click(screen.getByText("Consultar Previsão"));


        expect(onSearchMock).toHaveBeenCalledWith( "Santos" );
    });
});
