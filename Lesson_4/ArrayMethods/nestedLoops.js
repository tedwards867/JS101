// for (let c = 0; c <= 4; c++) {
//  console.log(`I can count to ${c}`);
//   for(let d =0; c <= 4; d++) {
//     console.log(`We can count to ${d}, too`)
//   }
// }
let outerarray = [];
let innerarray = [1,2,3];

for (counter = 0; counter < innerarray.length; counter++) { // count from 1 to 3 three times
  outerarray.push(innerarray[counter]);

 }
 console.log(outerarray)