// Função para encontrar o maior número entre três valores
function encontrarMaior(event) {
    // Prevenir o envio do formulário
    event.preventDefault();

    // Obter os valores dos inputs
    const num1 = document.getElementById("numero1").value.trim();
    const num2 = document.getElementById("numero2").value.trim();
    const num3 = document.getElementById("numero3").value.trim();

    const resultadoDiv = document.getElementById("resultado");

    // Validar se todos os campos foram preenchidos
    if (num1 === "" || num2 === "" || num3 === "") {
        resultadoDiv.textContent = "❌ ERRO: Preencha todos os três números!";
        resultadoDiv.classList.add("ativo", "resultado-erro");
        resultadoDiv.classList.remove("resultado-sucesso");
        return;
    }

    // Converter para número
    const n1 = Number(num1);
    const n2 = Number(num2);
    const n3 = Number(num3);

    // Encontrar o maior usando Math.max()
    const maior = Math.max(n1, n2, n3);

    // Exibir o resultado
    resultadoDiv.textContent = `✓ O maior número é: ${maior}`;
    resultadoDiv.classList.add("ativo", "resultado-sucesso");
    resultadoDiv.classList.remove("resultado-erro");

    // Log no console para debug
    console.log(`Números: ${n1}, ${n2}, ${n3} → Maior: ${maior}`);
}

