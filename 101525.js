  // CHALLENGE NAME-  A Letter's Best Friend   **7kyu**

    // DESCRIPTION:

// Given a string, return if all occurrences of a given letter are always immediately followed by the other given letter.

// Worked Example
// ("he headed to the store", "h", "e") ➞ True

// # All occurences of "h": ["he", "headed", "the"]
// # All occurences of "h" have an "e" after it.
// # Return True

// ('abcdee', 'e', 'e') ➞ False

// # For first "e" we can get "ee"
// # For second "e" we cannot have "ee"
// # Return False
// Examples
// ("i found an ounce with my hound", "o", "u") ➞ True

// ("we found your dynamite", "d", "y") ➞ False
// Notes
// All sentences will be given in lowercase.

//     // ***STARTER CODE***

//  function bestFriend(txt, a, b) {
    
//     }
//     return false
//   }   

//     //   ******TEST CASES*****
    
// const { assert } = require("chai")

// describe('Fixed Test Cases', function() {
//   describe('Letters Are Best Friends (Return True)', () => {
//     it('First Letter Missing (=> Vacuous Truth As Condition Is Technically NOT Broken)', () => {
//       assert.strictEqual(bestFriend('',     'z', 'h'), true, `bestFriend('', 'z', 'h')`)
//       assert.strictEqual(bestFriend('h',    'z', 'h'), true, `bestFriend('h', 'z', 'h')`)
//       assert.strictEqual(bestFriend('abhc', 'z', 'h'), true, `bestFriend('abhc', 'z', 'h')`)
//     })
    
//     it('Both Letters Present', () => {
//       assert.strictEqual(bestFriend('zh',                                'z', 'h'), true, `bestFriend('zh', 'z', 'h')`)
//       assert.strictEqual(bestFriend('zoo wee mama',                      'm', 'a'), true, `bestFriend('zoo wee mama', 'm', 'a')`)
//       assert.strictEqual(bestFriend('i found an ounce with my hound',    'o', 'u'), true, `bestFriend('i found an ounce with my hound', 'o', 'u')`)
//       assert.strictEqual(bestFriend('he headed to the store',            'h', 'e'), true, `bestFriend('he headed to the store', 'h', 'e')`)
//       assert.strictEqual(bestFriend('those were their thorns they said', 't', 'h'), true, `bestFriend('those were their thorns they said', 't', 'h')`)
//     })
//   })
  
//   describe('Letters Are NOT Best Friends (Return False)', () => {
//     it('Second Letter Missing', () => {
//       assert.strictEqual(bestFriend('z',   'z', 'h'), false, `bestFriend('z', 'z', 'h')`)
//       assert.strictEqual(bestFriend('aza', 'z', 'h'), false, `bestFriend('aza', 'z', 'h')`)
//     })
    
//     it('Both Letters Present', () => {
//       assert.strictEqual(bestFriend('zh',                         'h', 'z'), false, `bestFriend('zh', 'h', 'z')`)
//       assert.strictEqual(bestFriend('ll',                         'l', 'l'), false, `bestFriend('ll', 'l', 'l') [last l is not followed by another l]`)
//       assert.strictEqual(bestFriend('zoo wee mama',               'a', 'm'), false, `bestFriend('zoo wee mama', 'a', 'm')`)
//       assert.strictEqual(bestFriend('we found your dynamite',     'd', 'y'), false, `bestFriend('we found your dynamite', 'd', 'y')`)
//       assert.strictEqual(bestFriend('look they took the cookies', 'o', 'o'), false, `bestFriend('look they took the cookies', 'o', 'o')`)
//       assert.strictEqual(bestFriend('a test',                     't', 'e'), false, `bestFriend('a test', 't', 'e')`)
//       assert.strictEqual(bestFriend('abcde',                      'e', 'e'), false, `bestFriend('abcde', 'e', 'e')`)
//     })
//   })
// })

    // ******MY ANSWER********

    function bestFriend(txt, a, b) {
  for(let i = 0; i < txt.length; i++){
    if(txt[i] === a && txt[i + 1] !== b) return false 
  }
  return true
}