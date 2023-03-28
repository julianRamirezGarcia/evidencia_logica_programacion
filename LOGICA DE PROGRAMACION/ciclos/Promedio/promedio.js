let suma = 0;

for (let i = 1; i <= 10; i++) {
  let numero = parseInt(prompt("Introduce el numero ${i}:"));
  suma += numero;
}
let promedio = suma / 10;
console.log("El promedio de los 10 numeros es", promedio);
