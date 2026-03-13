window.alert("bem vindo ao site")
let a = 5    
let b = 2
function somar() {
  var num1 = Number(document.getElementById(`num1`).Value)
  var num2 = Number(document.getElementById(`num2`).Value)

  var soma = num1 + num2

  var resultado = document.getElementById(`resultado`)

  resultado.innerHTML = `A soma entre ${num1} e ${num2} é igual a <strong>${soma}</soma>`

  resultado.style.outline = '1px solid red'

console.log(`O valor do num1 é $(num1).O valor do num2 é $(num2). Asoma deles é $(soma)`)

}


