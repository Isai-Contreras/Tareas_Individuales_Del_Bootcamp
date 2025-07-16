/**
 * @param {number[]} edades Un arreglo de edades.
 * @returns {number} El promedio de las edades.
 */
function calcularPromedio(edades) {
  let suma = 0;
  for (const edad of edades) {
    suma = suma + edad;
  }
  return suma / edades.length;
}

/**
 * Procesa las edades de los tres turnos para encontrar el promedio más alto.
 * @param {number[]} turnoManana Edades del turno mañana.
 * @param {number[]} turnoTarde Edades del turno tarde.
 * @param {number[]} turnoNoche Edades del turno noche.
 */
function analizarEdadesPorTurno(turnoManana, turnoTarde, turnoNoche) {

  // 1. Se calcula el promedio de cada turno usando la función de ayuda.
  const promedioManana = calcularPromedio(turnoManana);
  const promedioTarde = calcularPromedio(turnoTarde);
  const promedioNoche = calcularPromedio(turnoNoche);

  // 2. Se imprimen los promedios de cada turno.
  console.log("--- Promedio de Edades por Turno ---");
  console.log("Promedio Turno Mañana: " + promedioManana.toFixed(2));
  console.log("Promedio Turno Tarde: " + promedioTarde.toFixed(2));
  console.log("Promedio Turno Noche: " + promedioNoche.toFixed(2));
  console.log("------------------------------------");

  // 3. Se determina cuál de los tres promedios es el mayor.
  if (promedioManana > promedioTarde && promedioManana > promedioNoche) {
    console.log("El turno con el promedio de edad mayor es el de la Mañana.");
  } else if (promedioTarde > promedioManana && promedioTarde > promedioNoche) {
    console.log("El turno con el promedio de edad mayor es el de la Tarde.");
  } else if (promedioNoche > promedioManana && promedioNoche > promedioTarde) {
    console.log("El turno con el promedio de edad mayor es el de la Noche.");
  } else {
    console.log("Hay dos o más turnos con el mismo promedio de edad más alto.");
  }
}

// --- prueba para ver que si funciona ---
// se simula la entrada de datos con arreglos de edades para cada turno.
const edadesManana = [18, 19, 20, 18, 21]; // 5 estudiantes
const edadesTarde = [22, 23, 25, 22, 24, 23]; // 6 estudiantes
const edadesNoche = [30, 28, 35, 40, 29, 33, 31, 28, 37, 30, 29]; // 11 estudiantes

analizarEdadesPorTurno(edadesManana, edadesTarde, edadesNoche);