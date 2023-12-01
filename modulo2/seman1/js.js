let persona = {
    Embarazo: "si",
    semanas:15,
    edad : 28,
    locadidad: "Sur",
    nacimiento: 1995,
}

if(persona.edad >= 18 && persona.locadidad == "Norte"){
    console.log("Te puedes vacunar");
}else{
    console.log("Lo sentimos. No te puedes vacunar.");
}
if(persona.Embarazo == "si" && persona.semanas >= 9){
    console.log("Te puedes vacunar");
}else{
    console.log("Lo sentimos. No te puedes vacunar. ");
}
if(persona.nacimiento <=1993){
    console.log("Te puedes vacunar");
}else{
    console.log("Lo sentimos.No te puedes vacunar. ");
}
