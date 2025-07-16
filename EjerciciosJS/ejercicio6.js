/**
 * @param {string} origen el lugar de origen del viaje.
 * @param {string} destino el lugar de destino del viaje.
 */
function calcularDescuentoViaje(origen, destino) {
  let porcentajeDescuento = 0;

  // primero, se comprueba si el origen es 'Palma'.
  if (origen.toLowerCase() === 'palma') {
    // si el origen es correcto, se comprueba el destino usando un 'switch'.
    switch (destino.toLowerCase()) {
      case 'la costa del sol':
        porcentajeDescuento = 5; // 5%
        break;
      case 'panchimalco':
        porcentajeDescuento = 10; // 10%
        break;
      case 'puerto el triunfo':
        porcentajeDescuento = 15; // 15%
        break;
      default:
        // si el destino no está en la lista, no hay descuento.
        porcentajeDescuento = 0;
        break;
    }
  }

  // se muestra el resultado en la consola.
  if (porcentajeDescuento > 0) {
    console.log("¡Felicidades! Su viaje de " + origen + " a " + destino + " tiene un descuento del " + porcentajeDescuento + "%.");
  } else {
    console.log("Lo sentimos, el viaje de " + origen + " a " + destino + " no tiene descuento disponible.");
  }
}

// --- pruebas para ver que si funciona ---
// prueba con un destino válido.
calcularDescuentoViaje("Palma", "Panchimalco");

// prueba con otro destino válido.
calcularDescuentoViaje("Palma", "La costa del Sol");

// prueba con un destino que no tiene descuento.
calcularDescuentoViaje("Palma", "Suchitoto");

// prueba con un origen que no aplica para descuentos.
calcularDescuentoViaje("San Salvador", "Panchimalco");