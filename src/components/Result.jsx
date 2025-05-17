function Result({ resultado }) {
    if (!resultado) return null;

    if (resultado.tipo === "error" || resultado.tipo === "ok") {
        return <p>{resultado.mensaje}</p>;
    }

    if (resultado.tipo === "exceso") {
        return (
            <p>
                Se pasa de la capacidad por{" "}
                <span className="text-red-500 font-semibold">
                    {Number(resultado.valor).toLocaleString()} litros
                </span>
            </p>
        );
    }

    if (resultado.tipo === "carga") {
        return (
            <p>
                Debes cargar{" "}
                <span className="text-green-400 font-semibold">
                    {Number(resultado.valor).toLocaleString()} litros
                </span>
            </p>
        );
    }

    return null;
}

export default Result;
