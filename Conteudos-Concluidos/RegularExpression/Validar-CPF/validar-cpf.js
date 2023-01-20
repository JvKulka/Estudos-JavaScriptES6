export default class ValidarCPF {
    constructor(element) {
        this.element = element
    }

    //função para limpar o cpf com regexp
    limpar(cpf) {
        return cpf.replace(/\D/g, '')
    }

    //função para construir padrão do cpf com regexp
    construir(cpf) {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
    }

    //função para limpar e construir padrão do cpf
    formatar(cpf) {
        const cpfLimpo = this.limpar(cpf)
        return this.construir(cpfLimpo)
    }

    //Função que verifica se o CPF é valido através de Regexp
    validar(cpf) {
        const matchCPF = cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/g)
        return (matchCPF && matchCPF[0] === cpf)
    }

    //Função que verifica se ocorreu a mudança e se o CPF está no padrão correto
    validarNaMudança(cpfElement) {
        if (this.validar(cpfElement.value)) {
            cpfElement.value = this.formatar(cpfElement.value)
            cpfElement.classList.add('valido')
            cpfElement.classList.remove('erro')
            cpfElement.nextElementSibling.classList.remove('ativo')
        } else {
            cpfElement.classList.add('erro')
            cpfElement.classList.remove('valido')
            cpfElement.nextElementSibling.classList.add('ativo')
        }
    }

    //Função que adiciona o evento de mudança após o usuario inserir o CPF
    adicionarEvento() {
        this.element.addEventListener('change', () => {
            this.validarNaMudança(this.element)
        })
    }

    //Função que adiciona um span com a mensagem de erro caso o CPF esteja incorreto
    adicionarErroSpan() {
        const erroElement = document.createElement('span')
        erroElement.classList.add('erro-text')
        erroElement.innerText = 'CPF Inválido'
        this.element.parentElement.insertBefore(erroElement, this.element.nextElementSibling)
    }

    iniciar() {
        this.adicionarEvento()
        this.adicionarErroSpan()
        return this
    }
}