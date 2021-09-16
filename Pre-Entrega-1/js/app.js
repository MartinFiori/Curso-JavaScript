"use strict"
// Inicio programa
alert("Bienvenido a Papas Now");
// Declaro variables y array para el bucle
let agregado, opcion, size;
let pedidos = []

// Molde Productos
class Pedido {
    constructor(producto, precio) {
        this.producto = producto;
        this.precio = precio;
    }
}

// Inicio bucle
while (opcion != 5) {
    opcion = parseInt(prompt("Selecione lo que quiera pedir!\n1. Papas\n2. Shis\n3. Hamburguesas\n4. Tequeños\n5. Terminar Pedido"));

    switch (opcion) {
        case 1:
            size = prompt("Ingrese qué tamaño quiere:\n1. Papas Chicas \n2. Papas Grandes \n3. Pack Familiar")
            if (size == 1) {
                pedidos.push(new Pedido("Papas Chicas", 240))
                alert(`Papas Chicas agregadas al carrito`)
            } else if (size == 2) {
                pedidos.push(new Pedido("Papas Grandes", 370))
                alert(`Papas Grandes agregadas al carrito`)
            } else if (size == 3) {
                pedidos.push(new Pedido("Pack Familiar", 540))
                alert(`Pack Familiar agregado al carrito`)
            } else {
                alert("Opción no valida. Seleccione una de las opciones indicadas!!")
            }
            break;

        case 2:
            pedidos.push(new Pedido("Shis", 690))
            alert("Shis agregado al carrito")
            break;

        case 3:
            size = prompt("Ingrese qué tamaño quiere:\n1. Hamburguesa Simple \n2. Hamburguesa Doble \n3. Hamburguesa Triple")
            if (size == 1) {
                pedidos.push(new Pedido("Hamburguesa Simple", 440))
                alert("Hamburguesa Simple agregada al carrito")
            } else if (size == 2) {
                pedidos.push(new Pedido("Hamburguesa Doble", 570))
                alert("Hamburguesa Doble agregada al carrito")
            } else if (size == 3) {
                pedidos.push(new Pedido("Hamburguesa Triple", 670))
                alert("Hamburguesa Triple agregada al carrito")
            } else {
                alert("Opción no valida. Seleccione una de las opciones indicadas!!")
            }
            break;

        case 4:
            size = prompt("Ingrese qué tamaño quiere:\n1. Tequeños Chicos (6u)\n2. Tequeños Grandes (12u)")
            if (size == 1) {
                pedidos.push(new Pedido("Tequeños Chicos", 340))
                alert("Tequeños Chicos (6u) agregado al carrito")
            } else if (size == 2) {
                pedidos.push(new Pedido("Tequeños Grandes", 600))
                alert("Tequeños Grandes (12u) agregado al carrito")
            } else {
                alert("Opción no valida. Seleccione una de las opciones indicadas!!")
            }
            break;

        case 5:
            break;
        default:
            alert("Ingrese una opción válida!!")
    }
}

// Calculo Precio del Pedido
let total = 0;

for (let i = 0; i < pedidos.length; i++) {
    total = total + pedidos[i].precio;
}




// Validación carrito
if (total != 0){
    alert(`El valor total de su compra es de $${total}`)
} else{
    alert("No hay nada en el carrito. Por favor, realice su pedido")
    location.reload();
}






console.log(pedidos)