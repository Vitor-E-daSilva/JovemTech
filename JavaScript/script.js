// Seleciona o primeiro botão e o título
const meuBotao1 = document.getElementById('botao1');
const titulo = document.getElementById('tituloPrincipal');
// 1. DECLARAÇÃO DE FUNÇÃO

function mudarTexto() {
  // Modifica o conteúdo de texto do H1
  titulo.textContent = 'Texto alterado com sucesso!';
}

// Associa a função ao evento de clique do botão
meuBotao1.addEventListener('click', mudarTexto);

// Seleciona o segundo botão
const meuBotao2 = document.getElementById('botao2');
let cores = [
  'blue',
  'yellow',
  'red',
  'green',
  'orange',
  'purple',
  'cyan',
  'magenta',
  'lime',
];
// 2. EXPRESSÃO DE FUNÇÃO
const mudarCor = function() {
  // Modifica o estilo CSS do H1 para uma cor aleatória entre primárias e secundárias
  let numAleatorio = Math.floor(Math.random() * length(cores));
  titulo.style.color = cores[numAleatorio];

};

// Associa a função ao evento de clique
meuBotao2.addEventListener('click', mudarCor);

// Seleciona o terceiro botão
const meuBotao3 = document.getElementById('botao3');
var cont = 0

function esconderTitulo() {
  if (cont % 2 == 0){
  titulo.style.display = 'none';
} else {
  titulo.style.display = 'block';
}
  cont++;
};

// Associa a função ao evento de clique
meuBotao3.addEventListener('click', esconderTitulo);

//Reinicia o texto para "Manipulando DOM"
const meuBotao4 = document.getElementById('botao4');

function reiniciarbotao() {
  titulo.textContent = 'Manipulando o DOM';
  titulo.style.color = 'black';
  titulo.style.display = 'block';
}

meuBotao4.addEventListener('click', reiniciarbotao);

//Study at home, i couldnt learn a thing in his classes

const form = document.getElementById("formCadastro");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Captura os valores do formulário
    let nome  = document.getElementById("inputNome").value;
    let email = document.getElementById("inputEmail").value;
    let idade = document.getElementById("inputIdade").value;
    let cor   = document.getElementById("inputCor").value;
	  let senha = document.getElementById("inputSenha").value;

    // Exibe tudo em um alert formatado
    alert(
        "===== DADOS DO CADASTRO =====\n" +
        "Nome: "          + nome  + "\n" +
        "Email: "         + email + "\n" +
        "Idade: "         + idade + " anos\n" +
        "Cor favorita: "  + cor +"\n" +
        "Senha: "         + "*******"
   );
});