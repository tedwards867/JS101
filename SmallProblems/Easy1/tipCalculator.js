//Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. 
// The program must compute the tip, and then log both the tip and the total amount of the bill to the console. 
// You can ignore input validation and assume that the user will enter numbers.

//*Understand
//* Prompt user for bill amount and tip rate
//* calculate the tip and present tip and total amount (bill + tip) to the console.
//? handle 0 for tip
//? what if tip is greater than bill
//? is tip entered in % or decimal

//*Examples/Test Cases
//calculateTip(.10);
//calculateTip(0)
//calculateTip(10)
//displayBill(30.75, 10)
//displayBill(50, 20)

//*Data Structure
//*Algorithm
//request bill amount
//request tip amount
  // determine if tip is percentage or decimal.
  //calculate tip based on input type
// display full bill (input + calculated tip)


const readlineSync = require('readline-sync');

function calculateTip(billAmount, tipRate){
  tipRate = convertTipRate(tipRate);
  return (billAmount * tipRate)/100;
}

function convertTipRate(tipRate) {
  if (tipRate < 1){
    tipRate *= 100
  }
  return tipRate
}

function displayBill(billAmount, tipRate) {
  billAmount = readlineSync.question('How much is the bill? \n');
  
  tipRate = readlineSync.question('What is percent you would like to tip? \n');
  let tip = calculateTip(billAmount, tipRate);
  let totalBill = parseFloat(billAmount) + tip
  console.log(`Based on your tip rate of ${convertTipRate(tipRate)}%, your tip is ${tip.toFixed(2)}, and your total bill is ${totalBill.toFixed(2)}.`);

}
// console.log(calculateTip(100, .10)); //10
// console.log(calculateTip(100, 0)) // 0
// console.log(calculateTip(100, 10)) //0
// console.log(calculateTip(100, 110))

// console.log(convertTipRate(.15));
// console.log(convertTipRate(15));
displayBill();