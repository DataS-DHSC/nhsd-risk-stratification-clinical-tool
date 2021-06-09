import CalcBMI from '../../utils/calcBMI';

describe('calcBM1', () => {
  it('returns response', async () => {
    expect(CalcBMI(69, 162, 2)).toEqual('26.29');
  });

  it('returns response', async () => {
    expect(CalcBMI(0, 0, 0)).toEqual('');
  });
});
