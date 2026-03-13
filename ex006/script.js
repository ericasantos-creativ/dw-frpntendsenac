x = 0

function somar() {
    var p1 = document.getElementById(`p1`)
    x++
    p1.innerHTML = ` O contador está com ${x} cliques.`
}

function zerar() {
    var p1 = document.getElementById(`p1`)
    x = 0
    p1.innerHTML = ` O contador está com ${x} cliques.`
}