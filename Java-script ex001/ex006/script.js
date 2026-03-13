x = 0 /* x vale 0 */

function somar() { /* function serve para dizer função.Ex=função somar */
    var p1 = document.getElementById(`p1`)
    x++/* dizer que o x vai aumentar */
    p1.innerHTML = ` O contador está com ${x} cliques.`
}

function zerar() {
    var p1 = document.getElementById(`p1`)/* serve para dizer que o paragravo com a id p1  */
    x = 0/* serve para dizer que o x vai zerar ou seja vai voltar a ser zero */
    p1.innerHTML = ` O contador está com ${x} cliques.`/* o $ serve para dizer que o valor vai ser inserido ali */
}