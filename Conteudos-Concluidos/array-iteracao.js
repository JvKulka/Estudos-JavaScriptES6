//[].forEach(callback(itemAtual, index, array)) a função de callback é executada para cada item da array.
//Ela possui três argumentos, itemAtual (valor do item da array), index (index do valor na array) e array (array original).
const carros = ['Ford', 'Fiat', 'Honda'];
carros.forEach(function (item, index, array) {
    console.log(item.toUpperCase());
});

// com Arrow Function
carros.forEach((item, index, array) => {
    console.log(item.toUpperCase());
});

//ARROW FUNCTION
const li = document.querySelectorAll('li');

li.forEach(i => i.classList.add('ativa'));

li.forEach(function (item) {
    item.classList.add('ativa');
});

//O terceiro argumento do callback é uma referência direta e se modificado irá também modificar a array original.
const carros2 = ['Ford', 'Fiat', 'Honda'];
carros2.forEach((item, index, array) => {
    array[index] = 'Carro ' + item;
});

carros; // ['Carro Ford', 'Carro Fiat', 'Carro Honda']



//[].map(callback(itemAtual, index, array)) funciona da mesma forma que o forEach(), 
//porém ao invés de retornar undefined, retorna uma nova array com valores atualizados de acordo com o return de cada iteração.
const carros3 = ['Ford', 'Fiat', 'Honda'];
const newCarros = carros3.map((item) => {
    return 'Carro ' + item;
});

carros3; // ['Ford', 'Fiat', 'Honda']
newCarros; // ['Carro Ford', 'Carro Fiat', 'Carro Honda']; 

//Se não retornarmos nenhum valor durante a iteração utilizando map, o valor retornado como de qualquer função que não possui o return, será undefined.
const carros4 = ['Ford', 'Fiat', 'Honda'];
const newCarros2 = carros4.map((item) => {
    const novoValor = 'Carro ' + item;
});

newCarros2; // [undefined, undefined, undefined];

//Uma Arrow Function de linha única e sem chaves irá retornar o valor após a fat arrow =>.
const numeros = [2, 4, 6, 8, 10, 12, 14];
const numerosX3 = numeros.map(n => n * 3);

numerosX3; // [6, 12, 18, 24, 30, 36, 42];
//Se o objetivo for modificar os valores da array atual, sempre utilize o map, 
//pois assim uma nova array com os valores modificados é retornada e você pode imediatamente iterar novamente sobre estes valores.

//Map pode ser muito útil para interagirmos com uma array de objetos, onde desejamos isolar um valor único de cada objeto.
const aulas = [
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    },
]

const tempoAulas = aulas.map(aula => aula.min);
// [15, 10, 20, 25];

const puxarNomes = aula => aula.nome;
const nomesAulas = aulas.map(puxarNomes);
// ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']



//[].reduce(callback(acumulador, valorAtual, index, array), valorInicial) executa a função de callback para cada item da Array.
//Um valor especial existe nessa função de callback, ele é chamado de acumulador, mas é na verdade apenas o retorno da iteração anterior.
const aulas2 = [10, 25, 30];
const total1 = aulas2.reduce((acumulador, atual) => {
    return acumulador + atual;
});
total1; // 65

const total2 = aulas2.reduce((acc, cur) => acc + cur, 100);
total2; // 165

//O primeiro parâmetro do callback é o valor do segundo argumento passado no reduce(callback, inicial) durante a primeira iteração.
//Nas iterações seguintes este valor passa a ser o retornado pela anterior.

//MAIOR VALOR COM [].REDUCE()
const numeros2 = [10, 25, 60, 5, 35, 10];

const maiorValor = numeros2.reduce((anterior, atual) => {
    return anterior < atual ? atual : anterior;
});

maiorValor; // 60


//[].find(), retorna o valor atual da primeira iteração que retornar um valor truthy.
//Já o [].findIndex(), ao invés de retornar o valor, retorna o index deste valor na array.
const frutas = ['Banana', 'Pêra', 'Uva', 'Maçã'];
const buscaUva = frutas.findIndex((fruta) => {
    return fruta === 'Uva';
}); // 2

const numeros3 = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros3.find(x => x > 45); // 88


//[].filter(), retorna uma array com a lista de valores que durante a sua iteração retornaram um valor truthy.
const frutas2 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
const arrayLimpa = frutas2.filter((fruta) => {
    return fruta;
}); // ['Banana', 'Uva', 'Maçã']

const numeros4 = [6, 43, 22, 88, 101, 29];
const buscaMaior46 = numeros4.filter(x => x > 46); // [88, 101]


//-------------------------------------------------------------------EXERCICIOS------------------------------------------------------------//

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso') // Selecionou todos os cursos
const arrayCursos = Array.from(cursos) // tranformou a nodelist em array

const objetosCurso = arrayCursos.map((curso) => {
    const titulo = curso.querySelector('h1').innerText
    const descricao = curso.querySelector('p').innerText
    const aulas = curso.querySelector('.aulas').innerText
    const horas = curso.querySelector('.horas').innerText
    return {
        titulo,
        descricao,
        aulas,
        horas
    }
})

console.log(objetosCurso)

// Retorne uma lista com os
// números maiores que 100
const numeros5 = [3, 44, 333, 23, 122, 322, 33];
const maioresQue100 = numeros5.filter(n => n > 100)

console.log(maioresQue100)


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const possuiBaixo = instrumentos.some((item) => {
    return item === 'Baixo'
})

console.log(possuiBaixo)

// Retorne o valor total das compras
const compras = [
    {
        item: 'Banana',
        preco: 'R$ 4,99'
    },
    {
        item: 'Ovo',
        preco: 'R$ 2,99'
    },
    {
        item: 'Carne',
        preco: 'R$ 25,49'
    },
    {
        item: 'Refrigerante',
        preco: 'R$ 5,35'
    },
    {
        item: 'Quejo',
        preco: 'R$ 10,60'
    }
]

const valorTotal = compras.reduce((acumulador, item) => {
    const precoLimpo = +item.preco.replace('R$ ', '').replace(',', '.')

    return acumulador + precoLimpo
}, 0)


console.log(valorTotal)