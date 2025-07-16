/**
 * Verifica si una persona es mayor de edad (18 años o más).
 * @param {number} edad La edad de la persona.
 * @returns {string} Un mensaje indicando si es mayor o menor de edad.
 */
function verificarEdad(edad) {
  // El operador ternario evalúa la condición: si es verdadera/true, devuelve el primer valor; si es falsa/false, devuelve el segundo.
  return (edad >= 18) ? 'Es Mayor de edad' : 'Es Menor de edad';
}

// --- Pruebas para ver que si funcionaa ---
console.log(verificarEdad(25));
console.log(verificarEdad(17));