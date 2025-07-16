/**
 * @param {number} celsius la temperatura en grados Celsius.
 */
function convertirYClasificarTemperatura(celsius) {
  // 1. se convierte la temperatura de Celsius a Fahrenheit.
  const fahrenheit = (celsius * 9/5) + 32;

  let mensaje = "";

  // 2. Se clasifica la temperatura en Fahrenheit usando 'if...else if...else'.
  if (fahrenheit >= 14 && fahrenheit < 32) {
    mensaje = "Temperatura baja";
  } else if (fahrenheit >= 32 && fahrenheit < 68) {
    mensaje = "Temperatura adecuada";
  } else if (fahrenheit >= 68 && fahrenheit < 96) {
    mensaje = "Temperatura alta";
  } else {
    mensaje = "Temperatura desconocida";
  }

  // Se muestra el resultado completo.
  console.log(celsius + "°C es " + fahrenheit.toFixed(1) + "°F. Es una " + mensaje + ".");
}

// --- Pruebas para ver que si funciona ---
convertirYClasificarTemperatura(-5); 
convertirYClasificarTemperatura(10);  
convertirYClasificarTemperatura(25);  
convertirYClasificarTemperatura(40);  