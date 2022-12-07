// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
let minhaIdade = 17
let idadeIrmao = 12

if(minhaIdade > idadeIrmao) {
    console.log("É maior")
} else if(minhaIdade === idadeIrmao) {
    console.log("É igual")
} else {
    console.log("É menor")
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
    console.log((5 - 2))

// Verifique se as seguintes variáveis são True ou False
var nome = 'Andre'; // true
var idade = 28; // true
var possuiDoutorado = false; // false
var empregoFuturo; // false
var dinheiroNaConta = 0; // false

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china) {
    console.log("Brasil tem mais habitantes")
} else {
    console.log("China tem mais habitantes")
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
} // retorna "Falso"

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
} // retorna "Cão"