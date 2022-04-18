// Crear un array con, al menos, 10 ingredientes para hacer pizzas
// (puede ser tanto masa como los ingredientes que van sobre la base).
const ingredientesPizza = ['harina', 'sal', 'aceite', 'agua', 
                            'levadura', 'salsa de tomate', 'queso']
const pares = [];
const impares = [];

// Funciones auxiliares
function tieneCantParDeLetras(nombre) {
    return nombre.length % 2 == 0;
}

/*
Iterar ese array para lograr que, los ingredientes que tengan una cantidad par de 
letras, vayan a un array llamado "pares". 
Hacer lo mismo con los impares, enviándolos al array "impares". 
*/
function separarIngredientes(ingredientes, pares, impares) {
    let i = 0;

    while(i < ingredientes.length) {
        if(tieneCantParDeLetras(ingredientes[i])) {
            pares.push(ingredientes[i]);
        } else {
            impares.push(ingredientes[i]);
        }

        i++;
    }

    return '';
}

// Funcion principal
// Crear una función que acepte ese array (ingredientesPizza) como parámetro.
function getIngredientesParesEImpares(ingredientes) {
    separarIngredientes(ingredientes, pares, impares);

    // Imprimir en consola:  "Los ingredientes pares son: (ingredientes en array pares). 
    // Los ingredientes impares son: (ingredientes en array impares)."
    console.log('Los ingredientes pares son:'); // Harina, aceite, levadura, agua
    for(let i = 0; i < pares.length; i++) {
        console.log(pares[i]);
    }

    console.log('Los ingredientes impares son:'); // Sal, salsa de tomate, queso
    for(let j = 0; j < impares.length; j++) { 
        console.log(impares[j]);
    }

}

// Llamo a la funcion
getIngredientesParesEImpares(ingredientesPizza);