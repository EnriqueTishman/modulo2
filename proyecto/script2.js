
let persona = {
    nombre: 'Enrique ',
    primerApellido: 'Tishman ',
    segundoApellido: 'Cordero ',
    cliente: true,
    numeroCliente: 11111,  //cinco veces 1
    saldo: 850,
    nip: 3553,
    cantidadRetiro: 200,
    deposito: 300


}



if(persona.numeroCliente == '11111' && persona.nip == '3553' ){
    console.log("Bienvenido " + persona.nombre + persona.primerApellido + persona.segundoApellido)
}else{
    
    console.log('Lo sentimos, revisa tus datos')
    alert ('Lo sentimoz, rivisa tus datos')
}

if(persona.saldo >= persona.cantidadRetiro){
   console.log('RETIRO EXITOSO POR $' + persona.cantidadRetiro)
}else{
    console.log('FONDOS INSUFICEINTES')
}



function resta(num1,num2 ){
    console.log (persona.saldo, - persona.cantidadRetiro)
}
resta(persona.saldo - persona.cantidadRetiro)


console.log('Saldo actual en la cuenta $' + (persona.saldo-persona.cantidadRetiro));

function suma(num1,numb2){
    console.log('Saldo actual de la cuneta $ ' + (persona.saldo + persona.deposito));
}
suma(persona.saldo + persona.deposito)

let display = document.getElementById('display');

  function agregarNumero(numero) {
    display.value += numero;
  }

  function limpiarDisplay() {
    display.value = '';
  }

  function ingrsaNumeroCliente(input) {
   let valor = input.value;
   
    
   if (imput.value != persona.numeroCliente) {
      alert("Numero de clientee no valido ");
      input.value = valor.substring(0, valor.length - 1);
   }
  }
  
  function addToDisplay(value) {
    document.getElementById('display').value += value;
  }

  function clearDisplay() {
    document.getElementById('display').value = '';
  }

  