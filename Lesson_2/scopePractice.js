

// function greetPeople() {
//   let greetingMessage = "Good Morning!";
//   console.log(greetingMessage);
// }

// greetPeople();


// let userName = 'Julian';
// console.log(userName);

// for (let counter = 0; counter < 3; counter += 1) {
//   console.log(userName);
// }

// console.log(userName);

// let a = 1;         // outer scope variable

// function logA() {
//   console.log(a);  // => 1
//   a += 1;          // a is reassigned to a new value
// }

// logA();
// console.log(a);   // => 2  "a" was re-assigned in the inner scope
// logA();
// console.log(a);


let a = 1;           // first level variable

function foo() {     // second level
  let b = 2;

  function bar() {   // third level
    let c = 3;
    console.log(a);  // => 1
    console.log(b);  // => 2
    console.log(c);  // => 3
  }

  bar();
  console.log(a);    // => 1
  console.log(b);    // => 2
//   console.log(c);    // => ReferenceError
}

foo();