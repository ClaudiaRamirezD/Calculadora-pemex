function Result({ resultado }) {
    if (!resultado) return null;

    const matchCargar = resultado.match(/Debes cargar (\d+(\.\d+)?) litros/);
    const matchMaximo = resultado.match(
        /Lo más que podrías son: (\d+(\.\d+)?) litros/
    );

    if (matchCargar) {
        const litros = matchCargar[1];
        return (
        <p className="text-white font-semibold text-center text-xl">
            Debes cargar{" "}
            <span className="text-green-400">
            {Number(litros).toLocaleString()}
            </span>{" "}
            litros
        </p>
        );
    }

    if (matchMaximo) {
        const litros = matchMaximo[1];
        return (
        <p className="text-white font-semibold text-center text-xl">
            Lo más que podrías son:{" "}
            <span className="text-green-400">
            {Number(litros).toLocaleString()}
            </span>{" "}
            litros
        </p>
        );
    }

    return (
        <p className="text-white font-semibold text-center text-xl">{resultado}</p>
    );
}

export default Result;
