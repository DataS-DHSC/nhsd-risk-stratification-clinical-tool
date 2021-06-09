import { minMaxValidator } from '../../../utils/field_validators/minMaxValidator';

const min = 10;
const max = 100;
const MIN_MESSAGE = 'value must be greater than or equal to 10';
const MAX_MESSAGE = 'value must be less than or equal to 100';

describe('minMaxValidator', () => {
  it('validates greater than max', () => {
    expect(minMaxValidator(400, min, max)).toEqual(MAX_MESSAGE);
  });

  it('validates equal to max', () => {
    expect(minMaxValidator(100, min, max)).toEqual('');
  });

  it('validates less than min', () => {
    expect(minMaxValidator(8, min, max)).toEqual(MIN_MESSAGE);
  });

  it('validates equals to min', () => {
    expect(minMaxValidator(10, min, max)).toEqual('');
  });

  it('validates within range to min', () => {
    expect(minMaxValidator(55, min, max)).toEqual('');
  });
});
