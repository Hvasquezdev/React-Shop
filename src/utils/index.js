const getStringFromObjectKeys = (obj = {}) => {
  const clonedObj = {...obj};
  const filteredKeys = Object.keys(clonedObj).filter(
    (key) => !!clonedObj[key]
  );
  return filteredKeys.join(" ");
};

export { getStringFromObjectKeys };
