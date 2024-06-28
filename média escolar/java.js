let input_um = document.getElementById('inputUM')
let input_dois = document.getElementById('inputDois')
let input_tres = document.getElementById('inputTres')

function media_button(){
    alert((Number(input_um.value) + Number(input_dois.value) + Number(input_tres.value)) / 3)
}