function makeTea(typeOfTea) {
  return `Making ${typeOfTea}!`;
}
let teaOrder = makeTea("lemon Tea");
// console.log(teaOrder);

function orderTea(teaType) {
  function confirmOrder() {
    return "Order confirm for chai";
  }
  return confirmOrder();
}
let orderConfirmation = orderTea("chai");
// console.log(orderConfirmation);

const calculateTotal = (price, quantity) => price * quantity;

let totalCost = calculateTotal(499, 100);
// console.log(totalCost);

function makeTea(typeOfTea) {
  return `maketea: ${typeOfTea}`;
}
function processTeaOrder(teaFunction) {
  return teaFunction("earl grey");
}
let order = processTeaOrder(makeTea);
// console.log(order);

function createTeaMaker() {
  return function (teaType) {
    return `Making ${teaType}`;
  };
}
let teaMaker = createTeaMaker();
console.log(teaMaker("green tea"));
