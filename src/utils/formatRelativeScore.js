function formatRelativeScore(number) {
  const numFloat = parseFloat(number);
  return numFloat >= 100 ? numFloat.toFixed(0) : numFloat.toPrecision(2);
}

export { formatRelativeScore };
