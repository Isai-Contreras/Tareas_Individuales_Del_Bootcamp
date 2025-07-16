/**
 * @param {number} num1 El primer número.
 * @param {number} num2 El segundo número.
 * @returns {number | string} El número mayor o un mensaje si son iguales.
 */
function encontrarNumeroMayor(num1, num2) {

  if (num1 > num2) {
    // si el primer número es mayor, se devuelve.
    return num1;
  } else if (num2 > num1) {
    // si el segundo número es mayor, se devuelve.
    return num2;
  } else {
    // si ninguno es mayor, es porque son iguales.
    return "Ambos números son iguales.";
  }
}

// --- pruebas para ver que si funciona ---
console.log("El número mayor entre 10 y 5 es: " + encontrarNumeroMayor(10, 5));
console.log("El número mayor entre 20 y 100 es: " + encontrarNumeroMayor(20, 100));
console.log("Comparando 7 y 7: " + encontrarNumeroMayor(7, 7));