//El ciclo do-while garantiza que el 
//bloque de repetición se ejecutará
//por lo menos una vez, luego se verifica
//la condición, si esta es verdadera se
//repiten las instrucciones

//Programa que pide letras hasta que el usuario
//introduzca s, en ese momento el programa 
//termina
//version while
//esta variable se le llama bandera, cambia
//el comportamiento del ciclo cuando esta sufre
//un cambio. No acumula y no cuenta
/*
let letra = prompt("ingrese s/n");
while (letra != "s" && letra != "S") {
  letra = prompt("ingrese s/n");
}
*/

//version con do-while
//definimos la bandera que controlara el ciclo
/*
let letra2;
do {
  letra2 = prompt("ingrese s/n");
} while (letra2 != "s" && letra2 != "S");
*/
//Programa que pide numeros hasta que el usuario
//introduce un numero menor que cero
//que tipo de variable controla el ciclo? una
//bandera tipo entero
//la instruccion a repetir es pedir numeros
let numero;
do {
  //aca pedimos numeros
  numero = parseInt(prompt("Ingrese numero"));
} while (numero >= 0);







