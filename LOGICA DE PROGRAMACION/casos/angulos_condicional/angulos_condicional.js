const a = prompt("Ingrese el primer ángulo");
const b = prompt("Ingrese el segundo ángulo");
const c = prompt("Ingrese el tercer ángulo");

if (
  a > 0 &&
  b > 0 &&
  c > 0 &&
  parseInt(a) + parseInt(b) + parseInt(c) === 180
) {
  console.log("Los ángulos corresponden a un triángulo");
} else {
  console.log("Los ángulos no corresponden a un triángulo");
}
