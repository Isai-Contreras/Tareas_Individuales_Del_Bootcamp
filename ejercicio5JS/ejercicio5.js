
function calcularDescuento() {

  const selector = document.getElementById("selectorCoche");
  const divResultado = document.getElementById("resultado");

  const cocheSeleccionado = selector.value;
  let porcentajeDescuento = 0;

  switch (cocheSeleccionado) {
    case "FORD FIESTA":
      porcentajeDescuento = 5; // 5%
      break;
    case "FORD FOCUS":
      porcentajeDescuento = 10; // 10%
      break;
    case "FORD ESCAPE":
      porcentajeDescuento = 20; // 20%
      break;
  }

  const mensaje = "El coche seleccionado es <strong>" + cocheSeleccionado + "</strong> y tiene un descuento del <strong>" + porcentajeDescuento + "%</strong>.";


  divResultado.innerHTML = mensaje;
}