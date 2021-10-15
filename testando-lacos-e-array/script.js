function criar() {
    let divContainer = document.getElementById('container');
    let listaDiv = [];
    let listaLabel = [];
    let listaInput = [];
    for(let i = 1; i <= 5; i++){
        let itemDiv = document.createElement('div');
        itemDiv.setAttribute('class', 'div');
        itemDiv.setAttribute('id', `div${i}`);
        let itemLabel = document.createElement('label');
        itemLabel.setAttribute('class', 'label');
        let itemInput = document.createElement('input');
        itemInput.setAttribute('type', 'number');
        itemInput.setAttribute('class', 'input');
        itemLabel.textContent = `${i}º número:`;
        divContainer.appendChild(itemDiv)
        itemDiv.appendChild(itemLabel);
        itemDiv.appendChild(itemInput);
        listaDiv.push(itemDiv);
        listaLabel.push(itemLabel);
        listaInput.push(itemInput);
        divContainer.style.textAlign = 'center'
        itemDiv.style.margin = '20px auto';
    }
    let itemBtn = document.createElement('input')
    itemBtn.setAttribute('type', 'button');
    itemBtn.setAttribute('value', 'somar');
    itemBtn.setAttribute('id', 'btn-somar');
    itemBtn.setAttribute('onclick', 'somar()');
    divContainer.appendChild(itemBtn); 
}
function somar() {
    let elementoInput = document.getElementsByClassName('input');
    let listaValorInput = [];
    for(let j = 0; j < elementoInput.length; j++ ){
        let valorInput = Number(elementoInput[j].value);
        listaValorInput.push(valorInput);
    }
    let soma = listaValorInput[0] + listaValorInput[1] + listaValorInput[2] + listaValorInput[3] + listaValorInput[4];
    console.log(soma); 
}