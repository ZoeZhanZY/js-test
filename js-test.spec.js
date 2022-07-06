
const {
  findItemInArray,
  getTotalPrice,
  intersection,
  getSortedUnique,
  removeItem,
  statsFinder,
  maxProfitDays,
  uniqueCharacters,
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
	const arr = [220,17, 11, 60, 25, 150, 75, 31, 120, 210]
	const expectedResult = [2, 9];
	expect(maxProfitDays(arr)).toEqual(expectedResult);
});


//Test 8
test("uniqueCharacters", () => {
	const string1 = "Aplee";
	const string2 = "phone";
	const string1Result = false;
	const string2Result = true;
	expect(uniqueCharacters(string1)).toEqual(string1Result);
	expect(uniqueCharacters(string2)).toEqual(string2Result);
});