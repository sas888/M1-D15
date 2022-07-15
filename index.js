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

const ranArrOne = Array.from({ length: 20 }, () =>
  Math.floor(Math.random() * 50)
);
const ranArrTwo = Array.from({ length: 50 }, () =>
  Math.floor(Math.random() * 100)
);

const longestArray = function () {
  const firstArray = ranArrOne;
  const secondArray = ranArrTwo;
  if (firstArray > secondArray) {
    return firstArray;
  } else {
    return secondArray;
  }
};

console.log(longestArray());

const idContainer = document.getElementById("container");

const allTd = document.querySelectorAll("td");
