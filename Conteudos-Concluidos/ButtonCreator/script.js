const controles = document.getElementById('controles')
const cssText = document.querySelector('.css')
const btn = document.querySelector('.btn')

controles.addEventListener('change', changes)

const handleStyle = {
    element: btn,
    backgroundColor(value) {
        this.element.style.backgroundColor = value
    },
    height(value) {
        this.element.style.height = value + 'px'
    },
    width(value) {
        this.element.style.width = value + 'px'
    },
    texto(value) {
        this.element.innerText = value
    },
    color(value) {
        this.element.style.color = value
    },
    border(value) {
        this.element.style.border = value
    },
    borderRadius(value) {
        this.element.style.borderRadius = value + 'px'
    },
    fontFamily(value) {
        this.element.style.fontFamily = value
    },
    fontSize(value) {
        this.element.style.fontSize = value + 'px'
    },
}

function changes(event) {
    const name = event.target.name
    const value = event.target.value

    handleStyle[name](value)
    saveValues(name, value)
    showCss()
}

function saveValues(name, value) {
    localStorage[name] = value
}

function setValues() {
    const propriedades = Object.keys(localStorage)
    propriedades.forEach((propriedade) => {
        handleStyle[propriedade](localStorage[propriedade])
        controles.elements[propriedade].value = localStorage[propriedade]
    })
    showCss()
}

setValues()

function showCss() {
    cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';<span></span>')
}

