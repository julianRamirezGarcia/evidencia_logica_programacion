/*Crear un programa en Javascript que verifique si una cadena de texto contiene la palabra
"ADSO" y la palabra "desarrolladores" en ella. */

let palabra = prompt();

if (palabra.includes("ADSO") && palabra.includes("desarrolladores")) {
    console.log("Si contiene las palabras");
} else {
    console.log("No contiene las palabras");
}