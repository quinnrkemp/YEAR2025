// CHALLENGE NAME-  UEFA EURO 2016

// DESCRIPTION:

// Finish the uefaEuro2016() function so it return string just like in the examples below:

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

//     // ***STARTER CODE***

//     function uefaEuro2016(t, s){
       
//         // your code...
//         }

//     //   ******TEST CASES*****
    
//     const chai = require("chai");
//     const assert = chai.assert;
//     chai.config.truncateThreshold=0;
    
//     describe("Basic tests", () => {
//       it("Testing for fixed tests", () => {
//         assert.strictEqual(uefaEuro2016(['Germany', 'Ukraine'], [2, 0]), "At match Germany - Ukraine, Germany won!");
//         assert.strictEqual(uefaEuro2016(['Belgium', 'Italy'], [0, 2]), "At match Belgium - Italy, Italy won!");
//         assert.strictEqual(uefaEuro2016(['Portugal', 'Iceland'], [1, 1]), "At match Portugal - Iceland, teams played draw.");
//       });
//     });

    // ******MY ANSWER********

function uefaEuro2016(t, s){
    if (s[0]===s[1]){
      return `At match ${t[0]} - ${t[1]}, teams played draw.`
    }
      else if (s[0]>s[1]){
        return `At match ${t[0]} - ${t[1]}, ${t[0]} won!`
    }
        return `At match ${t[0]} - ${t[1]}, ${t[1]} won!`
      // your code...
    }