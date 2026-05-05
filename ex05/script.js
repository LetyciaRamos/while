let saldo = 500;
let saque = parseFloat(prompt("Saldo disponível: R$ " + saldo + "\nDigite o valor do saque:"));

while (saque > saldo) {
    saque = parseFloat(prompt("Saldo insuficiente! Digite outro valor:"));
}

saldo -= saque;
alert("Saque realizado com sucesso. Saldo restante: R$ " + saldo);

while (saldo > 0) {
    saque = parseFloat(prompt("Saldo disponível: R$ " + saldo + "\nDigite novo saque:"));

    while (saque > saldo) {
        saque = parseFloat(prompt("Saldo insuficiente! Digite outro valor:"));
    }

    saldo -= saque;
    alert("Novo saldo: R$ " + saldo);
}

alert("Saldo zerado ou negativo. Encerrando programa.");