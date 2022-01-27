const { contaVerdade } = require('./index');

describe('Desafio 3: contaVerdade', () => {
  describe('[true, false, false, true, false]', () => {
    const input = [true, false, false, true, false];
    it('should output 2', () => {
      expect(contaVerdade(input)).toBe(2);
    });
  });

  describe('[true, true, true, true, true]', () => {
    const input = [true, true, true, true, true];
    it('should output 5', () => {
      expect(contaVerdade(input)).toBe(5);
    });
  });

  describe('new Array(10).fill(false)', () => {
    const input = new Array(10).fill(false);
    it('should output 0', () => {
      expect(contaVerdade(input)).toBe(0);
    });
  });

  describe('new Array(7).fill(false)', () => {
    const input = new Array(7).fill(true);
    it('should output 7', () => {
      expect(contaVerdade(input)).toBe(7);
    });
  });
});
