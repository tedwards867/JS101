//Write a program that uses this array to create an object where the names are the keys and the values are the positions in the array
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
//{ Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }




//put the value of the element into the object.key
//put the index of the element into the object.value

//transform into sub arrays
//first create inner array ["Fred", 0]
function transformArrToObject(array) {
  //let newArray = [];
  let subArray  = [];
  // for(outer = 0; outer < flintstones.length; outer += 1) {
  
   for (i = 0; i < flintstones.length ; i += 1) {
     for (j = 0, j < flintstones.length; j += 1 ) {
       let 
     }ter
      let key = array[i];
      let value = i
      subArray.push(key);
      subArray.push(value)
    
      }
    return subArray;
  //  newArray.push(subArray);
  // }
 //return newArray;
}

console.log(transformArrToObject(flintstones));
