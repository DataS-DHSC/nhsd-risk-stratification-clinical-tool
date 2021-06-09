import {
  addNamespace,
  stripNamespace,
  nestToNamespace,
  namespaceToNest,
} from '../../utils/namespacingTools';

const fieldname = 'field-name';
const namespacedField = `answers.${fieldname}`;

const postData = { 'answers.field': 'value' };
const nestedData = { field: 'value' };

describe('namespacing tools:', () => {
  it('namespaced returns the namespaced string', async () => {
    expect(addNamespace(fieldname)).toEqual(namespacedField);
  });

  it('stripNamespace returns the string without namespacing', async () => {
    expect(stripNamespace(namespacedField)).toEqual(fieldname);
  });

  it('nestToNamespace returns a depth 1 object with namespacing', async () => {
    expect(nestToNamespace(nestedData)).toEqual(postData);
  });

  it('namespaceToNest returns nested object', async () => {
    expect(namespaceToNest(postData)).toEqual(nestedData);
  });
});
