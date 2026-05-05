let numero = parseInt(prompt("Digite um número positivo:"));

while (numero < 0) {
    numero = parseInt(prompt("Número inválido! Digite um número positivo:"));
}

alert("Número válido: " + numero);