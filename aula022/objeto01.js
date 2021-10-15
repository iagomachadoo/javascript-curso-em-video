let amigo = {
    nome:'José', 
    idade:32, 
    cidade:'São Paulo',
    peso: 82.5,
    engordar(p=0){
        this.peso += p
    }
}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`);