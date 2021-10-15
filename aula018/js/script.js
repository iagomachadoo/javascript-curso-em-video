function gerarTabuada() {
    let multiplicador = document.getElementById('multiplicador');
    
    let elementoSelectResultado = document.getElementById('resultado');

    if (multiplicador.value != '') {

        elementoSelectResultado.innerHTML = ''//zerando o resultado

        for(let i = 0; i <= 10; i ++ ){
            
            let novoItem = document.createElement('option')//criando o elemento <option>

            novoItem.text = `${i} x ${Number(multiplicador.value)} = ${i * Number(multiplicador.value)}`//adicionando conteúdo dentro do elemento <option> 

            novoItem.setAttribute('value', `${i}`)//adicionando atributos ao elemento filho option

            elementoSelectResultado.appendChild(novoItem)//adicionando os filhos dentro do pai. Pai é o elemento <select> eos filhos são os elementos <option>
            
        } 
    }else{

        window.alert('Por Favor! Insira um número')

    }
}