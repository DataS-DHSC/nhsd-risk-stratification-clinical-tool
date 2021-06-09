export function boolToAnalyticsInputvalue(str) {
  if (str) {
    return 'yes';
  }
  return 'no';
}

export function analyticsInputValueToBool(str) {
  switch (str) {
    case 'yes':
      return true;
    case 'no':
      return false;
    default:
      return false;
  }
}
