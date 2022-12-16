// Toda função é criada com o construtor Function e por isso herda as suas propriedades e métodos.
function areaQuadrado(lado) {
    return lado * lado;
}

const perimetroQuadrado = new Function('lado', 'return lado * 4');


//Function.length retorna o total de argumentos da função. 
//Function.name retorna uma string com o nome da função.
function somar(n1, n2) {
    return n1 + n2;
}

somar.length; // 2
somar.name; // 'somar'


//function.call(this, arg1, arg2, ...) executa a função, sendo possível passarmos uma nova referência ao this da mesma.
const carro = {
    marca: 'Ford',
    ano: 2018
}

function descricaoCarro() {
    console.log(this.marca + ' ' + this.ano);
}

descricaoCarro() // undefined undefined
descricaoCarro.call() // undefined undefined
descricaoCarro.call(carro) // Ford 2018


//O valor de this faz referência ao objeto criado durante a construção do objeto (Constructor Function).
//Podemos trocar a referência do método ao this, utilizando o call().
const carros = ['Ford', 'Fiat', 'VW'];

carros.forEach((item) => {
    console.log(item);
}); // Log de cada Carro

carros.forEach.call(carros, (item) => {
    console.log(item);
}); // Log de cada Carro

const frutas = ['Banana', 'Pêra', 'Uva'];

carros.forEach.call(frutas, (item) => {
    console.log(item);
}); // Log de cada Fruta


//O objeto atribuído a lista será o substituído pelo primeiro argumento de call()
function Dom(seletor) {
    this.element = document.querySelector(seletor);
};

Dom.prototype.ativo = function (classe) {
    this.element.classList.add(classe);
};

const lista = new Dom('ul');
lista.ativo('ativar');
console.log(lista);
