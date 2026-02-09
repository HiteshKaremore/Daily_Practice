//Write a 'for' loop that loops through the array ["green tea", "black tea", "oolong tea", "chai", "masala chai"] and stops the loops when it finds 'chai', store all the teas before 'chai' in a new array name selectedTeas.

let tea = ["green tea", "black tea", "oolong tea", "chai", "masala chai"];
let selectedTeas = [];

for (let i = 0; i < tea.length; i++) {
  if (tea[i] === "chai") {
    break;
  }
  selectedTeas.push(tea[i]);
}
// console.log(selectedTeas);

//Write a for loop that loops through the array ["London", "New York", "Paris", "Berlin"] and skips "Paris". Store the other cities in a new array named visitedCities.

let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for (let j = 0; j < cities.length; j++) {
  if (cities[j] === "Paris") {
    continue;
  }
  visitedCities.push(cities[j]);
}
console.log(visitedCities);

