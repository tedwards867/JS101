const obj = { text: "Remove occurances of the letter e after the word 'letter' in this sentence" }
const solutionString = "Remove occurances of the letter  aftr the word 'lttr' in this sntnc";
Object.freeze(obj);

//need index of the word 'letter' 
//need string to be iterable
//loop over string and replace 'e' with ''.



function forLoopSolution(obj) {
  let wordToBeIndexed = 'letter';
  let indexOfWord = obj.text.indexOf(wordToBeIndexed) + wordToBeIndexed.length;  
  let sentence = obj.text.split('');
  for (i = indexOfWord; i < sentence.length; i += 1) {
    if (sentence[i] === 'e') {
      sentence.splice(i,1)
    }
  }
  return sentence.join('') ;
}
let solution ="Remove occurances of the letter  aftr th word 'lttr' in this sntnc";
console.log(forLoopSolution(obj) === solution);
