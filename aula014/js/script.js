function verificar() {

   var data = new Date()

   var anoAtual = data.getFullYear()

   var anoDeNascimento = document.getElementById('ano-nascimento'); 

   var resposta = document.querySelector('div#resposta');

   if (anoDeNascimento.value.length == 0 || Number(anoDeNascimento.value) > anoAtual){

       window.alert("Erro")

   }else{
       var inputSexo = document.getElementsByName('input-sexo')

       var idade = anoAtual - Number(anoDeNascimento.value)

       var genero = ""

       var imagem = document.createElement('img') 
       imagem.setAttribute('id', 'foto')

       if(inputSexo[0].checked){

           genero = 'Homem'

           if(idade >= 0 && idade <= 10){

               imagem.setAttribute('src', 'img/foto-crianca-masculino.png') 

           }else if(idade < 21){

                imagem.setAttribute('src', 'img/foto-jovem-masculino.png') 

           }else if(idade < 50){

                imagem.setAttribute('src', 'img/foto-adulto-masculino.png') 

           }else {

                imagem.setAttribute('src', 'img/foto-idoso-masculino.png') 
           }

       }else{

           genero = 'Mulher'
           
           if(idade >= 0 && idade <= 10){

                imagem.setAttribute('src', 'img/foto-crianca-feminino.png')

           }else if(idade < 21){

                imagem.setAttribute('src', 'img/foto-jovem-feminino.png')

           }else if(idade < 50){

                imagem.setAttribute('src', 'img/foto-adulto-feminino.png')
                imagem.setAttribute('class', 'adulto-feminino')

           }else {
               
                imagem.setAttribute('src', 'img/foto-idoso-feminino.png')
           }
       }

       resposta.style.textAlign = 'center';

       resposta.innerHTML = `Detectamos ${genero} com ${idade} anos.`

       resposta.appendChild(imagem)

       imagem.style.marginTop = '20px'

   }
}