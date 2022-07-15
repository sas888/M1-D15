let x = "John";
let y = "Doe";
let xY = x + " <> " + y;

console.log(xY);

let details = {
  name: "John",
  surname: "Doe",
  email: "johndoe@domain.com",
};

delete details.email;
console.log(details);

let stringArray = [
  "str1",
  "str2",
  "str3",
  "str4",
  "str5",
  "str6",
  "str7",
  "str8",
  "str9",
  "str10",
];

stringArray.forEach((element) => console.log(element));

const ex26 = function () {
  const randomArray = [];
  const arrayNum = 100;
  for (let i = 0; i < arrayNum; i++) {
    randomArray.push(Math.ceil(Math.random() * arrayNum));
  }
  return randomArray;
};
console.log(ex26());

const maxAndMin = function () {
  let genRanNum = ex26();
  let max = genRanNum[0];
  let min = max;
  for (let i = 1; i < genRanNum.length; ++i) {
    if (genRanNum[i] > max) {
      max = genRanNum[i];
    }
    if (genRanNum[i] < min) {
      min = genRanNum[i];
    }
  }
  return [max, min];
};
console.log(maxAndMin());

const arrayOfArrays = [];
for (let i = 0; i < 10; i++) {
  let current = [];
  for (let j = 0; j < 10; j++) current.push(Math.floor(Math.random() * 10));
  arrayOfArrays.push(current);
}
console.log(arrayOfArrays);

const randIntForArray = () => Math.floor(Math.random() * 50) + 1;

const ranArrOne = () =>
  Array.from({ length: randIntForArray() }, () =>
    Math.floor(Math.random() * randIntForArray())
  );
console.log("ran arr 1", ranArrOne());

const ranArrTwo = () =>
  Array.from({ length: randIntForArray() }, () =>
    Math.floor(Math.random() * randIntForArray())
  );
console.log("ran arr 2", ranArrTwo());

const longestArray = function () {
  let currentArr = [];
  const firstArray = ranArrOne();
  console.log("test first array", firstArray);
  const secondArray = ranArrTwo();
  console.log("test second array", secondArray);
  if (firstArray.length > secondArray.length) {
    return `The first array is the longest with ${firstArray.length} numbers`;
  } else {
    return `The second array is the longest with ${secondArray.length} numbers`;
  }
};

console.log(longestArray());

const returnHigherSum = () => {
  const firstArrayTest = ranArrOne();
  console.log("ranArrTest 1", firstArrayTest);
  const secondArrayTest = ranArrTwo();
  console.log("ranArrTwo 2", secondArrayTest);
  let sum1 = 0;
  for (let number of firstArrayTest) {
    sum1 += number;
  }
  let sum2 = 0;
  for (let number of secondArrayTest) {
    sum2 += number;
  }
  return sum1 > sum2
    ? `The first array is the higher sum with a total of ${sum1}`
    : `The second array is the higher sum with a toal of ${sum2}`;
};

console.log(returnHigherSum());

const idContainer = document.getElementById("container");

const allTd = document.querySelectorAll("td");
