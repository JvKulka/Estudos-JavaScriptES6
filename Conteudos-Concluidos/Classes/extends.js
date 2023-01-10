//SUBCLASSES
//É possível criarmos uma subclasse, esta irá ter acesso aos métodos da classe à qual ela estendeu através do seu protótipo.
class Veiculo {
    constructor(rodas) {
        this.rodas = rodas;
    }
    acelerar() {
        console.log('Acelerou');
    }
}

class Moto extends Veiculo {
    empinar() {
        console.log('Empinou com ' + this.rodas + ' rodas');
    }
}

const honda = new Moto(2);
honda.empinar();


//MÉTODOS
//Podemos escrever por cima de um método herdado.
class Veiculo {
    constructor(rodas) {
        this.rodas = rodas;
    }
    acelerar() {
        console.log('Acelerou');
    }
}

class Moto extends Veiculo {
    acelerar() {
        console.log('Acelerou muito');
    }
}

const honda2 = new Moto(2);
honda2.acelerar();

//SUPER
//É possível utilizar a palavra chave super para falarmos com a classe pai e acessarmos os seus métodos e propriedades.
class Veiculo {
    constructor(rodas) {
        this.rodas = rodas;
    }
    acelerar() {
        console.log('Acelerou');
    }
}

class Moto extends Veiculo {
    acelerar() {
        super.acelerar();
        console.log('Muito');
    }
}

const honda3 = new Moto(2);
honda3.acelerar();

//SUPER E CONSTRUCTOR
//Podemos utilizar o super para estendermos o método constructor.
class Veiculo {
    constructor(rodas, combustivel) {
        this.rodas = rodas;
        this.combustivel = combustivel;
    }
}

class Moto extends Veiculo {
    constructor(rodas, combustivel, capacete) {
        super(rodas, combustivel);
        this.capacete = capacete;
    }
}

const honda4 = new Moto(4, 'Gasolina', true);
