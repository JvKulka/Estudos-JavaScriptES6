const links = document.querySelectorAll('a')

//Ao acionar evento, pega o href atraves da funcao fetchPage
function handleCkick(event) {
    event.preventDefault()
    fetchPage(event.target.href)
    window.history.pushState(null, null, event.target.href)
}

//Criado função fetchPage
async function fetchPage(url) {
    //Selecionado o url dos links
    const pageResponse = await fetch(url)
    //Selecionado os textos que estão dentro dos links
    const pageText = await pageResponse.text()
    //Referenciado função para alterar o conteúdo
    mudarConteudo(pageText)
}

//Criado função de mudar o conteúdo
function mudarConteudo(newText) {
    //Criado novo elemento (div) dentro do HTML dos links
    const newHtml = document.createElement('div')
    //Selecionado HTML dos links e atribuido o valor de newText
    newHtml.innerHTML = newText

    //Selecionado o conteúdo antigo dos links
    const conteudoAntigo = document.querySelector('.content')
    //Selecionado o conteúdo novo dos links
    const conteudoNovo = newHtml.querySelector('.content')

    //Realizado a mudança dos conteudos (antigo e novo)
    conteudoAntigo.innerHTML = conteudoNovo.innerHTML
    //Realizado a mudança no title dos conteudos
    document.title = newHtml.querySelector('title').innerText

    console.log(newHtml)
}

window.addEventListener('popstate', () => {
    fetchPage(window.location.href)
})

//Criado evento de click
links.forEach(link => {
    link.addEventListener('click', handleCkick)
})