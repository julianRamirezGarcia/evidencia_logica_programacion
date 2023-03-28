/*
Crear un programa que muestre la multiplicación de dos cantidades. Use ciclo while. NO USE LA OPERACIÓN MULTIPLICACIÓN
*/

let numero = parseInt(prompt("ingrese un numero"));
let multiplo = parseInt(prompt("Ingrese la cantidad por la que desea multiplicar"));
let resultado = 0;
while (multiplo != 0) {
    resultado = resultado + numero;
    multiplo = multiplo - 1;
}
console.log("El producto es:", resultado);