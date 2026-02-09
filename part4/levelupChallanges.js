// 1. Write a 'for' loop that loops through the array ["green tea", "black tea", "oolong tea", "chai", "masala chai"] and stops the loops when it finds 'chai', store all the teas before 'chai' in a new array name selectedTeas.

let tea = ["green tea", "black tea", "oolong tea", "chai", "masala chai"];
let selectedTeas = [];

for (let i = 0; i < tea.length; i++) {
  if (tea[i] === "chai") {
    break;
  }
  selectedTeas.push(tea[i]);
}
// console.log(selectedTeas);

// 2. Write a for loop that loops through the array ["London", "New York", "Paris", "Berlin"] and skips "Paris". Store the other cities in a new array named visitedCities.

let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for (let j = 0; j < cities.length; j++) {
  if (cities[j] === "Paris") {
    continue;
  }
  visitedCities.push(cities[j]);
}
// console.log(visitedCities);

// 3. Write a for-of loop to iterate through the array [1,2,3,4,5] and stop when the number '4' is found.  Store the number '4' in a array name smallNumbers.

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of numbers) {
  if (num === 4) {
    break;
  }
  smallNumbers.push(num);
}
// console.log(smallNumbers);

// 4. Write a for of loop to iterate through and array and ["chai", "green tea", "herbal tea", "black tea"] and skip "herbal tea". Store the other teas in an array named preferredTeas.

let teas = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];

for (const tea of teas) {
  if (tea === "herbal tea") {
    continue;
  }
  preferredTeas.push(tea);
}
// console.log(preferredTeas);

// 5. Use a for-in loop to loop through an object containing city populations. Stop the loop when population of "Berlin" is found and store all the previous cities in a new object named 'cityPopulation'.

let citiesPopulation = {
  London: 8400000,
  NewYork: 3500000,
  Paris: 3400000,
  Berlin: 2200000,
};

let cityNewPopulation = {};

for (const city in citiesPopulation) {
  if (city === "Berlin") {
    break;
  }
  cityNewPopulation[city] = citiesPopulation[city];
}
// console.log(cityNewPopulation);

// 6. Use a for-in loop to loop through an object containing city populations. Skip any city with a population below 3 million and store the rest in a new object named 'largeCities'

let worldCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};
let largeCities = {};

for (const city in worldCities) {
  if (worldCities[city] < 3000000) {
    continue;
  }
  largeCities[city] = worldCities[city];
}
// console.log(largeCities);

// 8. Write a foreach loop that iterates through the array ["earl grey", "green tea", "chai", "oolong tea"]. Stop the loop when "chai" is found and store all the previous tea types in 'availabelTeas'

let teaTypes = ["earl grey", "green tea", "chai", "oolong tea"];
let availabelTeas = [];

teaTypes.forEach(function (tea) {
  if (tea === "chai") {
    return;
  }
  availabelTeas.push(tea);
});
// console.log(availabelTeas);

// 8.  Write a foreach loop that iterates through the array ["Berlin", "Tokyo", "Sydney", "Paris"]. skip 'Sydney' and store the other cities in a array named traveledCities

let myCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];

myCities.forEach((city) => {
  if (city === "Sydney") {
    return;
  }
  traveledCities.push(city);
});
// console.log(traveledCities);

// 9. Write a for loop that iterates through the array [2, 5, 7, 9]. Skip the value 7 and multiply the rest with 2. Store the result in a new array called doubledNumbers.

let num = [2, 5, 7, 9];
let doubledNumbers = [];

for (let i = 0; i < num.length; i++) {
  if (num[i] === 7) {
    continue;
  }
  doubledNumbers.push(num[i] * 2);
}
// console.log(doubledNumbers);

// 10. Use a for-of loop to iterate through the array ["chai", "gree tea", "black tea", "jasmine tea", "herbal tea"] and stop when the length of the current tea name is greater than 10. Store the teas iterated over in an array named shortTeas.

let teaList = ["chai", "gree tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];

for (const tea of teaList) {
  if (tea.length > 10) {
    break;
  }
  shortTeas.push(tea);
}
console.log(shortTeas);
