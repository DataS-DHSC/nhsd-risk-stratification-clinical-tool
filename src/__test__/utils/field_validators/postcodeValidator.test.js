import { postCodeValidator } from '../../../utils/field_validators/postcodeValidator';

const INVALID_MESSAGE =
  'Please enter a valid UK postcode or leave blank if unknown';

describe('postcodeValidator', () => {
  const invalid = ['EC2V', 'BS7', '  ,  ', 'xxxxx'];
  const valid = [
    '',
    '  ',
    'SE1 6LH',
    'SE1  6LH',
    'SE16LH',
    '  SE16LH',
    '  SE16LH  ',
    'EH99 1SP',
    'BT4 3XX',
  ];

  const noFixedAbode = [
    'ZZ99 3WZ',
    'ZZ99 3CZ',
    'ZZ99 3VZ',
    'ZZ99 3WZ',
    'ZZ99 2WZ',
    'ZZ99 1WZ',
    'ZZ99 3GZ',
    'NF1 1AB',
  ];

  const armedForces = [
    'BF1 4AF',
    'BF1 4AG',
    'BF1 4AL',
    'BF1 4AP',
    'BF1 4AS',
    'BF1 4AT',
    'BF1 4AW',
    'BF1 4BB',
    'BF1 4BD',
    'BF1 4BN',
    'BF1 4BQ',
    'BF1 4DB',
    'BF1 4DE',
    'BF1 4DQ',
    'BF1 4DR',
    'BF1 4DT',
    'BF1 4DU',
    'BF1 4EJ',
    'BF1 4EL',
    'BF1 4EN',
    'BF1 4EP',
    'BF1 4EQ',
    'BF1 4ER',
    'BF1 4ES',
    'BF1 4EU',
    'BF1 4EW',
    'BF1 4FA',
    'BF1 4FB',
    'BF1 4FD',
    'BF1 4FG',
    'BF1 4FL',
    'BF1 4FR',
    'BF1 4GA',
    'BF1 4GN',
    'BF1 4GY',
    'BF1 4HE',
    'BF1 4HF',
    'BF1 4HR',
    'BF1 4HT',
    'BF1 4HU',
    'BF1 4HY',
    'BF1 4HZ',
    'BF1 4JG',
    'BF1 4JP',
    'BF1 4JX',
    'BF1 4JY',
    'BF1 4LB',
    'BF1 4LD',
    'BF1 5AB',
    'BF1 5DP',
    'BF1 5DW',
    'BF1 5EB',
    'BF1 5EH',
    'BF1 5ER',
    'BF1 5EJ',
    'BF1 5EW',
    'BF1 5FF',
    'BF1 5FP',
    'BF1 5FX',
    'BF1 5FY',
    'BF1 6AD',
    'BF1 6AF',
    'BF1 6AG',
    'BF1 6AH',
    'BF1 6AJ',
    'BF1 6AQ',
    'BF1 6AW',
    'BF1 6AX',
    'BF1 6AY',
    'BF1 6AZ',
    'BF1 6BA',
    'BF1 6BG',
    'BF1 6BH',
  ];

  test.each(invalid)('validation of incomplete postcodes: %p', (postcode) => {
    const message = postCodeValidator(postcode);
    expect(message).toEqual(INVALID_MESSAGE);
  });

  test.each([...valid, ...noFixedAbode, ...armedForces])(
    'validation of valid postcodes: %p',
    (postcode) => {
      const message = postCodeValidator(postcode);
      expect(message).toEqual('');
    }
  );
});
