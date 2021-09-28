// STOCK
const stocks = [{
        id: 1,
        nombre: "Papas",
        precio: 240,
        tipo: "papas",
        img: '../../assets/stock/papas.jpg'
    },
    {
        id: 2,
        nombre: "Hamburguesa",
        precio: 440,
        tipo: "hamburguesas",
        img: '../../assets/stock/burger.jpg'
    },
    {
        id: 3,
        nombre: "Shis",
        precio: 690,
        tipo: "shis",
        img: '../../assets/stock/shis.jpg'
    },
    {
        id: 4,
        nombre: "Tequeños",
        precio: 340,
        tipo: "tequeños",
        img: '../../assets/stock/tequenios.jpg'
    },
    {
        id: 5,
        nombre: "Empanadas",
        precio: 720,
        tipo: "empanadas",
        img: '../../assets/stock/empanadas.jpg'
    },
    {
        id: 6,
        nombre: "Pizza",
        precio: 430,
        tipo: "pizzas",
        img: '../../assets/stock/pizzas.jpg'
    },
    {
        id: 7,
        nombre: "Canastitas",
        precio: 130,
        tipo: "canastitas",
        img: '../../assets/stock/canastitas.jpg'
    },
];

// Declaro las variables
let container = document.getElementById('c9__container');
let buscador = document.getElementById('c9__input');
let btn = document.getElementById('c9__btn');



// Con DOM meto las cards
function crearCards(array) {

    array.forEach(elemento => {
        let tarjeta = document.createElement('div');
        tarjeta.classList.add('c9__card');
        tarjeta.innerHTML = `<div>
                                <img src="${elemento.img}" alt="">
                                <h1>${elemento.nombre}</h1>
                                <p><b><i>$${elemento.precio}</i></b></p>
                            </div>`

        container.appendChild(tarjeta);
    })
}
crearCards(stocks)





// Filtrado de los productos 
function filtrar() {
    container.innerHTML = '';
    let texto = buscador.value.toLowerCase();

    for (const stock of stocks) {
        let nombre = stock.nombre.toLowerCase();
        if (nombre.indexOf(texto) !== -1) {
            container.innerHTML += `<div class="c9__card">
                                        <img src="${stock.img}" alt="">
                                        <h1>${stock.nombre}</h1>
                                        <p><b><i>$${stock.precio}</i></b></p>
                                    </div>`
        }
    }
    if (container.innerHTML === '') {
        container.innerHTML += `<div class="c9__card"><p>Producto no encontrado</p></div>`
    }
}

buscador.addEventListener('keyup', filtrar)