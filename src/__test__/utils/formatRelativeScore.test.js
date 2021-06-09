import { formatRelativeScore } from '../../utils/formatRelativeScore';

// test cases
describe('formatRelativeScore', () => {
  it('should return no decimal places for a number above 100', async () => {
    const result = formatRelativeScore(101.303);

    expect(result).toEqual('101');
  });

  it('should return no decimal places for a number between 10 and 100', async () => {
    const result = formatRelativeScore(91.303);

    expect(result).toEqual('91');
  });

  it('should return one decimal place for a number between 1 and 10', async () => {
    const result = formatRelativeScore(9.303);

    expect(result).toEqual('9.3');
  });

  it('should return two decimal places for a number between 0 and 1', async () => {
    const result = formatRelativeScore(0.313);

    expect(result).toEqual('0.31');
  });
});
