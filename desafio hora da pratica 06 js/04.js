function calcularAreaEPerimetroSalaRetangular(altura, largura) {
  const area = altura * largura;

  const perimetro = 2 * (altura + largura);

  console.log(Área da sala: ${area} metros quadrados);
  console.log(Perímetro da sala: ${perimetro} metros);
}
const alturaSala = 3;
const larguraSala = 5;

calcularAreaEPerimetroSalaRetangular(alturaSala, larguraSala);