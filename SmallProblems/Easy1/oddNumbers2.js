//Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

let number = 1;

while(number < 5) {
  console.log(number);
  number +=1;
}


function printOddNumbers3(startNum, endNum) {

    if(endNum >= startNum) {
      do {
        console.log(startNum)
        startNum +=1;
      } while (startNum <= endNum)
    } else {
      console.log('End number must be >= start Number')
    }

  }

  printOddNumbers3(5,3)
  printOddNumbers3(10,15)
  printOddNumbers3(5,5)