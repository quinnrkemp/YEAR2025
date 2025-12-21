  // CHALLENGE NAME-  For UFC Fans (Total Beginners): Conor McGregor vs George Saint Pierre

    // DESCRIPTION:

// This is a beginner friendly kata especially for UFC/MMA fans.

// It's a fight between the two legends: Conor McGregor vs George Saint 
// Pierre in Madison Square Garden. Only one fighter will remain standing, 
// and after the fight in an interview with Joe Rogan the winner will make 
// his legendary statement. It's your job to return the right statement 
// depending on the winner!

// If the winner is George Saint Pierre he will obviously say:

// "I am not impressed by your performance."
// If the winner is Conor McGregor he will most undoubtedly say:

// "I'd like to take this chance to apologize.. To absolutely NOBODY!"
// Good Luck!

// Note
// The given name may varies in casing, eg., it can be "George Saint Pierre" 
// or "geOrGe saiNT pieRRE". Your solution should treat both as the same thing 
// (case-insensitive).


//     // ***STARTER CODE***

// function quote(fighter) {
//   // your code here
// };    

//     //   ******TEST CASES*****
    
// const { assert } = require('chai');

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(quote('george saint pierre'), "I am not impressed by your performance.");
//     assert.strictEqual(quote('conor mcgregor'), "I'd like to take this chance to apologize.. To absolutely NOBODY!");

//     assert.strictEqual(quote('George Saint Pierre'), "I am not impressed by your performance.");
//     assert.strictEqual(quote('Conor McGregor'), "I'd like to take this chance to apologize.. To absolutely NOBODY!");
//   });
// });

    // ******MY ANSWER********

function quote(fighter) {
let f=fighter.toLowerCase()  
let g= 'George Saint Pierre'.toLowerCase()
let c= 'Conor McGregor'.toLowerCase()
return f===g?`I am not impressed by your performance.`:`I'd like to take this chance to apologize.. To absolutely NOBODY!`
  // your code here
};