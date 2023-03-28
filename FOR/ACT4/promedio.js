/*Cree un programa que calcule el promedio de 10 números. */
let num = 0;
let sum = 0;
for (let index = 1; index <= 10; index++) {
    num = parseFloat(prompt("ingrese un numero"));
    sum = sum + num;

}
console.log("el promedio de los numeros ingresado es" + sum / 10);