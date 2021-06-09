export function addNamespace(fieldname) {
  return `answers.${fieldname}`;
}

export function stripNamespace(namespacedString) {
  const [last] = namespacedString.split('.').slice(-1);
  return last;
}

export function nestToNamespace(nestedData) {
  const postData = {};
  Object.entries(nestedData).forEach(([fiedldId, field]) => {
    postData[`answers.${fiedldId}`] = field;
  });
  return postData;
}

export function namespaceToNest(namespacedData) {
  const nestedData = {};
  Object.entries(namespacedData).forEach(([fiedldId, field]) => {
    nestedData[`${fiedldId.split('.')[1]}`] = field;
  });
  return nestedData;
}
