var diaDaSemana = prompt("Qual é o dia da semana?");

diaDaSemana = diaDaSemana.toLowerCase();

if (diaDaSemana === "sábado" || diaDaSemana === "domingo") {
    alert("Bom fim de semana!");
} else {
    alert("Boa semana!");
}
