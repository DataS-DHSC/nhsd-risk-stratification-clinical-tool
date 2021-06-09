const isCheckboxChecked = (value) => {
  if (!value || value.length < 1) return false;

  if (typeof value === 'string')
    return value.split(',').slice(-1)[0] === 'true';

  return value[value.length - 1] === 'true';
};

export default isCheckboxChecked;
