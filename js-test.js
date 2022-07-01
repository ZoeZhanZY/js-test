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

const getTotalPrice = (obj) => {
  const marketArray = Object.values(obj);
  const product = (quantity, price) => quantity * price;
  const totalPrice = marketArray.reduce((previousValue, currentValue) => {
    return previousValue + product(currentValue.quantity, currentValue.price);
  }, 0);

  return totalPrice;
};

module.exports = {
  findItemInArray,
  getTotalPrice,
};
