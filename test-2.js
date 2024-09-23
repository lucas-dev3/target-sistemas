// 2) Descubra a lógica e complete o próximo elemento:

// a) 1, 3, 5, 7, ___
// Progressão aritmética de razão 2
const seqA = [1, 3, 5, 7];
seqA.push(seqA[seqA.length - 1] + 2);

// b) 2, 4, 8, 16, 32, 64, ____
// Progressão geométrica de razão 2
const seqB = [2, 4, 8, 16, 32, 64];
seqB.push(seqB[seqB.length - 1] * 2);

// c) 0, 1, 4, 9, 16, 25, 36, ____
// Sequência é formada pelos quadrados perfeitos dos números inteiros consecutivos  
// 0², 1², 2², 3², 4², 5², 6²
const seqC = [0, 1, 4, 9, 16, 25, 36];
seqC.push(Math.pow(seqC.length, 2));

// d) 4, 16, 36, 64, ____
// Sequência é formada pelos quadrados perfeitos dos números inteiros consecutivos  
// 2², 4², 6², 8²
const seqD = [4, 16, 36, 64];
seqD.push(Math.pow(seqD.length + 1, 2) * 4);

// e) 1, 1, 2, 3, 5, 8, ____
// Sequência de Fibonacci
// A sequência de Fibonacci é uma sequência de números inteiros onde cada número é a soma dos dois números anteriores.
const seqE = [1, 1, 2, 3, 5, 8];
seqE.push(seqE[seqE.length - 1] + seqE[seqE.length - 2]);

// f) 2, 10, 12, 16, 17, 18, 19, ____
// Não entendi a lógica, mas a sequência é formada pelos números inteiros consecutivos a partir do 2.
// O resultado é 20 seguindo a logica 16, 17, 18, 19, 20
const seqF = [2, 10, 12, 16, 17, 18, 19];
seqF.push(seqF[seqF.length - 1] + 1);


console.log(seqA); // [1, 3, 5, 7, 9]
console.log(seqB); // [2, 4, 8, 16, 32, 64, 128]
console.log(seqC); // [0, 1, 4, 9, 16, 25, 36, 49]
console.log(seqD); // [4, 16, 36, 64, 100]
console.log(seqE); // [1, 1, 2, 3, 5, 8, 13]
console.log(seqF); // [2, 10, 12, 16, 17, 18, 19, 20]
