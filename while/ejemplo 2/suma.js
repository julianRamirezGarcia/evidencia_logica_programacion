/*
un programa que muestre la suma de los primeros 100 numeros enteros negativos
 */
let contador = -1;
let suma = 0;
while (contador >= -100) {
    // console.log("contador");
    suma = suma + contador;
    contador = contador - 1;
}
console.log("suma:", suma);