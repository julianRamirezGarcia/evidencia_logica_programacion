/*Crea un programa que muestre un menú con varias opciones y permita al usuario
seleccionar una de ellas. Utiliza switch para ejecutar una acción diferente en función de la
opción seleccionada por el usuario.
 */

window.alert("Selecciones un numero para saber que prefieres. \n 1: Hamburguesa \n 2: pizza \n 3: perro \n 4: salchipapa");

let menu = parseInt(prompt("Ingrese un numero"));

switch (menu) {
    case 1:
        console.log("Usted eligio la opcion 1; hamburguesas");
        break;
    case 2:
        console.log("Usted eligio la opcion 2; pizza");
        break;
    case 3:
        console.log("Usted eligio la opcion 3; perro");
        break;
    case 4:
            console.log("Usted eligio la opcion 4; salchipapa");
            break;

    default:
        console.log("El numero ingresado no corresponde a ningun menu");
        break;
}