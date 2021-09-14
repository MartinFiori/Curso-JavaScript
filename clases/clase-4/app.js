let num1, num2, resultado;

// SUMA
const suma = document.querySelector('#btnSuma')

suma.addEventListener('click', function suma(){
    num1 = parseInt(document.getElementById("c4__txtIdNumber1").value)
    num2 = parseInt(document.getElementById("c4__txtIdNumber2").value)
    resultado = num1+num2
    document.getElementById('c4__txtIdResult').value = `El resultado es ${resultado}`
})




// RESTA
const resta = document.querySelector('#btnResta')

resta.addEventListener('click', function resta(){
        num1 = parseInt(document.getElementById("c4__txtIdNumber1").value)
        num2 = parseInt(document.getElementById("c4__txtIdNumber2").value)
        resultado = num1-num2
        document.getElementById('c4__txtIdResult').value = `El resultado es ${resultado}`
})



// MULTIPLICACIÓN
const multiplicacion = document.querySelector('#btnMultiplicar')

multiplicacion.addEventListener('click', function multiplicacion(){
    num1 = parseInt(document.getElementById("c4__txtIdNumber1").value)
    num2 = parseInt(document.getElementById("c4__txtIdNumber2").value)
    resultado = num1*num2
    document.getElementById('c4__txtIdResult').value = `El resultado es ${resultado}`
})



// DIVISIÓN
const division = document.querySelector('#btnDividir')

division.addEventListener('click', function division(){
    num1 = parseInt(document.getElementById("c4__txtIdNumber1").value)
    num2 = parseInt(document.getElementById("c4__txtIdNumber2").value)
    resultado = num1/num2
    document.getElementById('c4__txtIdResult').value = `El resultado es ${resultado}`
})


const refresh = document.querySelector('#c4__refresh')

refresh.addEventListener('click', function refresh(){
    location.reload();
})

















