// while (true) {
//   let number = Math.floor(10 * Math.random());
//   console.log(number);

//   if (number === 5) {
//     console.log('Exiting...');
//     break;
//   }
// }
let count = 0;
while (count < 100) {
    
    let number = Math.ceil(10 * Math.random());
    console.log(number);
    count += 1

    if (number === 5) {
      console.log('Exiting...');
      break;
  }
}
