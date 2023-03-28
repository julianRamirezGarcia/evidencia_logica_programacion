const a = prompt("Ingrese el primer ángulo");
const b = prompt("Ingrese el segundo ángulo");
const c = prompt("Ingrese el tercer ángulo");

switch (parseInt(a) + parseInt(b) + parseInt(c)) {
  case 180:
    if (a > 0 && b > 0 && c > 0) {
      console.log("Los ángulos corresponden a un triángulo");
    } else {
      console.log("Los ángulos no corresponden a un triángulo");
    }
    break;
  default:
    console.log("Los ángulos no corresponden a un triángulo");
}
