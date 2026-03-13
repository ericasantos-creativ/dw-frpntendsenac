function somar() {
  var num1 = Number(document.getElementById(`num1`).Value)
  var num2 = Number(document.getElementById(`num2`).Value)

  var soma = num1 + num2

  var resultado = document.getElementById(`resultado`)

  resultado.innerHTML = `A soma entre ${num1} e ${num2} é igual a <strong>${soma}</soma>`

  resultado.style.outline = '1px solid red'

  /* 
*/


}