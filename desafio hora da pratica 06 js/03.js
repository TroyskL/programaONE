function converterDolarParaReal(valorEmDolar) {

  const cotacaoDolar = 4.80;

  const valorEmReais = valorEmDolar * cotacaoDolar;

  const valorEmReaisArredondado = parseFloat(valorEmReais.toFixed(2));

  return valorEmReaisArredondado;
}

const valorEmDolar = 50;
const valorEmReais = converterDolarParaReal(valorEmDolar);
console.log(${valorEmDolar} dólares equivalem a R$${valorEmReais});