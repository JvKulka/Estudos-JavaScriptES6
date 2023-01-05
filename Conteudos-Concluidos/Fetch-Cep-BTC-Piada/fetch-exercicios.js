
// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const inputCep = document.getElementById('cep')
const btnCep = document.getElementById('btnCep')
const resultadoCep = document.querySelector('.resultadoCep')

btnCep.addEventListener('click', handleCkick)

//Funças para que quando clicar apareça o CEP
function handleCkick(event) {
    event.preventDefault()
    const cep = inputCep.value
    buscaCep(cep)
}

//Função para adicionar a API
function buscaCep(cep) {
    //Adicionado a API
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        //transformado a API em Texto  
        .then(response => response.text())
        //Adicionado a API no body
        .then(body => {
            resultadoCep.innerText = body
        })
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
const btcDisplay = document.querySelector('.btc')

function fetchBtc() {
    //Selecionou a API
    fetch('https://blockchain.info/ticker')
        //Transformou a API em Json
        .then(response => response.json())
        //Pegou o local onde será adicionado no body e adicionou a API
        .then(btcJson => {
            btcDisplay.innerText = ('R$ ' + btcJson.BRL.buy).replace('.', ',')
        })
}

//Realiza a atualização da API a cada 30 segundos
// setInterval(fetchBtc, 1000 * 30)

fetchBtc()

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const btnProxima = document.querySelector('.proxima')
const paragrafoPiada = document.querySelector('.piada')

function puxarPiada() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(r => r.json())
        .then(piada => {
            paragrafoPiada.innerText = piada.value
        })
}

btnProxima.addEventListener('click', puxarPiada)

puxarPiada()