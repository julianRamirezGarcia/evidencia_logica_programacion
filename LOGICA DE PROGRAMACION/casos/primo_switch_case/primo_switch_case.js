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

switch (true) {
  case isNaN(numero):
  case numero < 1:
  case numero > 15:
    console.log("Número ingresado no válido.");
    break;
  case esPrimo(numero):
    console.log("El número ingresado es primo.");
    break;
  default:
    console.log("El número ingresado no es primo.");
}
