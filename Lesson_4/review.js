//*String.prototype.slice()
let str = 'The grass is green';

// console.log(str.slice(str.indexOf('grass'),(str.indexOf('grass')+5))) //grass
// console.log(str.slice(str.indexOf('grass'))) //grass is green
// console.log(str.slice());// 'The grass is green';
// console.log(str.slice(-3)) //een
// console.log(str.slice(-5, -2)) //gre

//Array.prototype.slice()

let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// arr[2]; // => 'c'
// console.log(arr.slice(2, 5)) //[ 'c', 'd', 'e' ]
// console.log(arr.slice(2, 5)[0])//'c'  => [0] extracts the first element of that array.
// arr.length = 8;
// console.log(arr[7]) //returns undefined


//*extracting data from objects
let produce = { fruit: 'apple', vegetable: 'carrot' }

// console.log(produce.fruit); //'apple'
// console.log(produce['vegetable']) //'carrot'
// console.log(produce.fruit[0]) //'a'  //first extracts the value fromthe fruit key, then the string value at index 0
// console.log(produce['vegetable'][0]) //'c'

//*evaluting Arrays
let anotherArray = []
// console.log(anotherArray) //[]
// console.log(anotherArray.length) //0
// anotherArray.length = 1;
// console.log(anotherArray) //[ <1 empty item> ]
// console.log(`array.length: ${anotherArray.length}`) // returns 1
// console.log(`Object.keys(arrayName).length: ${Object.keys(anotherArray).length}`) //returns 0
// console.log(Array.isArray(anotherArray)) //true

//*combining results of an array
let letterArray = ['a', 'b', 'c', 'd', 'e', 'f'];
// console.log(letterArray.join()); // => 'a,b,c,d,e,f'
// console.log(letterArray.join(''))// => abcdef
// console.log(letterArray.join(';'))// => a;b;c;d;e;f
// console.log(Object.keys(produce).join(';'))//fruit;vegetable
// console.log(Object.values(produce).join('_'))//apple_carrot
// console.log(Object.entries(produce)) //[ [ 'fruit', 'apple' ], [ 'vegetable', 'carrot' ] ]
// console.log(Object.entries(produce).join())//fruit,apple,vegetable,carrot
// console.log(Object.entries(produce).join(';'))//fruit,apple;vegetable,carrot

//*modifying the values of an array element

let numbers = [1, 2, 3, 4];
// console.log(numbers[0] = numbers[0] + 1); //2
// console.log(numbers[4] =numbers[4] + 1); //NaN  //it creates the element, but it can't add 1 to undefined it returns NaN
// console.log(numbers) //[1, 2, 3, 4, NaN];

//*modifying objects
let lotsaProduce = { apple: 'Produce', carrot: 'Produce', pear: 'Produce', broccoli: 'Produce' };

// console.log(lotsaProduce['apple'] = 'Fruit') //returns Fruit
// console.log(lotsaProduce) // { apple: 'Fruit', carrot: 'Produce', pear: 'Produce', broccoli: 'Produce' };
// lotsaProduce.carrot = 'Vegetable'
// console.log(lotsaProduce)// { apple: 'Fruit', carrot: 'Vegetable', pear: 'Produce', broccoli: 'Produce' };

//* string character assignment
let string = 'mollie'
// string[0] = 'M'
// console.log(string)
// string = 'M' + string.slice(1)  //M is concatenated to the return of slice(1) which is 'ollie'
// console.log(string)

//*string methods
// console.log(string.concat(' ','dog',' ', 'puppy'))//mollie dog puppy
// console.log(string)//mollie
// let greeting = 'Hello, '
// let name = 'Tara'
// console.log(greeting.concat(name))

// console.log(arr.toString())

let pets = ['mollie', 'tobi']

// console.log(pets.includes('mollie'))
// console.log(pets.includes('ollie'))
// console.log(string.includes('ollie'))

// console.log(pets.toString().includes('ollie'));

//* Split
let split = '   This a string I\'m going to split   ';

// console.log(split.split());
// console.log(split.split('',-5))
// console.log(split.split(','))

let arrayOfSplit = split.trim().split(' ').length
//console.log(arrayOfSplit)

//*Trim
// console.log(split.trim());
// console.log(split)
// let x = split.trim()
// console.log(x)

let vowels = ''
let word = 'Alabama'
// console.log(word.includes(...vowels))
// console.log(...vowels)
// console.log(vowels)

// console.log(vowels.charAt(0))
// console.log(vowels[0])

console.log(Array.prototype)

