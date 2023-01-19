//Regexp Métodos

//REGEXP CONSTRUCTOR
//Toda regexp é criada com o constructor RegExp() e herda as suas propriedades e métodos.
//Existem diferenças na sintaxe de uma Regexp criada diretamente em uma variável e de uma passada como argumento de RegExp.

const regexp = /\w+/gi;

// Se passarmos uma string, não precisamos dos //
// e devemos utilizar \\ para meta characters, pois é necessário
// escapar a \ especial. As Flags são o segundo argumento
const regexpObj1 = new RegExp('\\w+', 'gi');
const regexpObj2 = new RegExp(/\w+/, 'gi');

'JavaScript Linguagem 101'.replace(regexpObj1, 'X');
// X X X

// Exemplo complexo:
const regexpTELEFONE1 = /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g;
const regexpTELEFONE2 = new RegExp('(?:\\+?55\\s?)?(?:\\(?\\d{2}\\)?[-\\s]?)?\\d{4,5}[-\\s]?\\d{4}', 'g');


//PROPRIEDADES
//Uma regexp possui propriedades com informações sobre as flags e o conteúdo da mesma.
const regexp2 = /\w+/gi;

regexp2.flags; // 'gi'
regexp2.global; // true
regexp2.ignoreCase; // true
regexp2.multiline; // false
regexp2.source; // '\w+'

//REGEXP.TEST()
//O método test() verifica se existe ou não uma ocorrência da busca. 
//Se existir ele retorna true.
// A próxima vez que chamarmos o mesmo, ele irá começar do index em que parou no último true.

const regexp3 = /Java/g;
const frase = 'JavaScript e Java';

regexp3.lastIndex; // 0
regexp3.test(frase); // true
regexp3.lastIndex; // 4
regexp3.test(frase); // true
regexp3.lastIndex; // 17
regexp3.test(frase); // false
regexp3.lastIndex; // 0
regexp3.test(frase); // true (Reinicia
regexp3.lastIndex;  // 4


//TEST() EM LOOP
//Podemos utilizar o while loop, para mostrar enquanto a condição for verdadeira.
//Assim retornamos a quantidade de match's.
const regexp4 = /Script/g;
const frase2 = 'JavaScript, TypeScript e CoffeeScript';

let i = 1;
while (regexp4.test(frase2)) {
    console.log(i++, regexp4.lastIndex);
}
// 1 10
// 2 22
// 3 37


//REGEXP.EXEC()
//O exec() diferente do test(), irá retornar uma Array com mais informações do que apenas um valor booleano.
const regexp5 = /\w{2,}/g;
const frase3 = 'JavaScript, TypeScript e CoffeeScript';

regexp5.exec(frase3);
// ["JavaScript", index: 0, input: "JavaScript,
// TypeScript e CoffeeScript", groups: undefined] 
regexp5.exec(frase3);
// ["TypeScript", index: 12, input: "JavaScript,
// TypeScript e CoffeeScript", groups: undefined] 
regexp5.exec(frase3);
// ["CoffeeScript", index: 25, input: "JavaScript,
// TypeScript e CoffeeScript", groups: undefined] 
regexp5.exec(frase3);
// null
regexp5.exec(frase3); // Reinicia
// ["JavaScript", index: 0, input: "JavaScript,
// TypeScript e CoffeeScript", groups: undefined] 


//LOOP COM EXEC()
//Podemos fazer um loop com exec e parar o mesmo no momento que encontre o null.
const regexp6 = /\w{2,}/g;
const frase4 = 'JavaScript, TypeScript e CoffeeScript';
let regexpResult;

while ((regexpResult = regexp6.exec(frase4)) !== null) {
    console.log(regexpResult[0]);
}
