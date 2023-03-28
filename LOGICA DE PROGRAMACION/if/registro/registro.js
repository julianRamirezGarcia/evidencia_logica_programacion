/*Se requiere un sistema para registrar usuarios. Cada usuario tiene que registrarse con su email y
número de identificación. El email del usuario se considera válido si posee el @ y el número de
identificación se considera válido si tiene entre 5 y 10 caracteres. Cree un programa en Javascript que
pida al usuario su email, su número de identificación y su nombre y valide estos datos de acuerdo a las
condiciones anteriores. En caso de que el email no pase la validación se le debe mostrar al usuario el
mensaje(en caso de que el nombre del usuario sea Pedro) "Pedro, email no válido" En caso de que el
número de identificación no pase la validación se le debe mostrar al usuario el mensaje(en caso de que
el nombre del usuario sea Pedro) "Pedro, identificación no válida" y si la identificación y el email no
son válidos, entonces se le debe mostrar al usuario el mensaje(en caso de que el nombre del usuario
sea Pedro) "Pedro, email e identificación incorrectos" . Puede usar cualquier estructura de
decisión(casos o condicionales) para resolver este ejercicio */

let nombre = prompt("Ingrese su nombre");
let correo = prompt("Ingrese su correo");
let id = prompt("Ingrese su numero de identificacion");
let validar = id.length

if (!(correo.includes("@"))) {
        console.log(nombre,"email no es valido");
    }
else if (!(validar >5 && validar <10)){
    console.log(nombre,"la identificacion no es valida");
    
} else if ((!(correo.includes("@"))) && (!(validar >5 && validar <10))){
    console.log(nombre,"El correo y la identificacion no son validos");
}
 
else{
    console.log(nombre,"El correo y la identificacion son validas");
}