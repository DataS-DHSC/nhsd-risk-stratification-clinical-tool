export const minMaxValidator = (value, min, max) => {
  let message = '';
  if (value < min) {
    message = `value must be greater than or equal to ${min}`;
  }
  if (value > max) {
    message = `value must be less than or equal to ${max}`;
  }
  return message;
};
