"use strict"

        let radio, base, height, lado, result, figura,triangle;
        
        const button = document.querySelector('#button')
        
        button.addEventListener('click', ()=>{
            let medida = prompt("Ingrese con qué medida de longitud desea trabajar\nPor ej: cm, m, km, etc...");
            alert("¿El área de qué figura geométrica desea averiguar?");

        while(figura != 5){
            figura = parseInt(prompt("1. Triángulo\n2. Cuadrado\n3. Círculo\n4. Rectángulo\n5. Salir del programa"))
            switch(figura){
                case 1:
                    base = parseInt(prompt("Ingrese la longitud de la base"))
                    height = parseInt(prompt("Ingrese la longitud de la altura"))
                    result = (base*height)/2
                    alert(`El área del triángulo es de ${result.toFixed(2)}${medida}.`)
                    break
                
                case 2:
                    lado = parseInt(prompt("Ingrese la longitud de uno de los lados"))
                    result = Math.pow(lado,2)
                    alert(`El área del cuadrado es de ${result.toFixed(2)}${medida}.`)
                    break
                
                case 3:
                    radio = parseInt(prompt("Ingrese la longitud del radio"))
                    result = Math.PI*Math.pow(radio,2)
                    alert(`El área del círculo es de ${result.toFixed(2)}${medida}.`)
                    break
                
                case 4:
                    base = parseInt(prompt("Ingrese la longitud de la base"))
                    height = parseInt(prompt("Ingrese la longitud de la altura"))
                    result = (base*height)
                    alert(`El área del rectángulo es de ${result.toFixed(2)}${medida}.`)
                    break
                
                default: 
                    alert("Espero haberlo ayudado")
            }
        }
})


