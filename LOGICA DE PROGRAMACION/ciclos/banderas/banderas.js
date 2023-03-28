/*
Cree un programa que pregunte al usuario si desea salir, si o no “S/N”, 
si el usuario teclea la letra S el
programa se detendrá, de lo contrario continuará ejecutándose.
*/
//aca deseaSalir es una bandera. Una variable
//que al cambiar de estado hace que el ciclo
//trabaje o se detenga
let deseaSalir = prompt("Desea salir s/n");

//si la bandera cumple con el estado de la condicion, se ejecuta
while (deseaSalir != "s") {
  //aca la bandera cambia de estado para ser verificada por el ciclo
  deseaSalir = prompt("Desea salir s/n");
}
console.log("Programa terminado");


