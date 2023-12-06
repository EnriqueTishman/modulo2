let persona = {
    nombre: 'Enrique ',
    primerApellido: 'Tishman ',
    segundoApellido: 'Cordero ',
    cliente: true,
    numeroCliente: 11111,  //cinco veces 1
    saldo: 5425,
    nip: 3553,
    cantidadRetiro: 5000
}





if(persona.numeroCliente == '11111' && persona.nip == '3553' ){
    console.log("Bienvenido " + persona.nombre + persona.primerApellido + persona.segundoApellido)
}else{
    alert
    console.log('Lo sentimos, revisa tus datos')
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

