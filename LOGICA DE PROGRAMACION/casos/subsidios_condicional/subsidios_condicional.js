let name = prompt("Ingrese su nombre");
let estrato = parseInt(prompt("ingrese su estrato socio-economico"));
let añosEntidad = parseInt(
  prompt("Ingrese la cantidad de años que ha estado en la entidad")
);
let mes = parseInt(prompt("Ingrese el numero del mes"));

if (estrato < 4 && añosEntidad >= 8) {
  console.log(name, ", tiene derecho a subcidio de vivienda");
} else {
  console.log(name, ", no tiene derecho a subcidio de vivienda");
}
