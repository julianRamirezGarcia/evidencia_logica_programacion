/*Crear un programa rama en Javascript que verifique si un año es bisiesto. Un año es
bisiesto si es divisible por 4 y no es divisible por 100, o si es divisible por 400. */

let año = parseInt(prompt("Ingrese año"));

if ((año % 4 == 0) && (año % 100 !=0) || (año % 400 == 0)) {
    console.log("es bisiesto");
} else {
    console.log("No es bisiesto");
}