import { calcularLitros } from "../utils/calcularLitros";

describe("calcularLitros", () => {
    it("debe pedir que se completen todos los campos si hay NaN", () => {
        expect(calcularLitros("", "1000", "90")).toBe(
        "Completa todos los campos correctamente"
        );
    });

    it("debe validar que los valores sean positivos y el porcentaje válido", () => {
        expect(calcularLitros("0", "1000", "90")).toBe(
        "Los valores deben ser positivos y el porcentaje entre 1 y 100"
        );
        expect(calcularLitros("60", "-100", "90")).toBe(
        "Los valores deben ser positivos y el porcentaje entre 1 y 100"
        );
        expect(calcularLitros("60", "1000", "120")).toBe(
        "Los valores deben ser positivos y el porcentaje entre 1 y 100"
        );
    });

    it("debe indicar cuántos litros cargar", () => {
        expect(calcularLitros("60", "30000", "90")).toBe(
        "Debes cargar 24000.00 litros"
        );
    });

    it("debe indicar si ya está lleno al porcentaje deseado", () => {
        expect(calcularLitros("60", "54000", "90")).toBe(
        "El tanque ya está en el porcentaje deseado"
        );
    });

    it("debe indicar si se pasa de la capacidad", () => {
        expect(calcularLitros("60", "55000", "80")).toBe(
        "Se pasa de la capacidad por 7000.00 litros"
        );
    });
});
