export const mergeFromEntries = (entries, [entryId, entry]) => {
  // eslint-disable-next-line no-param-reassign
  entries[entryId] = entry;
  return entries;
};

export const extractSectionDefaults = (section) =>
  Object.entries(section.fields)
    .filter(([, f]) => f.type !== 'bmi-calc')
    .map(([fieldId, field]) => [fieldId, field.default])
    .reduce(mergeFromEntries, {});

export const extractFormDefaults = (forms) =>
  Object.entries(forms)
    .map(([formId, form]) => [
      formId,
      form.sections
        .map((section) => extractSectionDefaults(section))
        .reduce((r, c) => Object.assign(r, c), {}),
    ])
    .reduce(mergeFromEntries, {});

export const extractDefaults = (forms) =>
  Object.entries(extractFormDefaults(forms)).reduce(
    (acc, section) => Object.assign(acc, section[1]),
    {}
  );
