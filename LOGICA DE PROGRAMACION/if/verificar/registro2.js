let nombre = prompt("Ingrese su nombre");

let correo = prompt("Ingrese su correo");

let id = prompt("Ingrese su numero de identificacion");

switch (correo) {
    case correo:
        if (correo.includes("@")) {
            console.log(nombre,"email valido");
        }
        
    else{
        console.log(nombre,"email no valido");
    }
        break;

    default:
        break;

    case correo:
        let validar = id.length
        if (validar >= 5 && validar <= 8) {
                console.log(nombre,"Identificacion valida");
            
            }else{
            console.log(nombre,"Identificacion no valida");
        }
         
    
    default:
        console.log("Ingrese datos validos");
            break;
     
}