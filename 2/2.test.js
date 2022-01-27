const { maiorQue100 } = require('./index');

describe('Desafio 2: maiorQue100', () => {
  describe('(40,50)', () => {
    const [a, b] = [40, 50];
    it('should output menas', () => {
      expect(maiorQue100(a, b)).toBe('menas');
    });
  });

  describe('(30,80)', () => {
    const [a, b] = [30, 80];
    it('should output true', () => {
      expect(maiorQue100(a, b)).toBe(true);
    });
  });
});
