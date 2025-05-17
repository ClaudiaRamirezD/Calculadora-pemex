import { render, screen, within } from "@testing-library/react";
import Result from "../components/Result";

test("muestra el mensaje de 'Debes cargar X litros' con formato", () => {
  const resultado = {
    tipo: "carga",
    valor: "12345.67"
  };
  render(<Result resultado={resultado} />);

  const valorFormateado = Number(resultado.valor).toLocaleString();

  // Buscar el párrafo que contiene "Debes cargar"
  const paragraph = screen.getByText((content, node) => {
    return (
      node.tagName.toLowerCase() === "p" && content.includes("Debes cargar")
    );
  });

  // Verificar que dentro del párrafo está el valor formateado
  expect(
    within(paragraph).getByText((content) => content.includes(valorFormateado))
  ).toBeInTheDocument();
});
