const findItemInArray = (arr1, arr2) => {
  const isIncluded = (element, arr) => arr.includes(element);

  const availabilityResult = arr1.reduce((result, fruit) => {
    if (isIncluded(fruit, arr2)) {
      result[fruit] = true;
    } else {
      result[fruit] = false;
    }

    return result;
  }, {});

  return availabilityResult;
};

const getTotalPrice = () => false;

module.exports = {
  findItemInArray,
  getTotalPrice,
};
