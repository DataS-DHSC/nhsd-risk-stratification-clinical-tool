import isCheckboxChecked from '../../utils/isCheckboxChecked';

describe('isCheckboxChecked', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should return false if empty', () => {
    const value = undefined;

    const output = isCheckboxChecked(value);

    expect(output).toEqual(false);
  });

  it('Should return false if last string value is false', () => {
    const value = 'true,false';

    const output = isCheckboxChecked(value);

    expect(output).toEqual(false);
  });

  it('Should return true if last string value is true', () => {
    const value = 'true,false,true';

    const output = isCheckboxChecked(value);

    expect(output).toEqual(true);
  });

  it('Should return false if last array value is false', () => {
    const value = ['true', 'false'];

    const output = isCheckboxChecked(value);

    expect(output).toEqual(false);
  });

  it('Should return true if last array value is true', () => {
    const value = ['true', 'false', 'true'];

    const output = isCheckboxChecked(value);

    expect(output).toEqual(true);
  });
});
