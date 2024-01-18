function mostrarTabuada(numero) {
  for (let i = 1; i <= 10; i++) {
      const resultado = numero * i;
      console.log(${numero} x ${i} = ${resultado});
  }
}

const numeroParaTabuada = 7;

console.log(Tabuada do ${numeroParaTabuada}:);
mostrarTabuada(numeroParaTabuada);