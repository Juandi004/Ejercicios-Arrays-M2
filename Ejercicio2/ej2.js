'use strict'

// Separar por palabras y mostrar cuantas palabras tiene la siguiente frase

let phrase=`La programación web es fundamental para el progreso`;
let newArray=phrase.split(" ");


alert(newArray.length)

/*En este caso utilizamos el método split para que en base al string, se cree un array, dividiéndolo
en este caso por cada espacio que exista, y un alert que nos mostrará la extensión o número de elementos
del Array que se creó*/