let numero = prompt("Digite um número para a contagem regressiva:");

if (!isNaN(numero)) {
  numero = parseInt(numero);

  numero = Math.max(numero, 0);

  while (numero >= 0) {
    console.log(numero);
    numero--;
  }
} else {
  console.log("Por favor, digite um número válido.");
}
