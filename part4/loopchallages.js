// While loop that calculates the sum of number from 1 to 5 and store it in a variable 'sum'.

sum = 0;
i = 1;

while (i <= 5) {
  sum += i;
  i++;
}
// console.log('The sum is',sum);

//write while loop that count downs from 5 to 1 and store number in array countdown
let countdown = [];
let j = 5;

while (j > 0) {
  countdown.push(j);
  j--;
}
// console.log(countdown);

// write do while loop which takes prompot from user about their favourite tea until they say "stop", Store in teacollection
// let teacollection = [];
// let tea = "";
// do {
//   tea = prompt(`Enter your favourite tea (type "stop" to finish)`);
//   if (tea !== "stop") {
//     teacollection.push(tea);
//   }
// } while (tea !== "stop");

// write a do while loop that adds number from 1 to 3 and stores the result in a variable named total.

let total = 0;
let k = 1;
do {
  total = total + k;
  k++;
} while (k <= 3);

// console.log(total);

// for loop that multiplies each element in th array [2,4,6] by 2 and stores the results in a new array 'multipliedNumbers'

let multipliedNumbers = [];
let numbers = [2, 4, 6];

for (let l = 0; l < numbers.length; l++) {
  multipliedNumbers.push(numbers[l] * 2);
}
// console.log(multipliedNumbers);

// for loop that lists all the cities in the array and  stores each city in a new array named 'citylist'

let shehar = ["Paris", "New York", "Tokyo", "London"];

let citylist = [];

for (let c = 0; c < shehar.length; c++) {
  const myCity = shehar[c];
  citylist.push(myCity);
}
// console.log(citylist);
let cities = ["Delhi", "Mumbai", "Bangalore"];
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}