console.log("Ingrese cantidad");
let cantidad = parseFloat(prompt());

console.log("ingrese un porcentaje");
let porcentaje = parseFloat(prompt());

let convertir = porcentaje/100
let multi = cantidad*convertir;
let suma = cantidad+multi;

console.log("el porcentaje de la cantidad requerida es de:",suma);