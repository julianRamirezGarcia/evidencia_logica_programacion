let suma = 0;
let cantidad = 0;

while (true) {
  let numero = parseInt(
    prompt("Introduce un número (introduce 0 para salir):")
  );
  if (numero === 0) {
    break;
  }
  suma += numero;
  cantidad++;
}

if (cantidad === 0) {
  console.log("No se han ingresado números.");
} else {
  let promedio = suma / cantidad;
  console.log(
    `El promedio de los ${cantidad} números ingresados es: ${promedio}`
  );
}
