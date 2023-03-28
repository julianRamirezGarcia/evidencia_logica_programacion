console.log("ingrese el valor del producto");
let precio = parseFloat(prompt());
console.log("ingrese en cuantos meses lo pagara");
let mes = parseFloat(prompt());

let multi = precio*0.25;
let suma = precio+multi;
let resultado= suma/mes;

console.log("usted pagara",suma,"en",mes,"y en cada mes pagara",resultado);