"use strict"

// Declaración variables
const nombre = document.querySelector('.c8__nombre');
const edad = document.querySelector('.c8__edad');
const submit = document.querySelector('.c8__submit');
let optionEmpleado = document.getElementById('c8__select');

const empleados = []

// Molde
class Empleado {
    constructor(nombreValue, edadValue) {
        this.nombre = nombreValue;
        this.edad = edadValue;
    }
}

// Push y validación del array Empleado
submit.addEventListener('click', function (e) {
    let nombreValue = nombre.value;
    const edadValue = edad.value;
    
    e.preventDefault();
    if (!isNaN(edadValue) && nombreValue) {
        let empleado = new Empleado(nombreValue, edadValue)
        empleados.push(empleado)
        optionEmpleado.innerHTML += "<option>" + empleado.nombre + "</option>"
    } else {
        alert(`Por favor, ingrese una edad y un nombre válidos.`)
    }
});



