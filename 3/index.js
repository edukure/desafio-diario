/* Crie uma função que retorne o número de valores verdadeiros
 que existem em uma lista.
 
 contaVerdade([true, false, false, true, false]) ➞ 2
 */

const contaVerdade = (array) => {
  const answer = array.reduce((acc, current) => {
    return current ? acc + 1 : acc;
  }, 0);

  return answer;
};

module.exports = {
  contaVerdade,
};
