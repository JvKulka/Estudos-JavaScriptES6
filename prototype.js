function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.andar = function () {
    return this.nome + ' andou'
}

Pessoa.prototype.nadar = function () {
    return this.nome + ' nadou'
}

const andre = new Pessoa('Andre', 28)

// console.log(Pessoa.prototype) // retorna o objeto
// console.log(andre.prototype) // retorna undefined, pois o prototype se aplica apenas para as functions

//---------------------------------------------------------------------------------------------------------//

//Objetos, Funções, Números, Strings e outros tipos de dados são criados utilizando
//construtores. Esses construtores possuem um protótipo com propriedades e
//métodos, que poderão ser acessadas pelo tipo de dado.

const pais = 'Brasil'
const cidade = new String('Rio')

String.prototype

// Uso direto de funções do protótipo do construtor Array.

const listaAnimais = ['Cachorro', 'Gato', 'Cavalo']

const lista = document.querySelectorAll('li');

// Transforma em uma array
const listaArray = Array.prototype.slice.call(lista); // linkado com o prototipo
const listaArray2 = Array.from(lista); // linkado diretamente com o array


//Os métodos e propriedades acessado com o . são referentes ao tipo de dados que é retornado antes desse .
const Carro = {
    marca: 'Ford',
    preco: 2000,
    andar() {
        return true;
    }
}


//----------------------------------------EXERCICIOS-----------------------------------------------------//



// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoas(nome, sobrenome, idade) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
}

Pessoas.prototype.nomeCompleto = function () {
    return this.nome + this.sobrenome
}

const joao = new Pessoas('João', ' Kulka', 17)

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; // HTMLLIElement
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // Function

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
