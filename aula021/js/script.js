let numeroAdicionado = document.getElementById('numero-adicionado');

let elementoSelect = document.getElementById('resultado');

let elementoDivResultado = document.querySelector('#resultado');

let listaNumeroAdicionado = [];

function verificarNumero(numero) {//função para verificar se o valor adicionado é um número

    if (Number(numero) >= 1 && Number(numero) <= 100) {
        console.log(numero);
        return true
        
    }else{
        console.log(numero);
        return false
    }
    
}

function verificarLista(numero, lista) {//função para verificar se o valor adicionado já existe ou não dentro da lista

    if (lista.indexOf(Number(numero)) != -1) {//se o número adicionado na lista não tiver sido adicionado anteriormente, retornar true 
        console.log(numero);
        console.log(lista);
        return true

    }else{
        console.log(numero);
        console.log(lista);
        return false
    }
}

function adicionar() {
    if (verificarNumero(numeroAdicionado.value) && verificarLista(numeroAdicionado.value, listaNumeroAdicionado)) {//verificar se o valor adicionado é um número e adicionado esse valor dentro da lista caso ele já não tenha sido adicionado 
        console.log(numeroAdicionado.value);
        console.log(listaNumeroAdicionado);
        window.alert('Tudo Ok!')

    }else{
        console.log(numeroAdicionado.value);
        console.log(listaNumeroAdicionado);
        window.alert('Valor inválido ou já existe dentro da lista')

    }//se o valor adicionado não for um número ou já existir dentro da lista, será exibido uma mensagem de erro
}