  // CHALLENGE NAME-  How much water do I need?


    // DESCRIPTION:

    // My washing machine uses water amount of water to wash load (in JavaScript 
    //     and Python) or max_load (in Ruby) amount of clothes. You are given a 
    //     clothes amount of clothes to wash. For each single item of clothes 
    //     above the load, the washing machine will use 10% more water (multiplicative) 
    //     to clean.

    // For example, if the load is 10, the amount of water it requires is 5 and 
    // the amount of clothes to wash is 14, then you need 5 * 1.1 ^ (14 - 10) 
    // amount of water.
    
    // Write a function howMuchWater (JS)/how_much_water (Python and Ruby) to 
    // work out how much water is needed if you have a clothes amount of clothes. 
    // The function will accept 3 arguments: - water, load (or max_loadin Ruby) 
    // and clothes.
    
    // My washing machine is an old model that can only handle double the amount 
    // of load (or max_load). If the amount of clothes is more than 2 times the 
    // standard amount of load (max_load), return 'Too much clothes'. The washing 
    // machine also cannot handle any amount of clothes less than load (max_load). 
    // If that is the case, return 'Not enough clothes'.
    
    // The answer should be rounded to the nearest 2 decimal places.

    // // ***STARTER CODE***

    // function howMuchWater(water, load, clothes){
    
    //     // Insert your brilliant code here
    //    }

    // //   ******TEST CASES*****
    
    // const Test = require('@codewars/test-compat');

    // describe('Static tests', function(){
    //   it('Should work for static tests', function(){
    //     Test.assertEquals(howMuchWater(10,10,21), 'Too much clothes','');
    //     Test.assertEquals(howMuchWater(10,10,2), 'Not enough clothes','');
    //     Test.assertEquals(howMuchWater(10,11,20), 23.58,'');
    //     Test.assertEquals(howMuchWater(50,15,29), 189.87,'');
    //   });
    // })

    // ******MY ANSWER********

function howMuchWater(w, l, c){
    return c<l?`Not enough clothes`:c>2*l?`Too much clothes`:Number((w*(1.1**(c-l))).toFixed(2))
     // Insert your brilliant code here
   }