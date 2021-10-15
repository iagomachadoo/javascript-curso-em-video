function carregar(){
    var mensagem = document.getElementById('mensagem');

    var imagem = document.getElementById('imagem');

    var data = new Date()

    var hora = data.getHours() 

    mensagem.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {

        //.src serve para carregar uma imagem via js
        mensagem.innerHTML = `Agora são ${hora} horas. Bom dia!`

        imagem.src = `img/foto-amanhecer.png`

        document.body.style.background = '#ffda49'   

    }else if (hora >= 12 && hora < 18) {

        mensagem.innerHTML = `Agora são ${hora} horas. Boa tarde!`

        imagem.src = `img/foto-entardecer.png`

        imagem.alt= `alt='foto do entardecer`

        document.body.style.background = '#a62101'

    }else{
        
        mensagem.innerHTML = `Agora são ${hora} horas. Boa noite!`

        imagem.src = 'img/foto-noite.png'

        imagem.alt= `alt='foto do anoitecer`
        
        document.body.style.background = '#132c36'
    }
}
