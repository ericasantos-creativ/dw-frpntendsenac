var resultado = document.getElementById('resultado')
resultado.innerHTML = `<p>Aqui vai sair o resultado</p>`
var x = 0;
resultado.innerHTML += `<p>O resultado de x é: ${x}</p>`
x ++;
resultado.innerHTML += `<p>O resultado de x é: ${x}</p>` /* esse += serve para n substituir um oa outro no site  */
x ++;
resultado.innerHTML += `<p>O resultado de x é: ${x}</p>` /* coloque o <p> para ficar um em baixo do outro */
x ++;
resultado.innerHTML += `<p>O resultado de x é: ${x}</p>`