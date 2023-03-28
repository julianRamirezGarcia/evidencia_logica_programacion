/*Cree un programa que muestre los números impares entre 1 y n. */
let contador = 1;
let limite = parseInt(prompt("ingrese un limite"));
for (let index = 1; index <= limite; index++) {
    if (contador % 2 != 0) {
        console.log(contador, "es impar");

    }
    contador++
}