// Utilidades globales del sistema COMPURED / COMPUCENTER

/**
 * Valida que una calificación esté en el rango permitido (0 a 100).
 * @param {Array<number>} notas - Arreglo de notas numéricas.
 * @returns {boolean} - Retorna true si son válidas, false si hay error.
 */
export function validarRangoNotas(notas) {
    return !notas.some(nota => isNaN(nota) || nota < 0 || nota > 100);
}

/**
 * Formatea un monto numérico a Quetzales (Q).
 * @param {number|string} monto 
 * @returns {string}
 */
export function formatearQuetzales(monto) {
    let num = Number(monto);
    return isNaN(num) ? "Q. 0.00" : `Q. ${num.toFixed(2)}`;
}