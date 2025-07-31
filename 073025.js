  // CHALLENGE NAME-  Who is going to pay for the wall?

    // DESCRIPTION:

    // Don Drumphet lives in a nice neighborhood, but one of his 
    // neighbors has started to let his house go. Don Drumphet 
    // wants to build a wall between his house and his neighbor’s, 
    // and is trying to get the neighborhood association to pay for 
    // it. He begins to solicit his neighbors to petition to get 
    // the association to build the wall. Unfortunately for Don 
    // Drumphet, he cannot read very well, has a very limited 
    // attention span, and can only remember two letters from 
    // each of his neighbors’ names. As he collects signatures, 
    // he insists that his neighbors keep truncating their names 
    // until two letters remain, and he can finally read them.

    // Your code will show Full name of the neighbor and the 
    // truncated version of the name as an array. If the number 
    // of the characters in name is less than or equal to two, 
    // it will return an array containing only the name as is.

    // // ***STARTER CODE***

    // function whoIsPaying(name){
    //     //your code here
    //   }   

    // //   ******TEST CASES*****
    
    // const { assert } = require('chai');

    // describe("Example tests", () => {
    //   it("Basic tests", () => {
    //     assert.deepEqual(whoIsPaying("Mexico"), ["Mexico", "Me"]);
    //     assert.deepEqual(whoIsPaying("Melania"), ["Melania", "Me"]);
    //     assert.deepEqual(whoIsPaying("Melissa"), ["Melissa", "Me"]);
    //     assert.deepEqual(whoIsPaying("Me"), ["Me"]);
    //     assert.deepEqual(whoIsPaying(""), [""]);
    //     assert.deepEqual(whoIsPaying("I"), ["I"]);
    //   });
    // });

    // ******MY ANSWER********
    function whoIsPaying(n){
    return n.length>2? [n,`${n[0]}${n[1]}`]:[n]
    //your code here
  }
