let frutas =['Pera', 'Manzana', 'Platano', 'Sandia', 'Melon'];
console.log(frutas);

//imprime el primer elemento
console.log(frutas[0])

//Imprime el ultimo elemento
console.log(frutas[frutas.length -1]);

//Agrega un elemento ak final del arreglo
frutas.push('Guayaba');
console.log(frutas.length);

//Elimina un elemento al final del arreglo
frutas.pop();
console.log(frutas.length);

//Agrega un elemento al inicio del arreglo
frutas.unshift('Durazano');
console.log(frutas.length)

//Elimina un elemento al inicio del arreglo
frutas.shift();
console.log(frutas.length)

let alumnos = 'Enrique, Claudio, David, Fernanda'; //No elimina espacioas 

let alumnosArreglo = alumnos.split(',') //
 console.log(alumnosArreglo);

 //let copiDeFrutas = [...frutas]; //Copia el arreglo frutas en copiaFrutas

 console.log('Arreglo original: ' + frutas);
 
 //Slice creo una copia de un arreglo desde el inicio hasta el valor final -1
 //let copiaFrutas = frutas.slice(2, 4);
 let copiaFrutas = frutas.slice(2);
 console.log(copiaFrutas);

 //Splice el valor va de 0 a el final

 console.log('Arreglo original: ' + frutas);

 let copiaFrutas2 = [...frutas]

 copiaFrutas2.splice(3, 0, 'Aguacate', 'Uva')
 console.log('Arreglo con agregadas:' + copiaFrutas2);

 console.log('Arreglo original: ' + frutas);

 //splice para eliminar -- elimina por valores desde 0 al final 
 let copiaFrutas3 = [...frutas]

copiaFrutas3.splice(1,2);
 console.log(copiaFrutas3);

