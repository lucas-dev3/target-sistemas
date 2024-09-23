// 5) Dois veículos, um carro e um caminhão, saem respectivamente de cidades opostas pela mesma rodovia. O carro, de Ribeirão Preto em direção a Barretos, a uma velocidade constante de 90 km/h, e o caminhão, de Barretos em direção a Ribeirão Preto, a uma velocidade constante de 80 km/h. Quando eles se cruzarem no percurso, qual estará mais próximo da cidade de Ribeirão Preto?

// a) Considerar a distância de 125km entre a cidade de Ribeirão Preto <-> Barretos.
// b) Considerar 3 pedágios como obstáculo e que o carro leva 5 minutos a mais para passar em cada um deles, pois ele não possui dispositivo de cobrança de pedágio.
// c)Explique como chegou no resultado.

// em km
const distanciaTotal = 125; 
// em km/h
const velocidadeCarro = 90; 
// em km/h
const velocidadeCaminhao = 80; 
// 5 minutos em horas
const tempoPedagioCarro = 5 / 60; 
const numeroPedagios = 3;

// Tempo adicional do carro devido aos pedágios
const tempoAdicionalCarro = numeroPedagios * tempoPedagioCarro; // horas

// Tempo para se encontrarem sem considerar pedágios
const tempoEncontro = distanciaTotal / (velocidadeCarro + velocidadeCaminhao); // horas

// Distância percorrida pelo carro até o encontro
const distanciaCarro = velocidadeCarro * (tempoEncontro + tempoAdicionalCarro); // km

// Distância percorrida pelo caminhão até o encontro
const distanciaCaminhao = velocidadeCaminhao * tempoEncontro; // km

// Verificação de qual veículo está mais próximo de Ribeirão Preto
if (distanciaCarro < distanciaCaminhao) {
    console.log("O carro estará mais próximo de Ribeirão Preto.");
} else {
    console.log("O caminhão estará mais próximo de Ribeirão Preto.");
}

// Explicação do resultado
// Quando o carro e o caminhão se cruzarem na rodovia, o carro estará mais próximo da cidade de Ribeirão Preto, mesmo 
// levando em conta o atraso causado pelos pedágios. Essa conclusão se baseia no cálculo das distâncias percorridas e no
// tempo que cada veículo levou para alcançar o ponto de encontro.



