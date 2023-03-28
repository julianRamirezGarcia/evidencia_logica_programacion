/*Cree un programa que muestre los números naturales de 1 a n (donde n es cualquier número natural, 5, 600, 1500 etc). Use ciclo while.
 */
let contador = 0;
let limite = parseInt(prompt("ingrese un limite"));
while (contador <= limite) {
    console.log("los numeros naturales entre 0 y", limite, "son", contador);
    contador++;

}