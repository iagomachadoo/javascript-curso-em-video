//pegando a hora atual. É necessário usar o new Date() e depois o método getHours
var horaAtual = new Date()
var hora = horaAtual.getHours()
var minuto = horaAtual.getMinutes()
var segundos = horaAtual.getSeconds()

console.log(`Agora são exatamente ${hora}:${minuto}:${segundos} horas.`);



if (hora < 12) {

    console.log('Bom dia');

}else if (hora <= 18) {

    console.log('Boa tarde');

}else{

    console.log('Boa noite');
}