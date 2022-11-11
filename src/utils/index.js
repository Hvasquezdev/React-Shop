const getStringFromObjectKeys = (obj = {}) => {
  const clonedObj = { ...obj };
  const filteredKeys = Object.keys(clonedObj).filter((key) => !!clonedObj[key]);
  return filteredKeys.join(" ");
};

const getFormDataFromObject = (obj = {}) => {
  const form = new FormData();

  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const element = obj[key];
      form.append(key, element);
    }
  }

  return form;
};

export { getStringFromObjectKeys, getFormDataFromObject };
