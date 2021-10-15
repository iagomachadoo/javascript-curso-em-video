let numeroAdicionado = document.getElementById('numero-adicionado');

let elementoSelect = document.getElementById('resultado');

let elementoDivResultado = document.querySelector('#resultado-final');

let listaNumeroAdicionado = [];

function verificarNumero(numero) {//função para verificar se o valor adicionado é um número

    if (Number(numero) >= 1 && Number(numero) <= 100) {
        return true
    }else{
        return false
    }
}

function verificarLista(numero, lista) {//função para verificar se o valor adicionado já existe ou não dentro da lista

    if (lista.indexOf(Number(numero)) != -1) {//se o número adicionado na lista não tiver sido adicionado anteriormente, retornar true 
        return true
    }else{
        return false
    }
}

function adicionar() {
    if (verificarNumero(numeroAdicionado.value) && !verificarLista(numeroAdicionado.value, listaNumeroAdicionado)) {//verificar se o valor adicionado é um número e adicionado esse valor dentro da lista caso ele já não tenha sido adicionado 

        listaNumeroAdicionado.push(Number(numeroAdicionado.value));

        let elementoOption = document.createElement('option');

        elementoOption.textContent = `Número adicionado: ${numeroAdicionado.value}`;

        elementoSelect.appendChild(elementoOption);

        elementoDivResultado.innerHTML = '';//limpando o resultao quando um número for adicionado depois de ter clicado em finalizar

    }else{
        window.alert('Valor inválido ou já existe dentro da lista')
    }//se o valor adicionado não for um número ou já existir dentro da lista, será exibido uma mensagem de erro

    numeroAdicionado.value = '';//está limpando o campo depois que o um número é adicionado, mesmo que o valor seja inválido

    numeroAdicionado.focus();//está dando foco ao campo de adição de números, para que não seja preciso clicar no campo toda vez que for adiconar um númro 
}

function finalizar() {
    if (listaNumeroAdicionado.length == 0) {
        window.alert('Adicione valores antes de finalizar.');
    }else{
        let totalValoresLista = listaNumeroAdicionado.length;//comprimento da array

        let maior = listaNumeroAdicionado[0];//iniciando o maior valor com a posição zero dentro da array 

        let menor = listaNumeroAdicionado[0];//iniciando o menor valor com a posição zero dentro da array

        let soma = 0;

        let media = 0;

        for(let posicao in listaNumeroAdicionado){

            soma += listaNumeroAdicionado[posicao];//somando todos os valores da array

            if(listaNumeroAdicionado[posicao] > maior)
                maior = listaNumeroAdicionado[posicao];

            if(listaNumeroAdicionado[posicao] < menor)
                menor = listaNumeroAdicionado[posicao];
        }
        
        media = soma / totalValoresLista;

        elementoDivResultado.innerHTML = '';

        elementoDivResultado.innerHTML += `<p>O total de números cadastrados é ${totalValoresLista}</p>`;

        elementoDivResultado.innerHTML += `<p>O maior valor cadastrado foi ${maior}</p>`;

        elementoDivResultado.innerHTML += `<p>O menor valor cadastrado foi ${menor}</p>`;

        elementoDivResultado.innerHTML += `<p>A soma de todos os números cadastrados é ${soma}</p>`;

        elementoDivResultado.innerHTML += `<p>A média de todos os números cadastrados é ${media.toFixed(2)}</p>`;
    }
}