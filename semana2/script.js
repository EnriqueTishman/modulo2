function imprimeNumeros() {
 console.log("1")
 console.log("2")
 console.log("3")   
}

// mando a llamar mi funcion
imprimeNumeros() // se puede llamar cuantas veces quieras 


// funciones con parametros
function sumaConsole(num1, num2) {
    console.log(num1 + num2)

    
}

sumaConsole(5,58)
sumaConsole(74,34)

// solo se puede poner return dentro de una funcion 
function sumaReturn(num1, num2) {
    return num1 + num2
    
}

sumaConsole(8,4)
console.log(sumaConsole(7,8)) // no se hace 
console.log(sumaConsole(5,8) +1) // nan por que no tiene return
console.log(sumaReturn(5,8) +1)

// orden de los parametros
function saludar(nombre, primerApellido) {
    console.log("hola, soy " + nombre +" " +primerApellido)
    
}
saludar("Enrique", "Tishman ") 

//Funcion anidada "asi no se ocupa en la actualidad" 

function resta(num1, num2) {
    return num1 - num2
}
console.log(operacionMatematica(7, 14, resta))


