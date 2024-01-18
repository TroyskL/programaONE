let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
posteriormente
linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');
linguagensDeProgramacao.push("Swift");
linguagensDeProgramacao.push("Go");

console.log("Lista de Linguagens de Programação:");
for (let i = 0; i < linguagensDeProgramacao.length; i++) {
    console.log(${i + 1}. ${linguagensDeProgramacao[i]});
}