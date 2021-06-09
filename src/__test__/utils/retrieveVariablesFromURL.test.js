import { retrieveQueryStringParameters } from '../../utils/retrieveVariablesFromURL';

// test cases
describe('retrieveQueryStringParameters', () => {
  it('should return an object containing the parameters from the URL', () => {
    const result = retrieveQueryStringParameters(
      'www.test.com?allowGet=true&test=false'
    );

    expect(result).toEqual({
      allowGet: 'true',
      test: 'false',
    });
  });

  it('should return an empty object if the URL contains no parameters', () => {
    const result = retrieveQueryStringParameters('www.test.com');

    expect(result).toEqual({});
  });
});
