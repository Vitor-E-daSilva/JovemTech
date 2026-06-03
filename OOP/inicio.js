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



// Exemplo de imperativo ↓
// const alunos = [{aluno: "Maria", nota: 8}, {aluno: "Paulo", nota: 3}]
// let somaNotas = 0;
// let aprovados = [];

// for (let i = 0; i < alunos.length; i++) {
//     somaNotas += alunos[i].nota;

//     if (alunos[i].nota >= 7) {
//         aprovados.push(alunos[i])
//     }
// }

// console.log(somaNotas)
// console.log(aprovados)

// Versão orientada a objetos ↓

class Aluno {
    constructor (nome,notas) {
        this._nome = nome;
        this._notas = notas;
    }
    estaAprovado() {
        return this._notas >= 7;
    }
}

class Turma {
    constructor(listaAlunos = []) {
        this.alunos = listaAlunos
    }

    gerarRelatorioAprovados() {
        return this.alunos.filter(aluno => aluno.estaAprovado())
    }

    gerarRelatorioReprovados() {
        return this.alunos.filter(aluno => !aluno.estaAprovado())
    }

    adicionarAluno(aluno){
        if (typeof aluno.estaAprovado === "function") {
        this.alunos.push(aluno)
        } else {
            throw new Error("Erro ao ler aluno")
        }
    }

    adicionarAlunos(alunos) {
        alunos.forEach(element => {
            this.adicionarAluno(element)
        });
    }
}


let alunos = [
    new Aluno("Maria", 9),
    new Aluno("João", 2),
    new Aluno("Ana", 10),
    new Aluno("Pedro", 7),
    new Aluno("Lucas", 4),
    new Aluno("Carla", 9),
    new Aluno("Fernanda", 3),
    new Aluno("Rafael", 7),
    new Aluno("Juliana", 10),
    new Aluno("Bruno", 5)
];

// Teste de validacao de aluno ↓
// let aluno = "John"
// matematica.adicionarAluno(aluno)


const matematica = new Turma()
matematica.adicionarAlunos(alunos)


console.log(matematica.gerarRelatorioReprovados())