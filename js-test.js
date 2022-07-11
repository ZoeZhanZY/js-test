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

      if (newString.includes(s[i + j]) || !s[i + j]) {
        if (j > maxLength) {
          maxLength = j;
        }

        break loop2;
      }
    }
  }

  return maxLength;
};

const findMedianSortedArrays = (nums1, nums2) => {
  const arr = nums1.concat(nums2).sort((a, b) => a - b);
  const length = arr.length;
  const isEven = length % 2 === 0;
  let result = 0;
  if (isEven) {
    const i = length / 2;
    result = (arr[i] + arr[i - 1]) / 2;
  } else {
    result = arr[(length - 1) / 2];
  }
  return result;
};

/**
 * We define a specified length, starting from the length of the original string to 0;
 * We find all possible substrings with the specified length,
 * pass each substring to isPalindrome to check if it's a palindrome,
 * if a palindrome is not found, We use a loop to reduce the specified length by 1.
 * 
 * Since we are working from the longest string to the shortest
 * Therefore, the first truly return from isPalindrome is the the longest palindrome

 * @param {string} s - any string
 * @returns the longest palindrome string
 */
const longestPalindrome = (s) => {
  const strL = s.length;

  const isPalindrome = (str, l, r) => {
    let i = 0;
    while (i < (r - l + 1) / 2) {
      if (str[l + i] === str[r - 1 - i]) {
        i++;
      } else {
        return false;
      }
    }
    return true;
  };

  for (let newStrL = strL; newStrL >= 0; newStrL--) {
    innerLoop: for (let l = 0; l < strL; l++) {
      const r = newStrL + l;

      if (r > strL) {
        break innerLoop;
      } else if (isPalindrome(s, l, r)) {
        const newStr = s.slice(l, r);

        return newStr;
      }
    }
  }

  // a copy
  // 	var longestPalindrome = function(s) {
  //     if (!s) return "";

  //     let longest = "";

  //     for (let i = 0; i < s.length; i++) {
  //         const oddPalindrome = getPalindrome(s, i, i);
  //         const evenPalindrome = getPalindrome(s, i - 1, i);

  //         longest = longest.length < oddPalindrome.length ? oddPalindrome : longest;
  //         longest = longest.length < evenPalindrome.length ? evenPalindrome : longest;
  //     }

  //     return longest;
  // };

  // var getPalindrome = function(s, l, r) {
  //     let i = 0;

  //     while (s[l - i] && s[l - i] === s[r + i]) {
  //         i++;
  //     }

  //     i--;

  //     return s.slice(l - i, r + i + 1);
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
  findMedianSortedArrays,
  longestPalindrome,
};
