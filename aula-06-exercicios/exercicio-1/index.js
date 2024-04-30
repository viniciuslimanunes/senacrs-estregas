let nome
let idade

console.log("Tipo do nome:", typeof nome)
console.log("Tipo da idade:", typeof idade)

//por enquanto sem valor entao tipo indefinido

nome = prompt("qual é o seu nome?")
idade = prompt("qual é a sua idade?")

console.log("Tipo do nome:", typeof nome)
console.log("Tipo da idade:", typeof idade)

// nome e idade são strings
// porque os seus valores foram atribuidos atraves do pronpt 
// o pronpt() sempre retorna uma string

console.log("Olá", nome, "você tem", idade, "anos")