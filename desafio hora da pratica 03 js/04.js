let numero = prompt("Digite um número para a contagem progressiva:");

if (!isNaN(numero)) {
  numero = parseInt(numero);

  numero = Math.max(numero, 0);

  let contador = 0;
  while (contador <= numero) {
    console.log(contador);
    contador++;
  }
} else {
  console.log("Por favor, digite um número válido.");
}
