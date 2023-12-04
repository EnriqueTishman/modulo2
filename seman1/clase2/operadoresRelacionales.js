/*

operadores relacionales == , >, <, !=, >=, <=
let a = 5;
let b = '5'; //funciona por que lee el numero 
let c = 5;


console.log(a < 10);
console.log(b > 10);
console.log(a <= 5);
console.log(b >= 5);

operadores relacionales 
console.log(a == b);
console.log(a === c);
console.log(a != b);
console.log(a !== b);

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
 NOT se evalua primero -> false && false || true
 AND tiene mayor jerarquia que OR -> false || true 
AL final evalua los operadores OR -> true

console.log(ejemplo4);
let ejemplo5 = !true && (false || true);

 evalua NOT -> false && true
verifica los parentesis-> !true && true
Evalua AND -> false 

console.log(ejemplo5);
 && true solo una tiene que ser true para que sea true
|| si una sola condicion se cumple es true 


Falsy se va a evaluar como falso 
undefined > if (undefined) console.log(true); else console.log(false); false 
NULL > if (NaN) consle.log(true); else console.log(false); flase
0 > if(0) console.log(ture); else console.log(false); flase 
NaN> if (NaN) console.log(true); else console.log(false); false
the emty string ("") if ("") console.log(true); else console.log(false); false


//Ejemplos de valores Falsy
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(''));

// valores truthy
console.log(Boolean(true));
console.log(Boolean({}));
console.log(Boolean(11)),
console.log(Boolean('0'));
console.log(Boolean('flase'));
console.log(Boolean({nombre: 'truthy'}));



// Declasraciones \\if// else -- usa {} si son varias 

let seRealizoLaCompra = true

if(seRealizoLaCompra){
console.log("tu comprea se hizo de manera exitosa");
}
console.log("Otra operacon");

if(seRealizoLaCompra){
    console.log("tu comprea se hizo exitosa")
}else{
    console.log("Fondos insuficientes, utilice otra metodo de pago");
}
console.log("Otra operacion extra")



let eresMayorDeEdad = true

if(eresMayorDeEdad){
    console.log("Tienes acceso a la pagina");
}else{
    console.log("No tienes la edad suficiente para acceder")
}



let semaforo ="amarillo"

if(semaforo == "verde"){
    console.log("Avanza")
}else if(semaforo == "amarillo"){
    console.log("comienza a frenar");
}else if (semaforo == ("rojo")){
    console.log("Detente");
}

if(semaforo == "verde"){
    console.log("Avanza")
}else if(semaforo == "amarillo"){
    console.log("comienza a frenar");
}else if (semaforo == ("rojo")){
    console.log("Detente");
}

semaforo = "morado"

if(semaforo == "verde"){
    console.log("Avanza")
}else if(semaforo == "amarillo"){
    console.log("comienza a frenar");
}else if (semaforo == ("rojo")){
    console.log("Detente");
}else{
    console.log("el semaforo parpadea en amarillo")
}




let persona = {
    nombre: "Enrique",
    edad: 28,
    localidad: "Norte"
}
if(persona.edad >=18 && persona.localidad == "Norte"){
    console.log("Te puedes vacunar");
}else{
    console.log("Lo sentimos, todavia no te puedes vacunar");
}

*/

// if's anidados
let edad = 28;
let tienesIdentificacion = true
if(edad >= 18){
    if(tienesIdentificacion){
        console.log("Puedes entrar");
    }
}else{
    console.log("Eres menor de edad, no puedes pasar");
}