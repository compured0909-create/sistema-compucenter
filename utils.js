// Utilidades globales y sistema de notificaciones Toast para COMPURED / COMPUCENTER

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

/**
 * Muestra una notificación flotante profesional (Toast) en pantalla.
 * @param {string} mensaje 
 * @param {'success'|'error'|'info'} tipo 
 */
export function mostrarNotificacion(mensaje, tipo = 'success') {
    let contenedor = document.getElementById('toast-container');
    if (!contenedor) {
        contenedor = document.createElement('div');
        contenedor.id = 'toast-container';
        contenedor.style.cssText = `
            position: fixed; bottom: 25px; right: 25px; z-index: 10000;
            display: flex; flex-direction: column; gap: 10px; pointer-events: none;
        `;
        document.body.appendChild(contenedor);
    }

    const toast = document.createElement('div');
    let colorBorde = tipo === 'success' ? '#00f2fe' : tipo === 'error' ? '#ff4757' : '#f39c12';
    let icono = tipo === 'success' ? 'fa-circle-check' : tipo === 'error' ? 'fa-circle-exclamation' : 'fa-circle-info';

    toast.style.cssText = `
        background: #1e293b; color: #fff; padding: 12px 20px; border-radius: 8px;
        border-left: 4px solid ${colorBorde}; box-shadow: 0 10px 25px rgba(0,0,0,0.5);
        font-size: 0.9rem; display: flex; align-items: center; gap: 10px;
        pointer-events: auto; animation: slideInRight 0.3s ease forwards, fadeOut 0.3s ease 3.2s forwards;
    `;
    toast.innerHTML = `<i class="fa-solid ${icono}" style="color: ${colorBorde}; font-size: 1.1rem;"></i> <span>${mensaje}</span>`;

    contenedor.appendChild(toast);
    setTimeout(() => { toast.remove(); }, 3500);
}