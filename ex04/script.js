let nome = prompt("Digite seu primeiro nome:");
let sobrenome = prompt("Digite seu sobrenome:");

while (nome === "" || sobrenome === "") {
    alert("Preencha corretamente os campos.");
    nome = prompt("Digite seu primeiro nome:");
    sobrenome = prompt("Digite seu sobrenome:");
}

alert("Nome completo: " + nome + " " + sobrenome);