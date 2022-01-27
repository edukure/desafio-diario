/* Crie uma função que receba uma lista de números e retorne o 
   número mínimo e máximo, nessa ordem.
   
   Construa a lógica sem usar funções como Math.Max  por exemplo. 
   Todos os valores da lista terão pelo menos um elemento e são válidos.
   
   Exemplo: minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
*/

const minMax = (array) => {
  const answer = [array[0], array[0]];

  array.forEach((item) => {
    answer[0] = item < answer[0] ? item : answer[0];
    answer[1] = item > answer[1] ? item : answer[1];
  });

  return answer;
};

module.exports = {
  minMax,
};
