let numeroUm = Number(prompt("fale um numero :"))
let numeroDois = Number(prompt("fale outro numero :"))

console.log ("O primeiro numero é maior que segundo?", numeroUm > numeroDois)
console.log ("O primeiro numero é igual ao segundo?", numeroUm === numeroDois)
console.log (" O primeiro numero é divisível pelo segundo?", (numeroUm & numeroDois) === 0)
console.log (" O primeiro numero é divisível pelo segundo?", (numeroDois & numeroUm) === 0)
