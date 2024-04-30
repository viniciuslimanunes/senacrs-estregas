
let array = ['shuchi', 'esfhira', 'carner', 'pizza', 'batata']


console.log(array)
console.log('minhas comidas preferidas')
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])


let comidas = prompt ('qual é sua comida preferida?')
array.splice(1, 1, comidas)
console.log(array)
