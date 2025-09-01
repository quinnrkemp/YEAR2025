  // CHALLENGE NAME-  Name on billboard

    // DESCRIPTION:

    // You can print your name on a billboard ad. Find out how 
    // much it will cost you. Each character has a default price 
    // of £30, but that can be different if you are given 2 parameters 
    // instead of 1 (always 2 for Java).

    // You can not use multiplier "*" operator.
    
    // If your name would be Jeong-Ho Aristotelis, ad would cost £600. 
    // 20 letters * 30 = 600 (Space counts as a character).

    // // ***STARTER CODE***

    // function billboard(name, price = 30){

    // }     

    // //   ******TEST CASES*****
    
    // const { assert } = require('chai');

    // // Create your own testcase with your name
    // it("Basic tests",() =>{
    //   assert.strictEqual(billboard("Jeong-Ho Aristotelis"), 600);
    //   assert.strictEqual(billboard("Abishai Charalampos"), 570);
    //   assert.strictEqual(billboard("Idwal Augustin"), 420);
    //   assert.strictEqual(billboard("Hadufuns John",20), 260);
    //   assert.strictEqual(billboard("Zoroaster Donnchadh"), 570);
    //   assert.strictEqual(billboard("Claude Miljenko"), 450);
    //   assert.strictEqual(billboard("Werner Vígi",15), 165);
    //   assert.strictEqual(billboard("Anani Fridumar"), 420);
    //   assert.strictEqual(billboard("Paolo Oli"), 270);
    //   assert.strictEqual(billboard("Hjalmar Liupold",40), 600);
    //   assert.strictEqual(billboard("Simon Eadwulf"), 390);
    // })

    // ******MY ANSWER********

    function billboard(n, p= 30){
        // answer #1
          let res=[]
          for (let i=0;i<=n.length-1;i++){
            res.push(p)
          }
          return res.reduce ((a,b)=>a+b,0)
        
          //  correct answer #2
        //   return n.split('').map(a=>a=p).reduce((a,b)=>a+b,0)
        } 