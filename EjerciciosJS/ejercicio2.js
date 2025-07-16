/**
 * Calcula la nota final de un alumno basándose en ponderaciones (en alumno sere yo).
 * @param {string} nombre El nombre del alumno.
 * @param {string} carnet El carnet del alumno.
 * @param {number} notaExamen La nota del examen.
 * @param {number} notaTareas La nota de las tareas.
 * @param {number} notaAsistencia La nota de la asistencia.
 * @param {number} notaInvestigacion La nota de la investigación.
 */
function calcularNotaFinal(nombre, carnet, notaExamen, notaTareas, notaAsistencia, notaInvestigacion) {
  // sSe calcula la nota final multiplicando cada nota por su peso, o sea el porcentaje.
  const notaFinal = (notaExamen * 0.20) + (notaTareas * 0.40) + (notaAsistencia * 0.10) + (notaInvestigacion * 0.30);

  // se muestran los datos del alumno y su nota final.
  console.log("--- Reporte del Alumno ---");
  console.log("Nombre: " + nombre);
  console.log("Carnet: " + carnet);
  console.log("Nota Final: " + notaFinal.toFixed(2)); // .toFixed(2) para redondear a 2 decimales, ni más ni menos.
}

// --- Prueba para ver que si funcionaa ---
calcularNotaFinal("Isai Contreras", "IC24026", 8.5, 6.0, 10, 7.5);