class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    exibirInfo() {
        return `${this.nome} custa R$${this.preco.toFixed(2)}`
    }
}

class Carrinho {
    constructor() {
        this.itens = []
    }
    adicionarItem(item) {
        this.itens.push(item)
    }

    calcularTotal() {
        return this.itens.reduce((total, p) => total + p.preco,0)
    }
}

const carro = new Produto("Carro", 4500.50)
const moto = new Produto("Motocicleta", 3574.99)
const carrinho = new Carrinho()
carrinho.adicionarItem(moto)
carrinho.adicionarItem(moto)
const total = `Total no carrinho: R$${carrinho.calcularTotal()}`

console.log(carro.exibirInfo(), moto.exibirInfo(), total)



// Exemplo de imperativo
const alunos = [{aluno: "Maria", nota: 8}, {aluno: "Paulo", nota: 3}]
let somaNotas = 0;
let aprovados = [];

for (let i = 0; i < alunos.length; i++) {
    somaNotas += alunos[i].nota;

    if (alunos[i].nota >= 7) {
        aprovados.push(alunos[i])
    }
}

console.log(somaNotas)
console.log(aprovados)