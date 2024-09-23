// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora de todos os dias de um ano, faça um programa, na linguagem que desejar, que calcule e retorne:

// - O menor valor de faturamento ocorrido em um dia do ano;
// - O maior valor de faturamento ocorrido em um dia do ano;
// - Número de dias no ano em que o valor de faturamento diário foi superior à média anual.

// a) Considerar o vetor já carregado com as informações de valor de faturamento.

// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média.

// c) Utilize o algoritmo mais veloz que puder definir.

const faturamentoDiario = [];

for (let i = 0; i < 365; i++) {
    // Gera um valor aleatório entre 200 e 300
    const faturamento = (Math.random() * (300 - 200) + 200).toFixed(2); 
    faturamentoDiario.push(parseFloat(faturamento));
}

const diasComFaturamento = faturamentoDiario.filter(valor => valor > 0);

const menorFaturamento = Math.min(...diasComFaturamento);
const maiorFaturamento = Math.max(...diasComFaturamento);

// Calcular a média anual de faturamento
const somaFaturamento = diasComFaturamento.reduce((acc, valor) => acc + valor, 0);
const mediaAnual = somaFaturamento / diasComFaturamento.length;

// Contar o número de dias com faturamento acima da média anual
const diasAcimaDaMedia = diasComFaturamento.filter(valor => valor > mediaAnual).length;

console.log("Menor valor de faturamento:", menorFaturamento);
console.log("Maior valor de faturamento:", maiorFaturamento);
console.log("Número de dias com faturamento acima da média anual:", diasAcimaDaMedia);
