ABA paresArray.js
const numeros =  [1,2,3,4,5,6]
export const pares = []

export function filtrarPares(array) {
     for (let numero of array) {
        if (numero % 2 === 0) {
             pares.push(numero)
             
     }
    }
    return pares
}

ABA app.js


import { filtrarPares, pares } from './paresArray.js';  

const numeros = [80, 34, 27, 13, 2]


filtrarPares(numeros)
console.log("quantidade de numeros pares:", pares)


