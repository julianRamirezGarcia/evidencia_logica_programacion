//Continue: esta instrucción interrumpe el
//ciclo haciendo que este salte a la siguiente
//iteracion:

//Crear un programa que imprima los numeros
//entre 1 y 10 excluyendo el 8. Use instruccion
//continue
//solucion sin continue
/*
for (let index = 1; index <= 10; index++) {
  if (index != 8){
    console.log(index);
  }
}
*/
//solucion con continue
/*
let contador = 0
while (contador < 10) {
  contador += 1;
  if (contador == 8){
    continue;
  }
  console.log(contador);
}
*/
//Programa que pretende imprimir los numeros
//entre 1 y 200, deteniendose el programa cuando
//estemos trabajando sobre el numero 15. Use 
//break.

for (let index = 1; index <= 200; index++) {
  if (index == 15){
    
    break;
  }
  console.log(index);
}


