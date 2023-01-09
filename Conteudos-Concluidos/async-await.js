//A palavra chave async indica que a função possui partes assíncronas e que você pretende esperar a resolução da mesma antes de continuar.
//O await irá indicar a promise que devemos esperar. Faz parte do ES8.
async function puxarDados() {
    const dadosResponse = await fetch('./dados.json');
    //await traz o resultado, não a resposta em si
    const dadosJSON = await dadosResponse.json();

    document.body.innerText = dadosJSON.titulo;
}

puxarDados();

//THEN / ASYNC
//A diferença é uma sintaxe mais limpa.
function iniciarFetch() {
    fetch('./dados.json')
        .then(dadosResponse => dadosResponse.json())
        .then(dadosJSON => {
            document.body.innerText = dadosJSON.titulo;
        })
}
iniciarFetch();

async function iniciarAsync() {
    const dadosResponse = await fetch('./dados.json');
    const dadosJSON = await dadosResponse.json();
    document.body.innerText = dadosJSON.titulo;
}
iniciarAsync();

//Para lidarmos com erros nas promises, podemos utilizar o try e o catch na função.
async function puxarDados() {
    try {
        const dadosResponse = await fetch('./dados.json');
        const dadosJSON = await dadosResponse.json();
        document.body.innerText = dadosJSON.titulo;
    }
    catch (erro) {
        console.log(erro);
    }
}
puxarDados();


//INICIAR FETCH AO MESMO TEMPO
//Não precisamos esperar um fetch para começarmos outro.
//Porém precisamos esperar a resposta resolvida do fetch para transformarmos a response em json.
async function iniciarAsync() {
    const dadosResponse = fetch('./dados.json'); //retorna uma promessa
    const clientesResponse = fetch('./clientes.json'); //retorna uma promessa

    // ele espera o que está dentro da expressão () ocorrer primeiro
    const dadosJSON = await (await dadosResponse).json(); //retorna a resposta da promessa
    const clientesJSON = await (await clientesResponse).json(); //retorna a resposta da promessa
}
iniciarAsync();

//O resultado da expressão à frente de await tem que ser uma promise.
//E o retorno do await será sempre o resultado desta promise.
async function asyncSemPromise() {
    // Console não irá esperar.
    await setTimeout(() => console.log('Depois de 1s'), 1000);
    console.log('acabou');
}
asyncSemPromise();

async function iniciarAsync() {
    //console espera por ser uma promise
    await new Promise(resolve => {
        setTimeout(() => resolve(), 1000)
    });
    console.log('Depois de 1s');
}
iniciarAsync();
