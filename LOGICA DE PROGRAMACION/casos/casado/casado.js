let estadoCivil = prompt("Ingrese estado civil");
let casado = estadoCivil == "casado";

switch (casado) {
  case true:
    console.log("Felicidades es Ud casado");
    break;
  default:
    console.log("Que bueno ud no es casado");
    break;
}