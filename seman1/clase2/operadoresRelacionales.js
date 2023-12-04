//operadores relacionales == , >, <, !=, >=, <=
//let a = 5;
//let b = '5'; //funciona por que lee el numero 
//let c = 5;


//console.log(a < 10);
//console.log(b > 10);
//console.log(a <= 5);
//console.log(b >= 5);

//operadores relacionales 
//console.log(a == b);
//console.log(a === c);
//console.log(a != b);
//console.log(a !== b);

let a = true;
let b = false;
let c = 5 < 10; // true

console.log(a && b); 
console.log(a && c);
console.log (a || b);
console.log(!a)
console.log(!b);

//----- Cuando usamos el mismo operador para verificar varias condiciones 
// la evaluacion se hace de izquierda a derecha
let ejemplo1 = (5 > 3) && (8 < 10);
let ejmplo2 = (5 > 3) && (8 == 8) && (10 <= 1);
let ejmplo3 = (10 <= 1) && (8 == 8) && (5 > 3); // solo evalua lo prime y el resultado 

// ---Jerarquia de operadores---
let ejemplo4 = !true && false || true;
// NOT se evalua primero -> false && false || true
// AND tiene mayor jerarquia que OR -> false || true 
// AL final evalua los operadores OR -> true
console.log(ejemplo4);
let ejemplo5 = !true && (false || true);
// evalua NOT -> false && true
// verifica los parentesis-> !true && true
//Evalua AND -> false 
console.log(ejemplo5);