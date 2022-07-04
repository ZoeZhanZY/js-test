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
  const getItemTotalPrice = (quantity, price) => quantity * price;
  const totalPrice = marketArray.reduce((previousValue, currentValue) => {
    return (
      previousValue +
      getItemTotalPrice(currentValue.quantity, currentValue.price)
    );
  }, 0);

  return totalPrice;
};

const intersection = (array1, array2) => {
  // solution 1
  // const iterator = array1.values();
  // let result = [];
  // for (const value of iterator) {
  //   array2.forEach((element) => {
  //     if (element === value) {
  //       result.push(element);
  //     }
  //   });
  //   console.log({ result });
  // }

  // solution2
  const result = [];
  const shouldPushElement = (a, b) => {
    if (a === b) {
      result.push(a);
    }
  };

  array1.forEach((el1) => {
    array2.forEach((el2) => {
      shouldPushElement(el1, el2);
    });
  });

  return result;
};

const getSortedUnique = (arr) => {
  const sortedArr = arr.sort((a, b) => a - b);
  console.log({ sortedArr });
  const expectedResult = sortedArr.reduce((result, item) => {
    if (result[result.length - 1] !== item) {
      result.push(item);
    }
    console.log({ result });
    return result;
  }, []);

  return expectedResult;
};

module.exports = {
  findItemInArray,
  getTotalPrice,
  intersection,
  getSortedUnique,
};
