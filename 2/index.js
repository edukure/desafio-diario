// Crie uma função que receba m dois parâmetros, e retorne true se a soma de ambos os
// números for maior que 100. Caso contrário, retorne a string ‘menas’.

// maiorQue100(40, 50) -> menas
// maiorQue100(80, 30) -> true

const maiorQue100 = (a, b) => {
  let answer = a + b > 100 ? true : 'menas';
  return answer;
};

module.exports = {
  maiorQue100,
};
