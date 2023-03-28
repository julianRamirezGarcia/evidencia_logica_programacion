let name = prompt("Ingrese su nombre");
let estrato = parseInt(prompt("ingrese su estrato socio-economico"));
let añosEntidad = parseInt(
  prompt("Ingrese la cantidad de años que ha estado en la entidad")
);

switch (estrato < 4 && añosEntidad >= 8) {
  case true:
    console.log(name, ", tiene derecho a subcidio de vivienda");
    break;
  default:
    console.log(name, ", no tiene derecho a subcidio de vivienda");
    break;
}
