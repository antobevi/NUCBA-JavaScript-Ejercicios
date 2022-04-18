/*

1. Crear el array de objetos "Pizzas".
- Debemos crear 6 objetos como mínimo.
- Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) 
  y precio. (Ingredientes debe ser una lista). 

*/

const base = ["harina", "sal", "agua", "levadura"]

const napolitana = {
    id: 1,
    nombre: "Napolitana",
    ingredientes: base + ["salsa", "muzzarella", "tomate", "oregano"],
    precio: 250
}

const muzzarella = {
    id: 2,
    nombre: "Muzzarella",
    ingredientes: base + ["salsa", "mozzarella", "oregano", "aceitunas"],
    precio: 150
}

const calabresa = {
    id: 3,
    nombre: "Calabresa",
    ingredientes: base + ["salsa", "muzzarella", "oregano", "salame"],
    precio: 350
}

const cuatroQuesos = {
    id: 4,
    nombre: "Cuatro Quesos",
    ingredientes: base + ["salsa", "muzzarella", "oregano", "aceitunas", "roquefort", "parmesano", "fontina"],
    precio: 600
}

const jamonYmorron = {
    id: 5,
    nombre: "Jamón y Morrones",
    ingredientes: base + ["salsa", "muzzarella", "oregano", "aceitunas", "jamón", "morrón"],
    precio: 400
}

const fugazzetta = {
    id: 6,
    nombre: "Fugazzetta",
    ingredientes: base + ["salsa", "muzzarella", "oregano", "aceitunas", "cebolla"],
    precio: 300
}

const pizzas = [napolitana, muzzarella, calabresa, cuatroQuesos, jamonYmorron, fugazzetta];

/*

2. Crear una iteración del array que imprima en consola:
a) Las pizzas que tengan un id impar.
b) ¿Hay alguna pizza que valga menos de $600?
c) Los nombres de todos las pizzas.
d) Los precios de las pizzas.
e) El nombre de cada pizza con su respectivo precio.

Cada respuesta debe ser, como siempre, usuario friendly. 
Si (como en el punto B), la respuesta es un booleano, no imprimir el booleano. 
Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 

*/

function pizzasConIdImpar() {
    return pizzas.filter(pizza => pizza.id % 2 !== 0);
}

function pizzasBaratas() {
    return pizzas.filter(pizza => pizza.precio < 600);
}

// c) Los nombres de todos las pizzas.
console.log("Tenemos las siguientes pizzas:");

for(const pizza of pizzas) {
    console.log('- ' + pizza.nombre)
}

// a) Las pizzas que tengan un id impar.
console.log('Las pizzas que tienen un id impar son: ');

for(const pizza of pizzasConIdImpar()) {
    console.log('- Nombre: ' + pizza.nombre + ', ID: ' + pizza.id)
}

// b) ¿Hay alguna pizza que valga menos de $600?
console.log('Pizzas cuyo precio es menor a $600:')

if (pizzasBaratas() !== []) {
    for(const pizza of pizzasBaratas()) {
        console.log('- Nombre: ' + pizza.nombre + ', Precio: $' + pizza.precio)
    }   
} else {
    console.log('No hay pizzas con un precio menor a $600 por el momento.')
}

// d) Los precios de las pizzas.
console.log('Los precios de todas nuestras pizzas son:')

for(const pizza of pizzas) {
    console.log('- $' + pizza.precio)
}

// e) El nombre de cada pizza con su respectivo precio.
console.log('El nombre y el precio de cada una de nuestras pizzas son:')

for(const pizza of pizzas) {
    console.log('- Nombre: ' + pizza.nombre + ', Precio: $' + pizza.precio)
}

// OTRA FORMA DE TENER 6 OBJETOS PIZZA (utilizando clases)
/*

class Pizza {
    id = 0,
    nombre,
    ingredientes,
    precio

    constructor(nombre, ingredientes, precio) {
        this.id++;
        this.nombre = nombre;
        this.ingredientes = base + ingredientes;
        this.precio = precio;

        pizzas.add(this)
    }
}

const napolitana = new Pizza("Napolitana", 
    ["salsa", "mozzarella", "oregano", "aceitunas"], 150)

const muzzarella = new Pizza("Muzzarella", 
    ["salsa", "mozzarella", "oregano", "aceitunas"], 150)

const calabresa = new Pizza("Calabresa",
    ["salsa", "muzzarella", "oregano", "salame"], 350)

const cuatroQuesos = new Pizza("Cuatro Quesos",
    ["salsa", "muzzarella", "oregano", "aceitunas", "roquefort", "parmesano", "fontina"],
    600)

const jamonYmorron = new Pizza("Jamón y Morrones",
    ["salsa", "muzzarella", "oregano", "aceitunas", "jamón", "morrón"],
    400)

const fugazzetta = new Pizza("Fugazzetta",
    ["salsa", "muzzarella", "oregano", "aceitunas", "cebolla"], 300)
*/