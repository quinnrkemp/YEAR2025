  // CHALLENGE NAME-    A bugs trilogy: Episode 1 - "Let Math.Random(); decide your future"

    // DESCRIPTION:

// Our friend Pac has finally decided to pursue a career in the coding industry.
// He is a newbie, he needs to learn properly.
// Therefore, Pac wants to apply for the worldwide famous -and very demanding-
// 'C0d3r 1ns1d3' Academy for beginners.
// In order to join, Pac is required to solve a series of 3 exercises about 'Bug Fixes'.
// He has been sent an email from the Academy with the following instructions,

// Dear Pac,  
// This is the first exercise. Find out what's wrong and fix the code.  
// You have 15 minutes to send a solution.  
// Good Luck.

// This code is a mess! Would you help Pac to fix the code in time?

//     // ***STARTER CODE***

//  function {
// 	var : Math.random()
// 		if (career <= 0.32) {
// 			return = FrontEnd Developer
// 		 else if (career <= 0.65) 
// 			return : BackEnd Developer,
// 		} else {
// 			return 'Full-Stack Developer'
// 		}


// yourFutureCareer();   

//     //   ******TEST CASES*****
    
// const chai = require('chai');
// const assert = chai.assert;

// let possibles = {'FrontEnd Developer': 0, 'BackEnd Developer': 0, 'Full-Stack Developer': 0}

// describe("Checking for all values", () => {
//   for (let t=0; t<10; t++){
//     let career = yourFutureCareer();
//     it(`Check if ${career} is valid`, () => {
//       assert.property(possibles, career, `${career} is not a valid career`);
//       possibles[career]++;
//     });
//   }
  
//   for (const career of Object.keys(possibles)) {
//     it(`Check if ${career} is present`, () => {
//       assert.isAbove(possibles[career], 0, `There were no ${career} in the output; either your function doesn't return it or you got unlucky`)
//     })
//   }
// });

    // ******MY ANSWER********

function yourFutureCareer(){
	var career= Math.random()
		if (career <= 0.32) {
			return  'FrontEnd Developer'
      }
else if (career <= 0.65) { 
			return  'BackEnd Developer'
		} 
  else {
			return 'Full-Stack Developer'
		}

}