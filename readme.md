#CSS

- Apresetação visual para o cliente
- Estilos para o HTML
- Cascanding Style Sheets
  - Folha de Estilo em Cascata

#Declaração
- Seletor
- Propriedade e Valor

# Conceitos
- Cascata
- Especificidade
- Box Model



#btnBotao {
 color: red; 
 background-color: black;
}

button {
 color: red; 
 background-color: aqua;
}

#JavaScript

O comentario em JS precisa ter //
// 1. Variaveis
//let estaChovendo = true
//const meuNome = "Nazzareno"

//console.log(estaChovendo)

//estaChovendo = false

//console.log(estaChovendo)

// 2. Tipo de dados
  //String
  // " "
  // ' '

  // Number
  // 12 - Integer (+ -)
  // 3.2 -  Float (+ -)

  // Boolean
  // true ou false
  // const maiorDeDezoito = false

  // undefied - indefinido

  // 3. Operadores
    // Atribuição (ex: =)
    // atribui valor
  //   let n1 = 12
    // let n2 = 3

     //console.log( n1 + n2)

    // Aritmeticos (ex: * / - +)
    // calculos matematicos simples

    // concatenação de String (+)

   // console.log("23" + 4 + "abc")

   // Comparação (ex: < > ==)
    // trasforma a expressão em true ou false
    // const maioQue = 1 > 2 // false
    // const igualA = 1 == 1 // true

    
  // 4. Condicional (if/else)

 // const idade = 14
 // const maiorDeDezoito = idade >= 18

  //if (maiorDeDezoito) {
   // alert("Pode tirar a carteira de motorista")
     // } 
  //else {
    //alert("Não pode tirar")
  // }
  // 5. Estrutura de dados
    // Array - Vetor - Lista
    // Array --------        0     1    2  3
       //const temperatura = [23.3, 32.2, 1, 5]

    //console.log(temperatura[7])
    // Object
     //const pessoa = {
      // nome : "Nazzareno",
      // idade : 32,
      // filhos: ["K", "E", "J", "L", "G"]
    //}

//console.log(pessoa.filhos[1])

  // 6. Function
    // 1. Criação
   // function nomeDaFuncao() {
     // console.log("Codigo dentro da função")
   // }

    // 2. Execução
     //nomeDaFuncao() cada vez que escreva a função o programma executa

    // Parametros
      //function soma(a,b){
    //     console.log(a + b) 
  //    }
//soma (34, 45) função è executada toda as vezes que è chamada com os parametros entre os ()
//soma(90, 54)

  // Retorno
   //function soma (a,b) {
   // return a + b o retorno sobstitui a resposta da função com este
//  }

//  const multiplica = soma(2,2) * 4 

//  console.log(soma(2,2))
//  console.log(multiplica)

  // 7. Extensões da linguagem (ex.: Math, Date, ...)
  //Math.random()
  //Math.floor(1.2) aredonda para baixo
  //Math.ceil(1.2)  aredinda para alto
  //Math.PI

  // 8. DOM - Document Object Model (Modelagem do nosso documento, inclusive a janela do navigador)
   
    // window
    //window.alert('alerta') mesmo do atribudo de alerta
    // document
   //document. write('text') deixa escrever um texto na pagina. Idealmente seria possivel fazer tudo com JS.
    // manipular elementos
    //document.documentElement.style.background = "white" deixa colocar a cor branca no background da pagina.