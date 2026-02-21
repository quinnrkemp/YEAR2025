  // CHALLENGE NAME-  How old will I be in 2099? 

    // DESCRIPTION:

// Your task is to write a function that takes two parameters: 
// the year of birth and the year to count years in relation to.
//  As Philip is getting more curious every day he may soon want 
//  to know how many years it was until he would be born, so your 
//  function needs to work with both dates in the future and in 
//  the past.

// Provide output in this format: For dates in the future: "You 
// are ... year(s) old." For dates in the past: "You will be born 
// in ... year(s)." If the year of birth equals the year requested 
// return: "You were born this very year!"

// "..." are to be replaced by the number, followed and proceeded 
// by a single space. Mind that you need to account for both "year" 
// and "years", depending on the result.

// Good Luck!

//     // ***STARTER CODE***

// function  calculateAge() {  
//   // enter your code here.
// }    

//     //   ******TEST CASES*****
    
// const { assert } = require('chai');

// it("Example test cases", function() {
//   assert.strictEqual(calculateAge(2012, 2016),"You are 4 years old.");
//   assert.strictEqual(calculateAge(1989, 2016),"You are 27 years old.");
//   assert.strictEqual(calculateAge(2000, 2090),"You are 90 years old.");
//   assert.strictEqual(calculateAge(2000, 1990),"You will be born in 10 years.");
//   assert.strictEqual(calculateAge(3400, 3400),"You were born this very year!"); 
//   assert.strictEqual(calculateAge(900, 2900),"You are 2000 years old.");
//   assert.strictEqual(calculateAge(2010, 1990),"You will be born in 20 years.");
//   assert.strictEqual(calculateAge(2010, 1500),"You will be born in 510 years.");
//   assert.strictEqual(calculateAge(2011, 2012),"You are 1 year old.");
//   assert.strictEqual(calculateAge(2000, 1999),"You will be born in 1 year.");
// })

    // ******MY ANSWER********

function  calculateAge(c,h) {  
let v=c-h
return v===1?`You will be born in 1 year.`:v===-1?`You are 1 year old.`:v===0?`You were born this very year!`:v>1?`You will be born in ${v} years.`:`You are ${v*-1} years old.`

  // enter your code here.
}