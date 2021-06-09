export function fromEntries(entries) {
  return Object.assign({}, ...entries.map(([k, v]) => ({ [k]: v })));
}
