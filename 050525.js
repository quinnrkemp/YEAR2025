  // CHALLENGE NAME-  How many lightsabers do you own?


    // DESCRIPTION:

    // Inspired by the development team at Vooza, write the function that

    // accepts the name of a programmer, and
    // returns the number of lightsabers owned by that person.
    // The only person who owns lightsabers is Zach, by the way. He owns 
    // 18, which is an awesome number of lightsabers. Anyone else owns 0.
    
    // Note: your function should have a default parameter.
    
    // For example(Input --> Output):
    
    // "anyone else" --> 0
    // "Zach" --> 18

    // // ***STARTER CODE***

    // function howManyLightsabersDoYouOwn(name) {
    //            }   

    // //   ******TEST CASES*****
    
    // const { assert } = require("chai")

    // describe("Basic tests", () => {
    //   it("Testing for fixed tests", () => {
    //     assert.strictEqual( howManyLightsabersDoYouOwn(), 0 )
    //     assert.strictEqual( howManyLightsabersDoYouOwn("Adam"), 0 )
    //     assert.strictEqual( howManyLightsabersDoYouOwn("Zach"), 18 )
    //     })
    // })

    // ******MY ANSWER********

function howManyLightsabersDoYouOwn(name) {
    //   return name=='Zach'?18:0
      return name !='Zach'?0:18
    }