const base = ["harina", "sal", "agua", "levadura"]

const pizzas = [
    napolitana = {
        id: 1,
        nombre: "Napolitana",
        ingredientes: base + ["salsa", "muzzarella", "tomate", "oregano"],
        precio: 250
    },

    muzzarella = {
        id: 2,
        nombre: "Muzzarella",
        ingredientes: base + ["salsa", "mozzarella", "oregano", "aceitunas"],
        precio: 150
    },
    
    calabresa = {
        id: 3,
        nombre: "Calabresa",
        ingredientes: base + ["salsa", "muzzarella", "oregano", "salame"],
        precio: 350 
    },

    cuatro_quesos = {
        id: 4,
        nombre: "Cuatro Quesos",
        ingredientes: base + ["salsa", "muzzarella", "oregano", "aceitunas", "roquefort", "parmesano", "fontina"],
        precio: 600
    },

    jamon_y_morron = {
     id: 5,
     nombre: "Jamón y Morrones",
     ingredientes: base + ["salsa", "muzzarella", "oregano", "aceitunas", "jamón", "morrón"],
     precio: 400
    },

    fugazzetta = {
     id: 6,
     nombre: "Fugazzetta",
     ingredientes: base + ["salsa", "muzzarella", "oregano", "aceitunas", "cebolla"],
     precio: 300
    }
]

const titulo_h2 = document.getElementById("titulo_h2")
const titulo_h4 = document.getElementById("titulo_h4")
const input = document.getElementById("input")

document.getElementById("boton").addEventListener("click", renderizar_input(), false)

function renderizar_input() {
    // TODO
}