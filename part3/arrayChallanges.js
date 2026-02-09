let teaFlavors = ["green tea", "black tea", "oolong tea"];

const firstTea = teaFlavors[0];
console.log(firstTea);

let cities = ["London", "Tokyo", "Paris", "New York"];

const favoriteCity = cities[3];
console.log(favoriteCity);

let teaTypes = ["herbal tea", "white tea", "masala chai"];

teaTypes[1] = "jasmine tea";

console.log(teaTypes);

let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");
console.log(citiesVisited);

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];

const lastOrder = teaOrders.pop();
console.log(lastOrder);

let popularTeas = ["greeen tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;
popularTeas.pop();
console.log(softCopyTeas);
console.log(popularTeas);

let topCities = ["Belin", "NewYork", "Singapore"];
let harcopyCities = [...topCities];
topCities.pop();
console.log(harcopyCities);

let europeanCities = ["Paris", "Rome"];
let asianCitie = ["Mumbai", "Shanghai"];

const worldCities = europeanCities.concat(asianCitie);
console.log(worldCities);

let teaMenu = ["Masala chai", "oolong tea", "green tea", "earl tea"];

let menuLength = teaMenu.length;
console.log(menuLength);

cityBucketlist = ["Kyoto", , "London", "Cape Town", "Vancouver"];

let isLondonInList = cityBucketlist.includes("London");

console.log(isLondonInList);

