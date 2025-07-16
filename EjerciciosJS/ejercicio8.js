/**
 * Muestra la tabla de multiplicar del 1 al 10 para un número dado.
 * @param {number} numero El número del cual se generará la tabla.
 */
function mostrarTablaDeMultiplicar(numero) {
  // Se muestra un encabezado para la tabla.
  console.log("--- Tabla de Multiplicar del " + numero + " ---");

  // Se usa un bucle 'for' que cuenta desde 1 hasta 10.
  for (let i = 1; i <= 10; i++) {
    // Se calcula el resultado de la multiplicación.
    const resultado = numero * i;

    // Se imprime cada línea de la tabla.
    console.log(numero + " x " + i + " = " + resultado);
  }
}

// --- Prueba para ver el funcionamiento ---
mostrarTablaDeMultiplicar(7);