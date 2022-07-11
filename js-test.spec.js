const {
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
} = require("./js-test");

// Test 1
test("findItemInArray", () => {
  const fruit = ["orange", "apple", "banana"];
  const market = ["mango", "apple", "watermelon", "orange"];

  const expectedResult = {
    orange: true,
    apple: true,
    banana: false,
  };

  expect(findItemInArray(fruit, market)).toEqual(expectedResult);
});

//Test 2
test("getTotalPrice", () => {
  const market = {
    mango: {
      quantity: 2,
      price: 10,
    },
    apple: {
      quantity: 2,
      price: 5,
    },
    banana: {
      quantity: 5,
      price: 1,
    },
  };

  expect(getTotalPrice(market)).toEqual(35);
});

//Test 3
test("intersection", () => {
  const array1 = [2, 1, 4, 8];
  const array2 = [2, 3, 4];

  const expectedResult = [2, 4];
  expect(intersection(array1, array2)).toEqual(expectedResult);
});

// Test 4
test("getSortedUnique", () => {
  const array1 = [2, 1, 1, 2, 4, 8];

  const expectedResult = [1, 2, 4, 8];
  expect(getSortedUnique(array1)).toEqual(expectedResult);
});

//Test 5
test("removeItem", () => {
  const array1 = ["a", "b", "c", "a", "b", "c"];

  const expectedResult1 = ["b", "b"];
  const expectedResult2 = [];

  expect(removeItem(array1, "a", "c")).toEqual(expectedResult1);
  expect(removeItem(array1, "a", "b", "c")).toEqual(expectedResult2);
});

// Test 6
test("statsFinder", () => {
  const array1 = [500, 400, 400, 375, 300, 350, 325, 300, 300];

  const expectedResult = [361.1111111111111, 300];
  expect(statsFinder(array1)).toEqual(expectedResult);
});

//Test 7
test("maxProfitDays", () => {
  const arr = [220, 17, 11, 60, 25, 150, 75, 31, 120, 210];
  const expectedResult = [2, 9];
  expect(maxProfitDays(arr)).toEqual(expectedResult);
});

//Test 8
test("uniqueCharacters", () => {
  const string1 = "Apple";
  const string2 = "phone";
  const string1Result = false;
  const string2Result = true;
  expect(uniqueCharacters(string1)).toEqual(string1Result);
  expect(uniqueCharacters(string2)).toEqual(string2Result);
});

//Test 9
test("twoSum", () => {
  const test1 = [3, 3];
  const test2 = [3, 2, 4];
  const expectedResult1 = [0, 1];
  const expectedResult2 = [1, 2];
  expect(twoSum(test1, 6)).toEqual(expectedResult1);
  expect(twoSum(test2, 6)).toEqual(expectedResult2);
});

//Test 10
test("addTwoNumbers", () => {
  const test1A = [2, 4, 3];
  const test1B = [5, 6, 4];
  const test2A = [0];
  const test2B = [0];
  const test3A = [9, 9, 9, 9, 9, 9, 9];
  const test3B = [9, 9, 9, 9];

  const expectedResult1 = [7, 0, 8];
  const expectedResult2 = [0];
  const expectedResult3 = [8, 9, 9, 9, 0, 0, 0, 1];

  expect(addTwoNumbers(test1A, test1B)).toEqual(expectedResult1);
  expect(addTwoNumbers(test2A, test2B)).toEqual(expectedResult2);
  expect(addTwoNumbers(test3A, test3B)).toEqual(expectedResult3);
});

//Test 11
test("lengthOfLongestSubstring", () => {
  const test1 = "a";
  const expectedResult1 = 1;

  const test2 = "bbbbb";
  const expectedResult2 = 1;

  const test3 = "pwwkew";
  const expectedResult3 = 3;
  expect(lengthOfLongestSubstring(test1)).toEqual(expectedResult1);
  expect(lengthOfLongestSubstring(test2)).toEqual(expectedResult2);
  expect(lengthOfLongestSubstring(test3)).toEqual(expectedResult3);
});

//Test 12
test("findMedianSortedArrays", () => {
  const test1A = [1, 3];
  const test1B = [2];
  const test2A = [1, 2];
  const test2B = [3, 4];
  const test3A = [100000];
  const test3B = [100001];
  const expectedResult1 = 2.0;
  const expectedResult2 = 2.5;
  const expectedResult3 = 100000.5;
  expect(findMedianSortedArrays(test1A, test1B)).toBe(expectedResult1);
  expect(findMedianSortedArrays(test2A, test2B)).toBe(expectedResult2);
  expect(findMedianSortedArrays(test3A, test3B)).toBe(expectedResult3);
});

//Test 13
test("longestPalindrome", () => {
  const test = "babad";
  const expectedResult = "bab";
	expect(longestPalindrome(test)).toEqual(expectedResult);
	
  const test1 = "caba";
  const expectedResult1 = "aba";
  expect(longestPalindrome(test1)).toEqual(expectedResult1);

  const test2 = "abb";
  const expectedResult2 = "bb";
  expect(longestPalindrome(test2)).toEqual(expectedResult2);

  const test3 = "a";
  const expectedResult3 = "a";
  expect(longestPalindrome(test3)).toEqual(expectedResult3);

  const test4 = "cbbd";
  const expectedResult4 = "bb";
  expect(longestPalindrome(test4)).toEqual(expectedResult4);

  const test5 = "aacabdkacaa";
  const expectedResult5 = "aca";
	expect(longestPalindrome(test5)).toEqual(expectedResult5);
	
	const test6 = "abcdbbfcba";
  const expectedResult6 = "bb";
  expect(longestPalindrome(test6)).toEqual(expectedResult6);
});

//Test 14
// test("", () => {
// 	const test =
// 	const expectedResult =
// 		expect((test)).toEqual(expectedResult);
// });
