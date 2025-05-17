export function calcularLitros(capacidad, actual, porcentaje) {
    const cap = parseFloat(capacidad) * 1000;
    const act = parseFloat(actual);
    const porc = parseFloat(porcentaje);

    if (isNaN(cap) || isNaN(act) || isNaN(porc)) {
        return {
        tipo: "error",
        mensaje: "Completa todos los campos correctamente"
        };
    }

    if (cap <= 0 || act < 0 || porc <= 0 || porc > 100) {
        return {
        tipo: "error",
        mensaje: "Los valores deben ser positivos y el porcentaje entre 1 y 100"
        };
    }

    const litrosDeseados = (cap * porc) / 100;
    const litrosFaltantes = litrosDeseados - act;

    if (litrosFaltantes < 0) {
        const exceso = Math.abs(litrosFaltantes);
        return {
        tipo: "exceso",
        valor: exceso.toFixed(2)
        };
    } else if (litrosFaltantes === 0) {
        return {
        tipo: "ok",
        mensaje: "El tanque ya está en el porcentaje deseado"
        };
    } else {
        return {
        tipo: "carga",
        valor: litrosFaltantes.toFixed(2)
        };
    }
}
