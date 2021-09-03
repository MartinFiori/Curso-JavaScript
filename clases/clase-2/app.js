"use strict"
let a=parseInt(prompt("Para ordenar 3 números de mayor a menor ingrese el primer número"));
let b=parseInt(prompt("Ahora ingrese el segundo número"));
let c=parseInt(prompt("Y ahora, ingrese el tercer número"));


if(a>b && a>c)
{
    if(b>c){
        alert(`El número más alto es ${a}, el segundo más alto es ${b} y el más chico es ${c}`);
    } else{
        alert(`El número más alto es ${a}, el segundo más alto es ${c} y el más chico es ${b}`);
    }
}else if(b>a && b>c){
    if(a>c){
        alert(`El número más alto es ${b}, el segundo más alto es ${a} y el más chico es ${c}`);
    } else{
        alert(`El número más alto es ${b}, el segundo más alto es ${c} y el más chico es ${a}`);
    }
}else if(c>a && c>b){
    if(a>b){
        alert(`El número más alto es ${c}, el segundo más alto es ${a} y el más chico es ${b}`);
    } else{
        alert(`El número más alto es ${c}, el segundo más alto es ${b} y el más chico es ${a}`);
    }
}

