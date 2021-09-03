

// // SUMA
const suma = document.querySelector('#btnSuma')

suma.addEventListener('click', function suma(){
    let num1 = parseInt(document.getElementById("c4__txtIdNumber1").value)
    let num2 = parseInt(document.getElementById("c4__txtIdNumber2").value)
    let resultado = num1+num2
    document.getElementById('c4__txtIdResult').value = resultado
})




// // RESTA
const resta = document.querySelector('#btnResta')

resta.addEventListener('click', function resta(){
    let num1 = parseInt(document.getElementById("c4__txtIdNumber1").value)
    let num2 = parseInt(document.getElementById("c4__txtIdNumber2").value)
    let resultado = num1-num2
    document.getElementById('c4__txtIdResult').value = resultado
})



// // MULTIPLICACIÓN
const multiplicacion = document.querySelector('#btnMultiplicar')

multiplicacion.addEventListener('click', function multiplicacion(){
    let num1 = parseInt(document.getElementById("c4__txtIdNumber1").value)
    let num2 = parseInt(document.getElementById("c4__txtIdNumber2").value)
    let resultado = num1*num2
    document.getElementById('c4__txtIdResult').value = resultado
})



// // DIVISIÓN
const division = document.querySelector('#btnDividir')

division.addEventListener('click', function division(){
    let num1 = parseInt(document.getElementById("c4__txtIdNumber1").value)
    let num2 = parseInt(document.getElementById("c4__txtIdNumber2").value)
    let resultado = num1/num2
    document.getElementById('c4__txtIdResult').value = resultado
})


const refresh = document.querySelector('#c4__refresh')

refresh.addEventListener('click', function refresh(){
    location.reload();
})

















