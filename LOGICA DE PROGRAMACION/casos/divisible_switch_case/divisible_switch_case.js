const num = parseInt(prompt("Ingresa un número:"));

switch (num % 5) {
  case 0:
    console.log(`${num} es divisible entre 5.`);
    break;
  default:
    console.log(`${num} no es divisible entre 5.`);
    break;
}
