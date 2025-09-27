  // CHALLENGE NAME-  Heads and Legs

    // DESCRIPTION:

// Everybody has probably heard of the animal heads and legs problem 
// from the earlier years at school. It goes:

// “A farm contains chickens and cows. 
// There are x heads and y legs. 
// How many chickens and cows are there?”
// Where x <= 1000 and y <=1000

// Task
// Assuming there are no other types of animals, work out how many of 
// each animal are there.

// Return a tuple in Python - (chickens, cows) 
// or an array list - [chickens, cows]/{chickens, cows} in all other 
// languages
// If either the heads & legs is negative, the result of your calculation 
// is negative or the calculation is a float return "No solutions" 
// (no valid cases), or [-1, -1] in COBOL.

// In the form:

// [Heads, Legs] = [72, 200]

// VALID - [72, 200] =>             [44 , 28]   
//                              [Chickens, Cows]

// INVALID - [72, 201] => "No solutions"
// However, if 0 heads and 0 legs are given always return [0, 0] since zero 
// heads must give zero animals.

// There are many different ways to solve this, but they all give the same 
// answer.

// You will only be given integers types - however negative values (edge 
//     cases) will be given.

//     // ***STARTER CODE***

//  function animals(heads, legs){
//   //return [Chickens, Cows]
// }   

//     //   ******TEST CASES*****
    
// const Test = require('@codewars/test-compat');

// describe("Example test cases", function() {

//   it ("Valid number of animals", function() {
//     Test.assertSimilar(animals(72, 200), [44, 28])
//     Test.assertSimilar(animals(116, 282), [91, 25])
//     Test.assertSimilar(animals(12, 24), [12, 0])
//     Test.assertSimilar(animals(6, 24), [0, 6])
//     Test.assertSimilar(animals(344, 872), [252, 92])
//     Test.assertSimilar(animals(158, 616), [8, 150])
//   })
  
//   it ("Invalid number of animals", function() {
//     Test.assertSimilar(animals(25, 555), "No solutions")
//     Test.assertSimilar(animals(12, 25), "No solutions")
//     Test.assertSimilar(animals(54, 956), "No solutions")
//     Test.assertSimilar(animals(5455, 54956), "No solutions")
//   })
  
//   it ("Edge cases", function() {
//     Test.assertSimilar(animals(0, 0), [0, 0])
//     Test.assertSimilar(animals(-1, -1), "No solutions")
//     Test.assertSimilar(animals(-45, 5), "No solutions")
//     Test.assertSimilar(animals(500, 0), "No solutions")
//     Test.assertSimilar(animals(0, 500), "No solutions")
//     Test.assertSimilar(animals(5, -55), "No solutions")
//   })
// })

    // ******MY ANSWER********

function animals(h, l){
 let l2=l*0.5
 let cows =Math.abs(l2-h)
 let chic= Math.abs(cows-h)
 return h===0 && l===0?[0, 0]:l<0 || h<0 || chic<0 || cows<0 || l<h || cows>h || l%2!=0?`No solutions`:[chic, cows]
  //return [Chickens, Cows]
}

// ***my answer is not fully correct***and I cant figure out what I'm missing***