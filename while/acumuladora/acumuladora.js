let contador = 1;
/*en este caso suma es el acumulador*/
let suma = 0;
while (contador <= 5) {
    let numero = parseFloat(prompt("ingrese numero"));
    suma = suma + numero;
    contador++

}
console.log("la suma es:", suma);