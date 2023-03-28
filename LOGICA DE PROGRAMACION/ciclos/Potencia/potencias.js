let a = parseInt(prompt("Introduce la base:"));
let b = parseInt(prompt("Introduce el exponente:"));
let potencia = 1;

while (a <= b) {
  potencia *= a;
  potencia++;
}
console.log("${a} elevado a ${b} es", potencia);