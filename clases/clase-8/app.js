"use strict"
// Declaración de variables del HTML
const nombre = document.querySelector('.c8__nombre');
const edad = document.querySelector('.c8__edad');
const submit = document.querySelector('.c8__submit');
const select = document.querySelector('.c8__select');
const readonly = document.querySelector('.c8__readonly');



const empleados = []

class Empleado {
    constructor(nombreValue, edadValue) {
        this.nombre = nombreValue;
        this.edad = edadValue;
    }
}

// Push y validación del array Empleado
submit.addEventListener('click', function (e) {
    let nombreValue = document.querySelector('.c8__nombre').value;
    const edadValue = document.querySelector('.c8__edad').value;
    e.preventDefault();
    if (!isNaN(edadValue)) {
        empleados.push(new Empleado(nombreValue, edadValue))
    } else {
        alert(`Por favor, ingrese una edad válida.`)
    }
    console.log(empleados)
});

// Metiendo HTML desde js
const fragment = document.createDocumentFragment();


for (const empleado of empleados) {
    const selectItem = document.createElement('OPTION')
    selectItem.setAttribute('value', empleado)
    selectItem.textContent = empleado
    fragment.appendChild(selectItem)
}

select.appendChild(fragment)


