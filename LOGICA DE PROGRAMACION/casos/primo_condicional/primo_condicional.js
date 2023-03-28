function esPrimo(numero) {
  if (numero < 2) {
    return false;
  }
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

const numero = parseInt(prompt("Ingrese un número entre 1 y 15: "));

if (numero < 1 || numero > 15 || isNaN(numero)) {
  console.log("Número ingresado no válido.");
} else if (esPrimo(numero)) {
  console.log("El número ingresado es primo.");
} else {
  console.log("El número ingresado no es primo.");
}
