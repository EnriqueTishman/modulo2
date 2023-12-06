let array = [];
for(let i = 0; i < 10; i++){
    array.push(Math.floor(Math.random() * 100) + 1);
}
console.log(array);

let str = prompt("Ingrese un string con varias palabras separadas por coma");
let arr = str.split(',').map(Number);
console.log(arr);

let arra = [10,40,30,20,15,5];
arr.sort(function(a, b){
    return a - b;
});
console.log("Arreglo ordenado de menor a mayor:", arra);
console.log("Número menor:", Math.min(...arra));
console.log("Número mayor:", Math.max(...arra));