window.onload = calcular; //inicia cuando cargue la página

function calcular() {
    let Calcular = document.getElementById("Calcular")
    Calcular.addEventListener("click", onCalcular)
}

function onCalcular() {
    let pesoValor = document.getElementById("pesoIngresado").value
    let alturaValor = document.getElementById("alturaIngresada").value/100
    let imc= pesoValor/(alturaValor*alturaValor) //formula = peso/altura^2

    alert("Su altura es: "+alturaValor+" y su peso: "+pesoValor+
    ". Por tanto, su IMC es: "+Math.round((imc+Number.EPSILON)*100)/100)
}


let valor = document.getElementById("valor")
valor.addEventListener('keyup',convertir);

txtResultado=document.getElementById("resultado")

un1= document.getElementById("un1")
un1.addEventListener('change', convertir);
un2= document.getElementById("un2")
un2.addEventListener('change', convertir);

var resultado;

function convertir() {
    numero = valor.value
    numero = parseFloat(numero) //imput a número    
    if(valor.value==' '){
        return;
    }
    else if(un1.value=="Kilogramo"){
    switch (un1.value=="Kilogramo") {
        case un2.value=="Kilogramo":
            resultado = numero*1
            txtResultado.innerHTML = numero+" equivale a "+resultado+" si las unidades son iguales."
            break;
        case un2.value=="Libra":
            resultado = numero*2.204
        txtResultado.innerHTML = numero+" kilogramo/s equivale/n a "+Math.round(resultado)+" libra/s."
            break;
        default:
            txtResultado.innerHTML ="Conversión disponible sólo entre unidades de peso."
            break;
    }}
    else if(un1.value=="Libra"){
    switch (un1.value==="Libra") {
        case un2.value=="Libra":
            resultado = numero*1
            txtResultado.innerHTML = numero+" equivale a "+resultado+" si las unidades son iguales."
            break;
        case un2.value=="Kilogramo":
            resultado = numero/2.204
        txtResultado.innerHTML = numero+" libra/s equivale/n a "+Math.round(resultado)+" kilogramo/s."
            break;
        default:
            txtResultado.innerHTML ="Conversión disponible sólo entre unidades de peso."
            break;
    }}
    else if(un1.value=="Pie"){
    switch (un1.value==="Pie") {
        case un2.value=="Pie":
            resultado = numero*1
            txtResultado.innerHTML = numero+" equivale a "+resultado+" si las unidades son iguales."
            break;
        case un2.value=="Centimetro":
            resultado = numero*30,5
        txtResultado.innerHTML = numero+" pie/s equivale/n a "+Math.round(resultado)+" centimetro/s."
            break;
        default:
            txtResultado.innerHTML ="Conversión disponible sólo entre unidades de longitud."
            break;
    }}
    else if(un1.value=="Centimetro"){
    switch (un1.value==="Centimetro") {
        case un2.value=="Centimetro":
            resultado = numero*1
            txtResultado.innerHTML = numero+" equivale a "+resultado+" si las unidades son iguales."
            break;
        case un2.value=="Pie":
            resultado = numero/30,5
        txtResultado.innerHTML = numero+" centimetro/s equivale/n a "+Math.round(resultado)+" pie/s."
            break;
        default:
            txtResultado.innerHTML ="Conversión disponible sólo entre unidades de longitud."
            break;
    }}
}