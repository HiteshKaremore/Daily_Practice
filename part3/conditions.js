// //Checking if a number is greater than another number:

let num1 = 5;
let num2 = 10;
console.log("I am a regular upper code");

if (num1 > num2) {
  console.log("num1 is greater than num2");
} else {
  console.log("num1 is smaller than num2");
}
console.log("I am a regular bottom code");

//Checking if a string is equal to another string:

let userName = "chai";
let anotherUsername = "hitesh";

if (userName == anotherUsername) {
  console.log("Pick another userName");
} else {
  console.log("You can pick this username");
}

//Checking if a variable is a number or not:

let score = 44;

if (typeof score == "number") {
  console.log("Yep, this is a number");
} else {
  console.log("No, this is not a number");
}

//Checking if a boolean value is a true or false

let isTeaReady = true;

if (isTeaReady) {
  console.log("tea is ready");
} else {
  console.log("Tea is Not Ready");
}


//Checiking if array is empty or not:

let items = ["item1"];

if(items.length === 0){
    console.log("array is empty");
    
} else {
    console.log("Array is NOT empty");
    
}