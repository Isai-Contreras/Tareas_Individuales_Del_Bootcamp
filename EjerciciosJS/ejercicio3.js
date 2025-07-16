/**
 * @param {string} nombre El nombre del trabajador.
 * @param {number} salario El salario actual del trabajador.
 * @param {string} categoria La categoría del trabajador (A, B, C, o D).
 */
function calcularAumento(nombre, salario, categoria) {
  let porcentajeAumento = 0;


  switch (categoria) {
    case 'A':
      porcentajeAumento = 0.15; // 15%
      break;
    case 'B':
      porcentajeAumento = 0.30; // 30%
      break;
    case 'C':
      porcentajeAumento = 0.10; // 10%
      break;
    case 'D':
      porcentajeAumento = 0.20; // 20%
      break;
    default:
      // mensaje en caso de que la categoría no sea válida.
      console.log("Categoría '" + categoria + "' no válida.");
      return;
  }

  // se calcula el monto del aumento y el nuevo salario.
  const aumento = salario * porcentajeAumento;
  const nuevoSalario = salario + aumento;

  // se muestran los resultados en la consola.
  console.log("--- Reporte de Aumento Salarial ---");
  console.log("Nombre del empleado: " + nombre);
  console.log("Salario actual: $" + salario.toFixed(2));
  console.log("Categoría: " + categoria);
  console.log("Aumento (" + (porcentajeAumento * 100) + "%): $" + aumento.toFixed(2));
  console.log("Nuevo Salario: $" + nuevoSalario.toFixed(2));
}

// --- pruebas para ver que si funciona ---
calcularAumento("Henry Vicente", 1000, "B");
console.log("\n"); // Un espacio para separar los reportes
calcularAumento("Isai Contreras", 1200, "A");