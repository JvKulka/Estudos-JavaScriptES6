//Todo objeto é criado com o construtor Object e por isso herda as propriedades e métodos do seu prototype.

const carro = {
    marca: 'Ford',
    ano: 2018,
}

const pessoa = new Object({
    nome: 'André',
    idade: 28,
})



//Object.create(obj, defineProperties) retorna um novo objeto que terá como protótipo o objeto do primeiro argumento.

const carro2 = {
    rodas: 4,
    init(marca) {
        this.marca = marca;
        return this;
    },
    acelerar() {
        return `${this.marca} acelerou as ${this.rodas} rodas`;
    },
    buzinar() {
        return this.marca + ' buzinou';
    }
}

const honda = Object.create(carro2);
honda.init('Honda').acelerar();


//Object.assign(alvo, obj1, obj2) adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos. 
//O assign irá modificar o objeto alvo.

const funcaoAutomovel = {
    acelerar() {
        return 'acelerou';
    },
    buzinar() {
        return 'buzinou';
    },
}

const moto = {
    rodas: 2,
    capacete: true,
}

const carro3 = {
    rodas: 4,
    mala: true,
}

Object.assign(moto, funcaoAutomovel);
Object.assign(carro3, funcaoAutomovel);


//Object.defineProperties(alvo, propriedades) adiciona ao alvo novas propriedades
//A diferença aqui é a possibilidade de serem definidas as características dessas propriedades.

const moto2 = {}
Object.defineProperties(moto, {
    rodas: {
        value: 2,
        configurable: false, // impede deletar e mudança de valor
        enumarable: true, // torna enumerável
    },
    capacete: {
        value: true,
        configurable: true,
        writable: false, // impede mudança de valor
    },
})

moto2.rodas = 4;
delete moto2.capacete;
moto2;
// {rodas: 2}


//É possível definirmos diferentes comportamentos para get e set de uma propriedade.
//Lembrando que ao acionarmos uma propriedade obj.propriedade, a função get é ativada e ao setarmos ob.propriedade = 'Valor' a função de set é ativada.

const moto3 = {}
Object.defineProperties(moto3, {
    velocidade: {
        get() {
            return this._velocidade;
        },
        set(valor) {
            this._velocidade = 'Velocidade ' + valor;
        }
    },
})

moto3.velocidade = 200;
moto3.velocidade;
// Velocidade 200


//Lista todos os métodos e propriedades de um objeto, com as suas devidas configurações.
Object.getOwnPropertyDescriptors(Array);
// Lista com métodos e propriedades e Array

Object.getOwnPropertyDescriptors(Array.prototype);
// Lista com métodos e propriedades do protótipo de Array

Object.getOwnPropertyDescriptor(window, 'innerHeight');
// Puxa de uma única propriedade


//Object.keys(obj) retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto.
//Object.values(obj) retorna uma array com os valores do objeto.
//Object.entries(obj) retorna uma array com array's contendo a chave e o valor.

Object.keys(Array);
// [] vazia, pois não possui propriedades enumeráveis

const carro4 = {
    marca: 'Ford',
    ano: 2018,
}
Object.keys(carro4);
// ['marca', 'ano']
Object.values(carro4);
// ['Ford', 2018]
Object.entries(carro4);
// [['marca', 'Ford'], ['ano', 2018]]


//Retorna uma array com todas as propriedades diretas do objeto (não retorna as do protótipo).

Object.getOwnPropertyNames(Array);
// ['length', 'name', 'prototype', 'isArray', 'from', 'of']

Object.getOwnPropertyNames(Array.prototype);
// [..., 'filter', 'map', 'every', 'some', 'reduce', ...]

const carro5 = {
    marca: 'Ford',
    ano: 2018,
}
Object.getOwnPropertyNames(carro5);
// ['marca', 'ano']


//Object.getPrototypeOf(), retorna o protótipo do objeto. 
//Object.is(obj1, obj2) verifica se os objetos são iguais e retorna true ou false.

const frutas = ['Banana', 'Pêra']
Object.getPrototypeOf(frutas);
Object.getPrototypeOf(''); // String

const frutas1 = ['Banana', 'Pêra'];
const frutas2 = ['Banana', 'Pêra'];

Object.is(frutas1, frutas2); // false


//Object.freeze() impede qualquer mudança nas propriedades.
//Object.seal() previne a adição de novas propriedades e impede que as atuais sejam deletadas.
//Object.preventExtensions() previne a adição de novas propriedades.

const carro6 = {
    marca: 'Ford',
    ano: 2018,
}
Object.freeze(carro6);
Object.seal(carro6);
Object.preventExtensions(carro6);

Object.isFrozen(carro6); // true
Object.isSealed(carro6); // true
Object.isExtensible(carro6); // true


//Já que tudo em JavaScript é objeto, as propriedades abaixo estão disponíveis em todos os objetos criados a partir de funções construtoras. 
//{}.constructor retorna a função construtora do objeto.

const frutas3 = ['Banana', 'Uva'];
frutas3.constructor; // Array

const frase = 'Isso é uma String';
frase.constructor; // String


//{}.HASOWNPROPERTY('PROP') E {}.PROPERTYISENUMERABLE('PROP')
//Verifica se possui a propriedade e retorna true. A propriedade deve ser direta do objeto e não do protótipo.
//O {}.propertyIsEnumerable() verifica se a propriedade é enumerável.

const frutas4 = ['Banana', 'Uva'];

frutas4.hasOwnProperty('map'); // false
Array.hasOwnProperty('map'); // false
Array.prototype.hasOwnProperty('map'); // true

Array.prototype.propertyIsEnumerable('map'); // false
window.propertyIsEnumerable('innerHeight'); // true



//{}.ISPROTOTYPEOF(VALOR)
//Verifica se é o protótipo do valor passado.

const frutas5 = ['Banana', 'Uva'];

Array.prototype.isPrototypeOf(frutas5); // true


//{}.TOSTRING()
//Retorna o tipo do objeto. O problema é toString() ser uma função dos protótipos de Array, String e mais.
//Por isso é comum utilizarmos a função direto do Object.prototype.toString.call(valor).

const frutas6 = ['Banana', 'Uva'];
frutas6.toString(); // 'Banana,Uva'
typeof frutas6; // object
Object.prototype.toString.call(frutas6); // [object Array]

const frase2 = 'Uma String';
frase2.toString(); // 'Uma String'
typeof frase2; // string
Object.prototype.toString.call(frase2); // [object String]

const carro7 = { marca: 'Ford' };
carro7.toString(); // [object Object]
typeof carro7; // object
Object.prototype.toString.call(carro7); // [object Object]

const li = document.querySelectorAll('li');
typeof li; // object
Object.prototype.toString.call(li); // [object NodeList]



//----------------------EXERCICIOS-------------------------------

// Crie uma função que verifique
// corretamente o tipo de dado
function verificarDado(dado) {
    return Object.prototype.toString.call(dado)
}

console.log(verificarDado('String'))

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {}

Object.defineProperties(quadrado, {
    lados: {
        value: 4
    }
})

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
    width: 800,
    height: 600,
    background: '#333'
}

Object.freeze(configuracao)

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

console.log(Object.getOwnPropertyNames(String.prototype))
console.log(Object.getOwnPropertyNames(Array.prototype))