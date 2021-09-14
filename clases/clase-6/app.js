"use strict";

// const frutas = []

// class Fruta {
//     constructor(producto, cantidad, precio) {
//         this.producto = producto
//         this.cantidad = cantidad
//         this.precio = precio
//     }

//     info() {
//         return `De ${producto} tenemos ${this.cantidad} y el valor es de $${precio}x kg`
//     }
// }


// while (frutas.length < 3) {
//     let producto = prompt("Ingrese el nombre del producto").toLowerCase()
//     let cantidad = prompt("Ingrese la cantidad del stock")
//     let precio = prompt("ingrese el valor del producto en pesos argentinos")

//     if (!isNaN(cantidad) && !isNaN(precio)) {
//         frutas.push(new Fruta(producto, cantidad, precio))
//     }
// }

// const mostrarInventario = () => {
//     console.log(frutas)
// }

// mostrarInventario()






const empleados = []

class Empleado {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }
}



let cantidadEmpleados = parseInt(prompt("Ingrese la cantidad total de empleados en su empresa"))

while (empleados.length < cantidadEmpleados) {
    let nombre = prompt("Ingrese el nombre del empleado")
    let edad = prompt(`Ingrese la edad de ${nombre}`)

    if (!isNaN(edad)) {
        empleados.push(new Empleado(nombre, edad))
    } else {
        alert(`${edad} no es una edad válida. Por favor, vuelva a intentarlo`)
    }
}


const nombresEmpleados = () => {
    console.log(empleados)
}

nombresEmpleados()


console.log(empleados.sort((a,b)=>b.edad-a.edad))



