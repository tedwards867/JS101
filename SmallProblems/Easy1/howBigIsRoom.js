//Build a program that asks the user to enter the length and width of a room in meters, 
//and then logs the area of the room to the console in both square meters and square feet.
//Note: 1 square meter == 10.7639 square feet
//Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

//Understand
//inputs: read from console:  length, width (in meters)
//outputs: area in both square feet and square meters
//Calculations:
  // 1 square meter == 10.7639 square feet
  // area = length * width
  
  //* test cases

  
  //data structure
  //algorithm
  //? collect input from user for length as meters
  //? collect input from user for width as meters
  //? calculate area of input (meters)
  //? convert area in meteres as area in square feet
  //? console log both orignial area and converted area




// function findAreaOfRectangle(lenInMeters, widthInMeters) {
//    lenInMeters = readline.prompt('How long is the room in meters?'); 
//     //this works with .question.  with .prompt() you console.log the question first
//    widthInMeters = readline.prompt('How wide is the room in meters?');
//   let squareMeters = lenInMeters * widthInMeters;
//   let squareFeet = squareMeters * 10.7639;  //magic numbers should have used a constant
//   console.log(`Your area of the room is ${squareMeters} square meters (${squareFeet}). `) // i didn't set the decimal places

// } 
//  console.log()

//prompt user for system of measurement(imperial, metric)
//prompt user for length and width
//set conversion values
//evaluate length and width based on system of measurement
//calculate area
const readlineSync = require('readline-sync');


 function findAreaOfRectangle2(long, wide, system) {
   console.log("Let's calculate the area of your rectangle room! \n");
   
   console.log('What system of measurement do you want to use.  Imperial or Metric?\n');
   system = readlineSync.question().toLowerCase();
 
   while (!(system === 'metric' || system === 'imperial')) {
     console.log('That is not a known system of measurement')
     system = readlineSync.question().toLowerCase();
 
     }
 
    long = readlineSync.question('How long is your room? \n');
    wide = readlineSync.question('How wide is your room? \n');
    let areaInMeters;
    let areaInSqFeet;
    const SQMETER_TO_SQFEET = 10.7639;

    if (system === 'metric') {
      areaInSqFeet =  (long * wide) * SQMETER_TO_SQFEET;
      areaInMeters = long * wide;
      console.log(`Metric Conversion: Meters: ${areaInMeters.toFixed(2)}; Square feet: ${areaInSqFeet.toFixed(2)}.`)
    } else if (system === 'imperial'){
      areaInSqFeet = long * wide;
      areaInMeters = (long * wide)/ SQMETER_TO_SQFEET
      console.log(`Imperial Conversion: Meters: ${areaInMeters.toFixed(2)}; Square feet: ${areaInSqFeet.toFixed(2)}.`)
    }  
   // console.log(`You selected the ${system}.   The area is Meters is ${areaInMeters} and the area in square feet is ${areaInSqFeet}.`);
}

  
    
 
 findAreaOfRectangle2();
 //if imperial (10, 10) = meters: ; sqfeet 100
 // 