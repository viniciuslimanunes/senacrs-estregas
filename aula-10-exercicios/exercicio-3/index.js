
let listaTarefas = []

let tarefa1 = prompt('escreva tafera 1')
let tarefa2 = prompt('escreva tafera 2')
let tarefa3 = prompt('escreva tafera 3')

listaTarefas.push(tarefa1, tarefa2, tarefa3)

console.log(listaTarefas)

let i = Number(prompt('escolha um numero de 1 a 3 diacordo a tarefa que já fez.'))
i = i - 1

listaTarefas.splice(i, 1)

console.log(listaTarefas)
