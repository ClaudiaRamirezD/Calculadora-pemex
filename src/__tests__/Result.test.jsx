import { render, screen } from "@testing-library/react";
import Result from "../components/Result";

describe("Result Component", () => {
    it("no debe mostrar nada si no hay resultado", () => {
        const { container } = render(<Result resultado={null} />);
        //container.innerHTML debe de estar vacio porque no muestra nada
        expect(container).toBeEmptyDOMElement();
    });

    it("muestra el mensaje de 'Debes cargar X litros' con formato", () => {
        render(<Result resultado="Debes cargar 12345 litros" />);
        
        // Busca el texto principal en el documento
        expect(screen.getByText(/Debes cargar/i)).toBeInTheDocument();
        
        // Busca el número formateado (con coma como separador de miles)
        expect(screen.getByText("12,345")).toBeInTheDocument();
    });

    it("muestra el mensaje de 'Lo más que podrías son: X litros' con formato", () => {
        render(<Result resultado="Lo más que podrías son: 9876 litros" />);
        
        expect(screen.getByText(/Lo más que podrías son/i)).toBeInTheDocument();
        expect(screen.getByText("9,876")).toBeInTheDocument();
    });

    it("muestra texto plano cuando no coincide con patrones", () => {
        const texto = "El tanque ya está lleno";
        render(<Result resultado={texto} />);
        
        expect(screen.getByText(texto)).toBeInTheDocument();
    });

});