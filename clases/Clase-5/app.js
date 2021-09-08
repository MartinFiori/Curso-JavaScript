"use strict"






// PopUp
function togglePopup()
{
    document.getElementById("popup-1").classList.toggle("active")
}



// Futuro objetos
class Employee {
    constructor(name, lastName, age, gender) {
        this.name = name
        this.lastName = lastName
        this.age = age
        this.gender = gender
    }
}

const persona1 = new Employee ("Elsa", "Pato", 39, "Female");
const persona2 = new Employee ("Jazmin", "Flores", 29, "Female");
const persona3 = new Employee ("Poca", "Hontas", 34, "No binario");



const firstUser = document.querySelector('.firstUser');

firstUser.addEventListener('click', function(){
    document.getElementById('txtName').value = persona1.name;
    document.getElementById('txtLastName').value = persona1.lastName;
    document.getElementById('txtAge').value = persona1.age;
    document.getElementById('txtGender').value = persona1.gender;
})


const secondUser = document.querySelector('.secondUser');

secondUser.addEventListener('click', function(){
    document.getElementById('txtName').value = persona2.name;
    document.getElementById('txtLastName').value = persona2.lastName;
    document.getElementById('txtAge').value = persona2.age;
    document.getElementById('txtGender').value = persona2.gender;
})


const thirdUser = document.querySelector('.thirdUser');

thirdUser.addEventListener('click', function(){
    document.getElementById('txtName').value = persona3.name;
    document.getElementById('txtLastName').value = persona3.lastName;
    document.getElementById('txtAge').value = persona3.age;
    document.getElementById('txtGender').value = persona3.gender;
})



