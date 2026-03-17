
function contar() {

let inicio = document.getElementById("inicio").value
let fim = document.getElementById("fim").value
let passo = document.getElementById("passo").value
let res = document.getElementById("resultado")

inicio = Number(inicio)
fim = Number(fim)
passo = Number(passo)

res.innerHTML = ""

for (let i = inicio; i <= fim; i += passo) {
    res.innerHTML += i + " "
}

}