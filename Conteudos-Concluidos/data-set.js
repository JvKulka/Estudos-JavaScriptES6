//dataset é uma propriedade de HTMLElement, essa propriedade é um objeto do tipo DOMStringMap.
//Dentro desse objeto existe uma coleção de chave / valor, com todos os atributos do elemento html que começarem com data-.

// Ambos os valores selecionam a mesma div acima.
let div = document.querySelector('div');
div = document.querySelector('[data-cor]');
div = document.querySelector('[data-cor="azul"]');

div.dataset;
// DOMStringMap {cor: "azul", width: "500"}
div.dataset.cor; // 'azul'
div.dataset.width; // '500'
div.dataset.tempo = 1000;
// DOMStringMap {cor: "azul", width: "500", tempo: "1000"}


//DATA ATRIBUTES
//Os atributos e valores que começarem com data- poderão ser utilizados como forma de configuração de plugins e interações DOM / JS.

const divs = document.querySelectorAll('[data-anima]');
divs.forEach((div) => {
    div.classList.add(div.dataset.anima);
});

// adiciona em cada div
// uma classe com o mesmo nome
// que o valor de data


//DATA VS CLASS
//A vantagem de se utilizar data atributes é que torna mais fácil evitarmos conflitos com estilos do CSS. Além de deixar a estrutura da tag mais organizada.

//NOMENCLATURA
//Por padrão o JavaScript não aceita - (traço) como caracter válido para nomear propriedades.
//Então qualquer traço será removido e a letra seguinte transformada em maiúscula.

const div = document.querySelector('[data-anima-scroll]');
div.dataset;
// {animaScroll: 'left'}
div.dataset.animaScroll; // left
div.dataset.tempoTotal = 1000;
// Na div vira data-tempo-total="1000"

delete div.dataset.animaScroll; // remove o atributo


//--------------EXERCÍCIOS--------------
// Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.

// Utilizando estes atributos, adicione a classe
// show-down ou show-right a sua respectiva section
// assim que a mesma aparecer na tela (animacao tab)

// No CSS faça com que show-down anime de cima para baixo
// e show-right continue com a mesma animação da esquerda
// para a direita

// Substitua todas as classes js- por data atributes.


//(atividades realizadas em script 'animações')


