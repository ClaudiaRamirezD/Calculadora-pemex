import { render, screen, fireEvent } from "@testing-library/react";
import InputField from "../components/InputField";

describe("InputField Component", () => {
    it("should render the input field with the correct label and placeholder", () => {
        render(
        <InputField
            label="Capacidad"
            placeholder="Ej. 60 → 60,000 L"
            value=""
            onChange={() => {}}
        />
        );
        expect(screen.getByText("Capacidad")).toBeInTheDocument();
    });

    it("Shows placeholder text", () => {
        render(
        <InputField
            label="Capacidad"
            placeholder="Ej. 60 → 60,000 L"
            value=""
            onChange={() => {}}
        />
        );
        expect(
        screen.getByPlaceholderText("Ej. 60 → 60,000 L")
        ).toBeInTheDocument();
    });

    it("muestra el valor que recibe", () => {
        render(
            <InputField
            label="Capacidad"
            placeholder="Ej. 60"
            value="123"
            onChange={() => {}}
            />
        );
        expect(screen.getByDisplayValue("123")).toBeInTheDocument();
    });

    it("llama a onChange con el nuevo valor", () => {
        const handleChange = vi.fn();
        render(
            <InputField
            label="Capacidad"
            placeholder="Ej. 60"
            value=""
            onChange={handleChange}
            />
        );

        const input = screen.getByPlaceholderText("Ej. 60");
        fireEvent.change(input, { target: { value: "456" } });

        expect(handleChange).toHaveBeenCalledWith("456");
    });
});
