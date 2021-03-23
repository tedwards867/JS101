//The || operator returns a truthy value if either or both of its operands are truthy; a falsey value if both operands are falsey. 
//The && operator returns a truthy value if both of its operands are truthy, and a falsey value if either operand is falsey. 
//This works great until you need only one of two conditions to be truthy, the so-called exclusive or.

//In this exercise, you will write a function named xor that takes two arguments, and returns true if exactly one of its 
//arguments is truthy, false otherwise. Note that we are looking for a boolean result instead of a truthy/falsy value as 
//returned by || and &&.

//*Understand
//? write a function that returns true or false for any input if ONLY one of the inputs has a truthy quality.
//? ie one value MUST be truthy, and the other MUST be falsy in order to return true.
//? ^ is the XOR operator
//? if both values are falsy, then a ^ b returns 0
//?

//*examples/testCases
console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

//*data structures
//? any datatype is valid for input 
//? output is boolean

//* algorithm
//?  compare argument a to argument b with ^ operator.  if 'true' return 'true' //this didn't work as expected
//? i converted each input into a boolean with the !! operator and then compared it to 1.  Another student just put
//? another bang operator around the expression.. i liked that better !!(!!a ^ !!b) > coerces the 1 into true and 0 into false.

//code

function xor(a, b) {

  if (!!a ^ !!b == 1) {
    return true;
  }
}

