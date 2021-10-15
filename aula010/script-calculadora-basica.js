function resultado(){
    var numero1 = Number(document.getElementById('numero1').value);
    var numero2 = Number(document.querySelector('input#numero2').value);
    var operador = document.getElementById('operador').value;
    var divResposta = document.getElementById('resposta')

    if(operador == '+'){
        var soma = numero1 + numero2
        divResposta.innerHTML = `<p>${numero1} ${operador} ${numero2} = ${soma}</p>`     
    } else if(operador == '-'){
        var subtracao = numero1 - numero2
        divResposta.innerHTML = `<p>${numero1} ${operador} ${numero2} = ${subtracao}</p>`
    } else if(operador == '*'){
        var multiplicacao = numero1 * numero2
        divResposta.innerHTML = `<p>${numero1} ${operador} ${numero2} = ${multiplicacao}</p>`
    } else {
        var divisao = numero1 / numero2
        divResposta.innerHTML = `<p>${numero1} ${operador} ${numero2} = ${divisao}</p>`
    }
}

function limpaCampo(){
    document.getElementById('numero1').value = ""
    document.querySelector('input#numero2').value = ""
    document.getElementById('operador').value = ""
    var divResposta = document.getElementById('resposta')
    divResposta.innerHTML = ""
}