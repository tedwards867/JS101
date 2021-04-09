console.log([1, 2, 3].every(num => num > 2));
console.log([3, 4, 5].every(num => num > 2));
console.log([1, 2, 3].every(num => {
  return num = num * 2;
}))

let arr = [1, 2, 3, 4];
arr.every( (elem, index, arr) => {
  arr[ index+1 ] -= 1   
  console.log(`[${arr}][${index}] -> ${elem}`) 
  return elem < 2
})


//*iteration 1 
//? arr[ index+1 ] -= 1  
  //!arr[ 0 + 1 (1) ] -= 1 //subtract 1 from value at position 1
  //arr = [1, 1, 3, 4];
//? `[${arr}][${index}] -> ${elem}`
  //[1, 1, 3, 4][0] --> 1
//*iteration 2 
//? arr[ index+1 ] -= 1  
  //![1, 1, 3, 4][1 + 1] -=1 //subtract 1 from value at position 2
  // arr = [1, 1, 2, 4]; 
//? `[${arr}][${index}] -> ${elem}`
  //[1, 1, 2, 4][1] -->1
//*iteration 3 
//? arr[ index+1 ] -= 1  
  //![1, 1, 2, 4][2 + 1] -=1 //subtract 1 from value at position 3
  //arr = [1, 1, 2, 3];
//? `[${arr}][${index}] -> ${elem}`
  //[1, 1, 2, 3][2] --> 2

//*return
//it executed the logic in the {} until it hit the false condition, and modified the array per the instructions

let arr2 = [1, 2, 3, 4];
arr2.every( (elem, index, arr) => {
  console.log(`[${arr2}][${index}] -> ${elem}`) 
  return elem < 2
})
//*return
//it executed the logic in the {} until it hit the false condition.  It still just returned false though.

let arr3 = [1, 2, 3, 4];
console.log(arr2.every( (elem) => elem < 2))

//with no instructions it just evaluated and returned true/false