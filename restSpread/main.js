const filterOutOdds = (...nums) => {
  nums.filter((val) => val % 2 === 0);
};

const findMin = (...val) => {
  return Math.min(val);
};

const mergeObj = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

const dubAndMerge = (arr, ...val) => {
  const dub = val.map((num) => num * 2);
  return [...arr, ...dub];
};

const removeRandom = (items) => {
  let idx = Math.floor(Math.random() * items.length);
  return [...items.slice(0, idx), ...items.slice(idx + 1)];
};

const extend = (array1, array2) => {
  return [...array1, ...array2];
};

const addKeyVal = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};

const removeKey = (obj, key) => {
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;
};

const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

const update = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};
