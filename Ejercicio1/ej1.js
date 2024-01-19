'use strict'

//Ingresar un nombre con promp y verificar si el nombre ingresado se encuentra en el vector
//Mostrar en un alert: "Si se encuentra" o "No se encuentra"

let students=["Juan", "Jose", "Pedro", "Mario", "Alejandra"];
let newName=prompt("Ingrese su nombre");
if(students.find(students=>students===newName)){
    alert("Si se encuentra el nombre: "+ newName);
}else{
    alert("No se encuentra el nuevo nombre ");
}

/*En este caso utilizamos el método find, para poder identificar si existe un prompt en el Array, y un if,
para que, en caso de ser verdadero, nos devueva "Sí se encuentra", y, si es falso, nos devolverá 
"No se encuentra"*/