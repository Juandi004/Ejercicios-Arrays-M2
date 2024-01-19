'use strict'

//. En base al resultado del ejercicio anterior agrupar en un array únicamente las
// palabras que tengan mas de 3 letras.


let phrase=`La programación web es fundamental para el programador`;
let newArray=phrase.split(" ");


let filteredArray=newArray.filter(word=>word.length>3);
alert(filteredArray);

/*En este caso utilizamos el mismo método que el anterior ejercicio, para proceder a itilizar el método
filter, el cual nos devolverá un resultado con las condiciones que requerramos, en este caso queremos
filtrar las palabras que tengan más de 3 letras, así que nos devolverá solo aquellas palabras"*/