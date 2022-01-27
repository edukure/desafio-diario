const { minMax } = require('./index');

describe('Desafio 1: minMax', () => {
  describe('[1,2,3,4,5]', () => {
    const input = [1, 2, 3, 4, 5];
    it('should output [1,5]', () => {
      expect(minMax(input)).toEqual([1, 5]);
    });
  });

  describe('[-1,5,-10,40,544,22]', () => {
    const input = [-1, 5, -10, 40, 544, 22];
    it('should output [-10,544]', () => {
      expect(minMax(input)).toEqual([-10, 544]);
    });
  });
});
