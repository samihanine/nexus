export const formatObject = (object: Record<string, unknown>): string => {
  Object.keys(object).forEach((key) => {
    if (object[key] === null || object[key] === "") {
      delete object[key];
    }
  });

  return JSON.stringify(object, null, 2);
};
