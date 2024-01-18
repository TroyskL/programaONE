function calcularAreaEPerimetroSalaCircular(raio) {
  const pi = 3.14;

  const area = pi * Math.pow(raio, 2);

  const perimetro = 2 * pi * raio;

  console.log(Área da sala circular: ${area} metros quadrados);
  console.log(Perímetro da sala circular: ${perimetro} metros);
}

const raioSalaCircular = 4;

calcularAreaEPerimetroSalaCircular(raioSalaCircular);