import {
  analyticsInputValueToBool,
  boolToAnalyticsInputvalue,
} from '../../utils/cookieSettingsUtils';

describe('boolToAnalyticsInputvalue converts values as expected', () => {
  it('returns yes when given true', () => {
    expect(boolToAnalyticsInputvalue(true)).toStrictEqual('yes');
  });
  it('returns no when given false', () => {
    expect(boolToAnalyticsInputvalue(false)).toStrictEqual('no');
  });
});

describe('analyticsInputValueToBool converts values as expected', () => {
  it('returns false when given value of "no"', () => {
    expect(analyticsInputValueToBool('no')).toStrictEqual(false);
  });
  it('returns true when given value of "yes"', () => {
    expect(analyticsInputValueToBool('yes')).toStrictEqual(true);
  });
  it('returns false when given value of "asd" (any other string value)', () => {
    expect(analyticsInputValueToBool('asd')).toStrictEqual(false);
  });
  it('returns false when given value of "undefined" (any other string value)', () => {
    expect(analyticsInputValueToBool('undefined')).toStrictEqual(false);
  });
});
