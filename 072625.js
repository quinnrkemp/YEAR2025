  // CHALLENGE NAME-  Define a card suit    

    // DESCRIPTION:

    // You get any card as an argument. Your task is to 
    // return the suit of this card (in lowercase).

    // Our deck (is preloaded):
    
    // ('3♣') -> return 'clubs'
    // ('3♦') -> return 'diamonds'
    // ('3♥') -> return 'hearts'
    // ('3♠') -> return 'spades'

    // // ***STARTER CODE***

    // function defineSuit(card) {
  
    //     // good luck
    //   }   

    // //   ******TEST CASES*****
    
    // const assert = require('chai').assert;

    // describe("Basic tests",() => {
    //   it('Testing №1 for "3♣"', () => {
    //     let actualClubs = defineSuit('3♣');
    //     assertNotPrinting(actualClubs);
    //     assert.strictEqual(actualClubs, 'clubs');
    //   });
    //   it('Testing №2 for "Q♠"', () => assert.strictEqual(defineSuit('Q♠'), 'spades'));
    //   it('Testing №3 for "9♦"', () => assert.strictEqual(defineSuit('9♦'), 'diamonds'));
    //   it('Testing №4 for "J♥"', () => assert.strictEqual(defineSuit('J♥'), 'hearts'));
      
    //   function assertNotPrinting(actual) {
    //     assert.isDefined(actual, 'You have to return the suit. Did you print it to the console instead?\n');
    //   }
    // });

    // ******MY ANSWER********

    function defineSuit(c) {
        let res=c.slice(-1)
          return res==='♣'?'clubs':res==='♦'?'diamonds':res==='♥'?'hearts':'spades'
          // good luck
        }