const findItemInArray = (arr1, arr2) => {
  const isIncluded = (ele, arr) => arr.includes(ele);

  const availabilityResult = arr1.reduce((result, fruit) => {
    result[fruit] = isIncluded(fruit, arr2);
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
  const shouldPush = (a, b) => {
    if (a === b) result.push(a);
  };

  array1.forEach((el1) => {
    array2.forEach((el2) => {
      shouldPush(el1, el2);
    });
  });

  return result;
};

const getSortedUnique = (arr) => {
  // solution 1
  // const sortedArr = arr.sort((a, b) => a - b);
  // const expectedResult = sortedArr.reduce((result, item) => {
  //   if (result[result.length - 1] !== item) {
  //     result.push(item);
  //   }
  //   return result;
  // }, []);
  // return expectedResult;
  //solution 2
  return [...new Set(arr)].sort((a, b) => a - b);
};

const removeItem = (arr1, ...arr2) => {
  const shouldRemain = (a) => !arr2.includes(a);
  const result = arr1.filter(shouldRemain);
  return result;
};

const statsFinder = (arr) => {
  const mean = arr.reduce((pre, cur) => pre + cur, 0) / arr.length;

  let maxCount = 0,
    all = {};
  const mode = arr.reduce((max, el) => {
    if (el in all) {
      all[el]++;
      if (maxCount < all[el]) {
        max = [el];
        maxCount = all[el];
      }
    } else {
      all[el] = 1;
    }

    return max;
  }, arr[0]);

  const result = [mean, ...mode];

  console.log({ result });
  return result;
};

module.exports = {
  findItemInArray,
  getTotalPrice,
  intersection,
  getSortedUnique,
  removeItem,
  statsFinder,
};
