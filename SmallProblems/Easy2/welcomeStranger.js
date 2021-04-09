//Create a function that takes 2 arguments, an array and an object. The array will contain 2 or more elements that, 
//when combined with adjoining spaces, will produce a person's name. The object will contain two keys, "title" and "occupation", 
//and the appropriate values. Your function should return a greeting that uses the person's full name, and mentions the person's title.

//*Understand
//? function with two arguments 
//?  The array is parts of a person's name.  The output will present the elements  as text in index order
//?  The object contains the person's title and occupation 
//?  The return will greet the person by full name and use their title and occupation.

//* Examples/Test
//?  Hello, Montgomery S. Edwards.  Keep up the good work on becoming a Master Electrician.

//*Datatypes
//? input: 
  //?  array - 2 or more elements (represent parts a persons name)
  //? object - two keys (title, occupation)

//* Algorithim
//? function takes two arguments
//? retrieve the array elements as a single text output
//? Retrieve the object values

//*code

let person = ['Montgomery', 'S', 'Edwards'];
let job = {title: 'Master', occupation: 'Electrician'};

function displayGreeting(name, jobInfo) {
  fullName = name.join(' ');
  console.log(`Hello, ${fullName}, keep up the good work on becoming a ${jobInfo.title} ${jobInfo.occupation}`)

}
displayGreeting(person, job);