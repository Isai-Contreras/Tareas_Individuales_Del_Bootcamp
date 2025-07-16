/**
 * @param {number[]} numeros un arreglo con 10 números enteros.
 */
function analizarValores(numeros) {
  // se inicializan las variables que contarán y sumarán los valores.
  let cantidadNegativos = 0;
  let cantidadPositivos = 0;
  let cantidadMultiplosDe15 = 0;
  let acumuladoPares = 0;

  // se usa un bucle 'for...of' para recorrer cada número en la lista.
  for (const numero of numeros) {
    // 1. se revisa si el número es positivo o negativo.
    if (numero < 0) {
      cantidadNegativos++; // Incrementa el contador de negativos.
    } else if (numero > 0) {
      cantidadPositivos++; // Incrementa el contador de positivos.
    }

    // 2. se revisa si el número es múltiplo de 15.
    // un número es múltiplo de 15 si el residuo de su división entre 15 es 0.
    if (numero % 15 === 0) {
      cantidadMultiplosDe15++;
    }

    // 3. se revisa si el número es par.
    // un número es par si el residuo de su división entre 2 es 0.
    if (numero % 2 === 0) {
      acumuladoPares = acumuladoPares + numero; // se suma el número par al total.
    }
  }

  // se muestran todos los resultados en la consola.
  console.log("--- Análisis de los Valores Ingresados ---");
  console.log("Cantidad de valores negativos: " + cantidadNegativos);
  console.log("Cantidad de valores positivos: " + cantidadPositivos);
  console.log("Cantidad de múltiplos de 15: " + cantidadMultiplosDe15);
  console.log("Suma de los valores pares: " + acumuladoPares);
}

// --- Prueba para ver que si funciona ---
// se crea una lista de 10 números para simular la entrada del usuario.
const listaDeNumeros = [10, -5, 30, -15, 22, 0, 45, -2, 8, 12];
analizarValores(listaDeNumeros);