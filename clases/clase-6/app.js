"use strict";
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


console.log(empleados.sort((a, b) => b.edad - a.edad))