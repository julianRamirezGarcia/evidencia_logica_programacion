console.log("Ingrese edad");
let edad = parseInt(prompt());
//si se considera solo un camino 
//el condicional es sencillo
if (edad >= 18){
    console.log("Ud es mayor de edad");
}
else{
    // si usamos else, el condicional es doble no sencillo
    // el se ejecuta si la condicion del if no se cumple 
    console.log("es menor de edad");
}