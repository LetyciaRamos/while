let soma = 0;
let contador = 0;
let nota = parseFloat(prompt("Digite uma nota (negativo para sair):"));

while (nota >= 0) {
    soma += nota;
    contador++;
    nota = parseFloat(prompt("Digite outra nota (negativo para sair):"));
}

if (contador > 0) {
    let media = soma / contador;
    alert("Média das notas: " + media);
} else {
    alert("Nenhuma nota válida foi digitada.");
}