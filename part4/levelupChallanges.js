//Write a 'for' loop that loops through the array ["green tea", "black tea", "oolong tea", "chai", "masala chai"] and stops the loops when it finds 'chai', store all the teas before 'chai' in a new array name selectedTeas.

let tea = ["green tea", "black tea", "oolong tea", "chai", "masala chai"];
let selectedTeas = [];

for (let i = 0; i < tea.length; i++) {
  if (tea[i] === "chai") {
    break;
  }
  selectedTeas.push(tea[i]);
}
console.log(selectedTeas);
