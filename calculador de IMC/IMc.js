let Peso = document.getElementById('Peso')
let Altura = document.getElementById('Altura')
let enviar = document.getElementById('enviar')
let IMC = document.getElementById('IMC')

let Resultado = document.getElementById('Resultado')

enviar.addEventListener("click", function () {
    IMC.value = (Number(Peso.value)/((Number(Altura.value))*(Number(Altura.value))))

    if (IMC.value <= 18){
        Resultado.value = ("Magreza")
    }
    else if(IMC.value > 18 && IMC.value < 25){
        Resultado.value = ("Normal")
    }
    else{
        Resultado.value = ("Sobrebeso")
    }
})