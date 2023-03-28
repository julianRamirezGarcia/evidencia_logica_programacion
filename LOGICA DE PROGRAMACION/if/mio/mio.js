/* Un supermercado necesita un programa que ayude a sacar un porcentaje asignado dependiendo de la membresia que tiene el comprador. 
Las membresias son: oro (30%), plata (20%) y bronce (10%) y la compra debe de ser superior a 100.000  */ 


let membresia = prompt("Ingrese el tipo de membresia que tiene (oro, plata y bronce)");

let venta = parseFloat(prompt("Ingrese el valor total de la venta"));

switch (membresia) {
    case "oro":
        if (!(venta <= 100000)) {
            console.log("Puede obtener un descuento en la venta");
        descuento = venta * 0.30;
        total = venta-descuento
        console.log("El valor de la venta con el descuento es de: ",total);
        } else {
            console.log("No puede obtener el descuento");
        }
        break;
    default:
        break;

    case "plata":
        if (!(venta <= 100000)) {
            console.log("Puede obtener un descuento en la venta");
        descuento = venta  * 0.20;
        total = venta-descuento
        console.log("El valor de la venta con el descuento es de: ",total);
        } else {
            console.log("No puede obtener el descuento");
        }
        break;

        case "bronce":
        if (!(venta <= 100000)) {
            console.log("Puede obtener un descuento en la venta");
        descuento = venta * 0.10;
        total = venta-descuento
        console.log("El valor de la venta con el descuento es de: ",total);
        } else {
            console.log("No puede obtener el descuento");
        }
        break;
}
