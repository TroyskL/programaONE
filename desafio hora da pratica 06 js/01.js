function calcularIMC(altura, peso) {
  const imc = peso / (altura * altura);

  const imcArredondado = parseFloat(imc.toFixed(2));
  
  return imcArredondado;
}

const altura = 1.75;
const peso = 70;

const resultadoIMC = calcularIMC(altura, peso);
console.log(O IMC é: ${resultadoIMC});