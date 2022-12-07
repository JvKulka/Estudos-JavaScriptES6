// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

let dadosPessoais = {
    nome: 'João',
    sobrenome: 'Kulka',
    idade: 17,
    profissao: 'desenvolvedor front-end',
}

// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome
}


// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

let cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
    latir(pessoa) {
        if (pessoa === 'homem') {
            return 'Latir'
        } else {
            return 'Nada'
        }
    }
}



// nomeie 3 propriedades ou métodos de strings
fixed
length // faz a contagem de caracteres 
slice

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn')
btn.addEventListener
btn.appendChild
btn.innerHTML
btn.id
btn.outerHTML

// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
