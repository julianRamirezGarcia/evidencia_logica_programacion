//CICLO FOR
//Es una estructura de repetición
//sirve para ejecutar instrucciones
//repetinas n veces. Depende de:
//*una variable indice que tiene
// valor inicial cualquiera
//*una condicion que mientras se cumpla
//ejecutará el ciclo
//*un cambio(aumento, decremento..) en
//la variable indice que hara que la
//condicion alguna vez no se cumpla.
//Este ciclo es suceptible de volverse
//infinito
//EJ IMPRIMIR SU NOMBRE 200 VECES
for (let index = 0; index < 200; index++) {
  console.log("ADSO 514");
}
console.log("Ciclo terminado");

//ejemplo con decremento
for (let index = 200; index > 0; index--) {
  console.log(index, "Adso 514");
}
console.log("Ciclo terminado con decremento");

//imprima los números entre -100 y 50
for (let index = -100; index <= 50; index++) {
  console.log(index);
}
console.log("Ciclo terminado numeros -100 y 50");
//controlado por  variable n
//imprimir los numeros de x a n
let n = parseInt(prompt());
let x = parseInt(prompt());

for (let index = x; index <= n; index++) {
  console.log(index);
}
console.log("Ciclo terminado control variable n");




