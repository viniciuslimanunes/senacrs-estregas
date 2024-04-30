
function info (){
    sobreMim =(`eu sou o vini, tenho 16 anos, moro no rio grande do sul e sou estudante`)
    return sobreMim
}
console.log(info())

let nome = prompt('Qual é o seu nome?')
let idade = Number(prompt('Qual é a sua idade?'))
let cidade = prompt('Onde você mora?')
let profissao = prompt('Qual a sua profissão?')

function infos (){
    const informaçao = (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
    return informaçao
}
console.log(infos())