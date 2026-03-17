function gerarTabuada() {
    const numeroInput = document.getElementById('numero');
    const resultado = document.getElementById('resultado');
    const numero = parseInt(numeroInput.value);

    // Validação
    if (isNaN(numero) || numero === '') {
        resultado.innerHTML = '<p class="mensagem-erro">Por favor, digite um número válido!</p>';
        return;
    }

    if (numero < 1 || numero > 10) {
        resultado.innerHTML = '<p class="mensagem-erro">Por favor, digite um número entre 1 e 10!</p>';
        return;
    }

    // Gerando a tabuada
    let html = '';
    for (let i = 1; i <= 10; i++) {
        const resultado_mult = numero * i;
        html += `<div class="tabuada-item"><strong>${numero}</strong> × ${i} = ${resultado_mult}</div>`;
    }

    resultado.innerHTML = html;
}

// Permitir gerar tabuada ao pressionar Enter
document.getElementById('numero').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        gerarTabuada();
    }
});
