document.forms; // lista com os formulários
document.forms.contato; // form com nome contato
document.forms.contato.elements; // elementos
document.forms[0].elements[0].value; // valor do primeiro

//A propriedade value retorna o valor do elemento no formulário. 
//Se adicionarmos um callback ao keyup (tecla levantar), podemos ficar de olho no evento e puxar o valor sempre que ele mudar. 
//change dispara quando houver mudanças.
const form = document.getElementById('contato');
function handleKeyUp(event) {
    console.log(event.target.value);
}
form.addEventListener('keyup', handleKeyUp);


//O método checkValidity verifica se um input com o atributo required, é válido ou não.
//A propriedade validationMessage possui a mensagem padrão de erro do browser.
//É possível modicar com setCustomValidity('')
const form2 = document.getElementById('contato');
function handleChange(event) {
    const target = event.target;
    if (!target.checkValidity()) {
        target.classList.add('invalido');
        target.nextElementSibling.innerText = target.validationMessage;
    } else {
        target.classList.remove('invalido');
    }
}
form2.addEventListener('change', handleChange);

//CHECKBOX
//Retorna o valor de value, se estiver checada ou não. checked retorna true ou false.
const form3 = document.getElementById('contato');
function handleChange(event) {
    if (event.target.checked)
        console.log(event.target.value);
}
form3.addEventListener('change', handleChange);

//RADIO
//A diferença entre Radio e Checkbox é que radio aceita apenas uma seleção por grupo.
//Radio é agrupado pelo atributo name.
const form4 = document.getElementById('contato');
function handleChange(event) {
    if (event.target.checked)
        console.log(event.target.value);
}
form4.addEventListener('change', handleChange);


//Ao invés de selecionarmos elemento por elemento, podemos utilizar um objeto para colocarmos todos os dados que o usuário colocar no formulário.
const form5 = document.getElementById('contato');
const dados = {};
function handleChange(event) {
    dados[event.target.name] = event.target.value;
}
form5.addEventListener('change', handleChange);
