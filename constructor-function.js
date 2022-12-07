function Carro(marca, preco) {
    this.marca = marcaAtribuida;
    this.preco = precomarcaAtribuido;
}

const honda = new Carro('Honda', 4000);
const fiat = new Carro('Fiat', 3000);


function Carro2(marca, precoInicial) {
    const taxa = 1.2
    const precoFinal = precoInicial * taxa
    this.marca = marca;
    this.preco = precoInicial;
}

const freemont = new Carro2('Freemont', 5000)
// Retorna 6.000 como preço final (somando a taxa)