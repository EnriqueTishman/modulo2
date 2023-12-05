let persona = {
    nombre: "Patricia",
    edad: 28,
    localidad: "Norte",
    embarazada:  true,
    semanas: 12
}
if(persona.edad >=18 && persona.localidad == "Norte" && persona.embarazada == true && persona.semanas>=9){
    console.log("Te puedes vacunar");
}else{
    console.log("Lo sentimos, todavia no te puedes vacunar");
}

let persona1 = {
    nombre: "Pedro",
    edad: 29,
    localidad: "sur",
    añoDeNacimiento: 1993,

}
if (persona1.añoDeNacimiento <= 1993 && persona1.localidad == "sur"){
    console.log("Te puedes vacunar");
}else{
    console.log("Lo sentimos, todavia no te puedes vacunar")
}


