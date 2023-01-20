const cpfsList = document.querySelectorAll('.cpf li')

//Função para transformar a NodeList em uma lista com os valores
const elementsInnerText = ([...elements]) => {
    return elements.map(element => element.innerText)
}

//função para limpar o CPF através de Regexp
const limparCPF = (cpf) => {
    return cpf.replace(/\D/g, '')
}

//função para construir o cpf com a forma padrão
const construirCPF = (cpf) => {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
}

//função para formatar os CPFS(juntando o limparCPF com o construirCPF)
const formatarCPFS = (cpfs) => {
    return cpfs.map(limparCPF).map(construirCPF)
}

//função para substituir os cpfs 'sujos' para os CPFS formatados no index
const substituirCPFS = (cpfsElements) => {
    const cpfs = elementsInnerText(cpfsElements)
    const cpfsFormatadors = formatarCPFS(cpfs)

    cpfsElements.forEach((element, index) => {
        element.innerText = cpfsFormatadors[index]
    })
}

substituirCPFS(cpfsList)