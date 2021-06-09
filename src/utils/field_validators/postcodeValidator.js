import { isValid } from 'postcode';

export const postCodeValidator = (value) => {
  if (!value) return '';

  const postcode = value.trim();
  if (!postcode) return '';

  const validationsMessage =
    'Please enter a valid UK postcode or leave blank if unknown';
  if (!isValid(postcode)) {
    return validationsMessage;
  }

  return '';
};
