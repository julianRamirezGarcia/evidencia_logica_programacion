//Crear un programa que muestre la multiplicación de dos cantidades.Use ciclo
//while.NO USE LA OPERACIÓN MULTIPLICACIÓN
let contador = 1;
/*en este caso suma es el acumulador*/
let suma = 0;
let num1 = parseFloat(prompt("ingresa numero"));
let num2 = parseFloat(prompt("ingresa un segundo numero"));
while (contador <= num1) {
    suma = suma + num2
    contador++

}
console.log("la suma es:", suma);