/*Un usuario ingresa una contraseña y deseamos verificar si es válida. La contraseña es
válida si tiene al menos 8 caracteres y un máximo de 15 caracteres. La contraseña debe
contener un espacio. Si la contraseña tiene un formato válido, se le debe mostrar al usuario,
sino, también se le debe mostrar un mensaje. Cree en Javascript un programa que cumpla
con los requerimientos anteriores.
*/

let contraseña = prompt("Ingresa la contraseña");
let validar = contraseña.length
if (validar > 8 && validar < 15) {
    if (contraseña.includes(" ")) {
        console.log(" La contraseña es valida");
    }
    
}else{
    console.log("Ingrese una contraseña valida");
}