let inputNumeroAdicionado = document.querySelector('input#numero-adicionado');
let selectMostrarNumeroAdicionado = document.querySelector('select#motrar-numero-adicionado');
let divResultado = document.querySelector('div#resultado');
let listaNumeroAdicionado = [];

function adicionar() {
    if (Number(inputNumeroAdicionado.value) >= 1 && Number(inputNumeroAdicionado.value) <= 100 && listaNumeroAdicionado.indexOf(Number(inputNumeroAdicionado.value)) == -1) {
        let elementoOption = document.createElement('option');
        elementoOption.textContent = `Número adicionado: ${Number(inputNumeroAdicionado.value)}`;
        selectMostrarNumeroAdicionado.appendChild(elementoOption);
        listaNumeroAdicionado.push(Number(inputNumeroAdicionado.value));
        console.log(listaNumeroAdicionado);
    }else if(listaNumeroAdicionado.indexOf(Number(inputNumeroAdicionado.value)) != -1){
        window.alert('O número já foi adicionado');
    }else{
        window.alert('Valor inválido');
    }
}

function finalizar() {
    
}