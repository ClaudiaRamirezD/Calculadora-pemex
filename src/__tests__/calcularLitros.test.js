import { describe, it, expect } from "vitest";
import { calcularLitros } from "../utils/calcularLitros";

describe("calcularLitros", () => {
    it("debe pedir que se completen todos los campos si hay NaN", () => {
        const resultado = calcularLitros("abc", "30000", "90");
        expect(resultado).toEqual({
        tipo: "error",
        mensaje: "Completa todos los campos correctamente"
        });
    });

    it("debe validar que los valores sean positivos y el porcentaje válido", () => {
        const resultado = calcularLitros("0", "1000", "90");
        expect(resultado).toEqual({
        tipo: "error",
        mensaje: "Los valores deben ser positivos y el porcentaje entre 1 y 100"
        });
    });

    it("debe indicar cuántos litros cargar", () => {
        const resultado = calcularLitros("60", "30000", "90");
        // capacidad * 1000 = 60000, porcentaje 90% = 54000, actual = 30000, faltan 24000
        expect(resultado).toEqual({
        tipo: "carga",
        valor: "24000.00"
        });
    });

    it("debe indicar si ya está lleno al porcentaje deseado", () => {
        const resultado = calcularLitros("30", "27000", "90");
        // 30*1000=30000, 90% = 27000, actual=27000, faltan 0
        expect(resultado).toEqual({
        tipo: "ok",
        mensaje: "El tanque ya está en el porcentaje deseado"
        });
    });

    it("debe indicar si se pasa de la capacidad", () => {
        const resultado = calcularLitros("30", "35000", "90");
        // 30k capacidad, 90% = 27000, actual=35000, exceso = 8000
        expect(resultado).toEqual({
        tipo: "exceso",
        valor: "8000.00"
        });
    });

    it("debe devolver objeto tipo: 'carga' y valor si se usa en modo normal", () => {
        const resultado = calcularLitros("30", "20000", "80");
        // 30k capacidad, 80% = 24000, actual=20000, faltan 4000
        expect(resultado).toEqual({
        tipo: "carga",
        valor: "4000.00"
        });
    });
});
