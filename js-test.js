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
        max = el;
        maxCount = all[el];
      }
    } else {
      all[el] = 1;
    }

    return max;
  }, arr[0]);

  const result = [mean, mode];
  return result;
};

const maxProfitDays = (arr) => {
  const profitCalculator = (a, b) => a - b;
  const arrLength = arr.length - 1;
  let maxProfit = arr[arrLength] - arr[0];
  let result = [];

  for (let saleDay = arrLength; saleDay >= 0; saleDay--) {
    for (let buyDay = 0; buyDay < saleDay; buyDay++) {
      const profit = profitCalculator(arr[saleDay], arr[buyDay]);
      if (profit > maxProfit) {
        maxProfit = profit;
        result = [buyDay, saleDay];
      }
    }
  }

  return result;
};

const uniqueCharacters = (str) => {
  //solution 1
  // const stringLength = str.length - 1;
  // let result = true;

  // for (let i = 1; i <= stringLength; i++) {
  //   const slicedString = str.slice(i);
  //   const isRepeated = slicedString.includes(str[i - 1]);

  //   if (isRepeated) {
  //     result = false;
  //     break;
  //   }
  // }
  // return result

  //solution 2

  const array = str.split("");
  const newArray = [...new Set(array)];

  return array.length === newArray.length;
};

const twoSum = (arr, target) => {
  //solution 1
  // for (let i = 0; i < arr.length - 1; i++) {
  //   const difference = target - arr[i];
  //   const slicedArray = arr.slice(i + 1);
  //   const isIncluded = slicedArray.includes(difference);
  //   const j = slicedArray.indexOf(difference) + i + 1;

  //   if (isIncluded) {
  //     return [i, j];
  //   }
  // }

  //solution 2

  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        return [i, j];
      }
    }
  }
};

const addTwoNumbers = (l1, l2) => {
  const num = (link) => {
    const arr = Array.from(link);
    return arr.reduce((pre, cur, i) => pre + cur * Math.pow(10, i), 0);
  };
  const sum = num(l1) + num(l2);
  const sumArray = sum.toString().split("").reverse();
  const result = sumArray.map((el) => Number(el));
  return result;
};

const lengthOfLongestSubstring = (s) => {
  let maxLength = 0;

  loop1: for (let i = 0; i < s.length; i++) {
    loop2: for (let j = 1; j <= s.length - i; j++) {
      const newString = s.substr(i, j);
      console.log({ newString, i, j });
      console.log(s[i + j]);

      if (newString.includes(s[i + j]) || !s[i + j]) {
        if (j > maxLength) {
          maxLength = j;
        }
        console.log("break loop2");
        break loop2;
      }
    }
  }
  console.log(maxLength);
  return maxLength;
};

module.exports = {
  findItemInArray,
  getTotalPrice,
  intersection,
  getSortedUnique,
  removeItem,
  statsFinder,
  maxProfitDays,
  uniqueCharacters,
  twoSum,
  addTwoNumbers,
  lengthOfLongestSubstring,
};
