// variaveis Pergunta?
// dados de entrata Pergunta escrita
// dados de saida Pergunta feita e resposta (Escruta embaixo)
const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")

const respostas = [ 
  "Certeza!",
  "Não tenho tanta certeza.",
  "È decididamente assim.",
  "Não conte com isso.",
  "Sem duvidas!",
  "Pergunta novamente mais tarde.",
  "Sim, definitivamente.",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "È melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente",
  "Não è possivel prever agora.",
  "Perspectiva boa",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentra-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

//gerar um numero aleatorio

// O programa rodad todas as vezes que eu clico fazer pergunta

function fazerPergunta() {

  if (inputPergunta.value== "")
  { 
alert("Digite sua pergunta")
return
  }
 buttonPerguntar.setAttribute("disabled", true)

const pergunta = "<div>" + inputPergunta.value + "</div>"

// console.log("Cliquei no bottom")
const totalResposta = respostas.length
const NumeroAleatorio = Math.floor(Math.random() * respostas.length)
console.log(respostas[NumeroAleatorio])
elementoResposta.innerHTML = pergunta + respostas[NumeroAleatorio]
elementoResposta.style.opacity = 1;

setTimeout(function() {
  elementoResposta.style.opacity = 0; buttonPerguntar.removeAttribute("disabled");
}, 3000)

}

// sumir resposta depois 2 segundos



