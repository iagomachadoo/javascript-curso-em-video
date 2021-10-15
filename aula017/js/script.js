function contar() {
    let inicioDaContagem = Number(document.querySelector('input#inicio').value)
    
    let fimDaContagem = Number(document.querySelector('input#fim').value)
    
    let passoDaContagem = Number(document.querySelector('input#passo').value)
    
    let divResposta = document.querySelector('div#resposta');
    
    if(inicioDaContagem == 0 || fimDaContagem == 0){

        divResposta.innerHTML = `<p>Impossível contar</p>`

    }else if(passoDaContagem == 0 && inicioDaContagem < fimDaContagem){

        window.alert('Passo inválido. Considerando PASSO 1')

        divResposta.innerHTML = '<p>Contando</p> '

        for(let i = inicioDaContagem; i <= fimDaContagem; i++){
            divResposta.innerHTML += `${i} \u{1F449} `
        }

    }else if(passoDaContagem == 0 && inicioDaContagem > fimDaContagem){

        window.alert('Passo inválido. Considerando PASSO 1')

        divResposta.innerHTML = '<p>Contando</p> '

        for(let i = inicioDaContagem; i >= fimDaContagem; i--){
            divResposta.innerHTML += `${i} \u{1F449} `
        }
        
    }else if (inicioDaContagem < fimDaContagem){

        divResposta.innerHTML = '<p>Contando</p> '

        for(let i = inicioDaContagem; i <= fimDaContagem; i += passoDaContagem)
        {
            divResposta.innerHTML += `${i} \u{1F449} `
        }

    }else if (inicioDaContagem > fimDaContagem){

        divResposta.innerHTML = '<p>Contando</p> '

        for(let i = inicioDaContagem; i >= fimDaContagem; i -= passoDaContagem){
            divResposta.innerHTML += `${i} \u{1F449} `
        }
        
    }
    divResposta.innerHTML += `\u{1F3C1}`
}