/*Crear un programa en Javascript que verifique si un número es divisible por 3 y por 5 al
mismo tiempo*/

let num = parseInt(prompt("Ingrese un numero"));

if (num/3==0 && num/5==0) {
    console.log("El numero si es divisble");
} else {
    console.log("El numero no es divisible");
}

let correo = prompt("Ingrese su correo");
if (correo.includes("@")) {
        console.log(nombre,"email valido");
    }
    
else{
    console.log(nombre,"email no valido");
}

let id = prompt("Ingrese su numero de identificacion");
let validar = id.length
if (validar >= 5 && validar <= 8) {
        console.log(nombre,"Identificacion valida");
    
    }else{
    console.log(nombre,"Identificacion no valida");
}