const num = parseInt(prompt("Ingresa un número:"));

switch (num % 2) {
  case 0:
    console.log(`${num} es un número par.`);
    break;
  case 1:
    console.log(`${num} es un número impar.`);
    break;
  default:
    console.log(`${num} no es un número entero.`);
    break;
}
