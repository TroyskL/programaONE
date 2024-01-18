function calcularFatorial(numero) {
    // Caso base: fatorial de 0 ou 1 é 1
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        // Caso geral: n! = n * (n-1)!
        return numero * calcularFatorial(numero - 1);
    }
}

// Exemplo de uso da função
const numeroParaCalcularFatorial = 5;
const resultadoFatorial = calcularFatorial(numeroParaCalcularFatorial);
console.log(O fatorial de ${numeroParaCalcularFatorial} é: ${resultadoFatorial});