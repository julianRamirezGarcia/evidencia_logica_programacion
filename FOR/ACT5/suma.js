/*Cree un programa que calcula la suma de los primeros n números naturales. Use ciclo for */
let num1 = parseInt(prompt("ingresa numero"));
let suma = 0;
for (let index = 1; index <= num1; index++) {
    suma = suma + index;
}
console.log("la suma es:" + suma);