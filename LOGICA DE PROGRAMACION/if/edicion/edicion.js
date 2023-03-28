/* Crea una aplicación que tenga varios estados y permita al usuario cambiar entre ellos.
Utiliza switch para cambiar el estado actual de la aplicación y ejecutar diferentes acciones en
función del estado actual. Por ejemplo, si la aplicación está en modo "edición", permite al
usuario editar los datos, pero si está en modo "visualización", muestra los datos sin permitir
la edición. */

let nom = prompt("ingrese nombre")
let edad = prompt("Ingrese la edad")

window.alert("que desea hacer el usuario? \n 1: Edicion \n 2: Visualizacion")

let opcion = prompt("Ingrese el numero de tu opcion")

switch (opcion) {
    case 1:
        window.alert("tu opcion fue edicion. Ingresa los datos");
        let nombre = prompt("Ingrese nombre");
        let edad1 = prompt ("Ingresa edad");

        console.log("su nombre es:", nombre);
        console.log("su edad es:", edad1);
        break;

    case 2:
        window.alert("tu opcion fue edicion. Ingresa los datos");

        console.log("su nombre es:", nom);
        console.log("su edad es:", edad);
        break;

    default:
        console.log("Ingrese opcion valida");
        break;
}
