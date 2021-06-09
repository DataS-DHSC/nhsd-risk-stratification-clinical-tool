function extractVariablesFromUrl(url) {
  if (url.search(/\?/) === -1) {
    return [];
  }
  return url
    .slice(
      url.search(/\?/) + 1, // Cut the URL to just the parameter string
      url.length
    )
    .split(/&/) // Create an array of variable names and values
    .map((string) => string.split(/=/)); // Convert from 'name=value' strings to [name, value] arrays
}

function retrieveQueryStringParameters(url) {
  const queryStringParametersArray =
    url && url !== ''
      ? extractVariablesFromUrl(decodeURIComponent(url).replace(/\+/g, ' '))
      : [];
  // eslint-disable-next-line no-restricted-properties
  return Object.fromEntries(queryStringParametersArray);
}

export { retrieveQueryStringParameters };
