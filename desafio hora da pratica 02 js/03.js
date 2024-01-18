var pontuacao = prompt("Digite sua pontuação:");

pontuacao = parseFloat(pontuacao);

if (pontuacao >= 100) {
    alert("Parabéns, você venceu!");
} else {
    alert("Tente novamente para ganhar.");
}
