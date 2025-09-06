  // CHALLENGE NAME-  Safen User Input Part I - htmlspecialchar

    // DESCRIPTION:

    // Mission
    // Your mission is to implement a function that converts the following 
    // potentially harmful characters:
    
    // < --> &lt;
    // > --> &gt;
    // " --> &quot;
    // & --> &amp;

    // // ***STARTER CODE***

    // function htmlspecialchars(formData) {
    //     // Insert your code here
    //   }   

    // //   ******TEST CASES*****
    
    // const chai = require("chai");
    // const assert = chai.assert;
    // chai.config.truncateThreshold=0;
    
    // describe("Basic tests", () => {
    //   it("Simple tests", () => {
    //     assert.strictEqual(
    //       htmlspecialchars("<h2>Hello World</h2>"),
    //       "&lt;h2&gt;Hello World&lt;/h2&gt;"
    //     );
    //     assert.strictEqual(
    //       htmlspecialchars("Hello, how would you & I fare?"),
    //       "Hello, how would you &amp; I fare?"
    //     );
    //     assert.strictEqual(
    //       htmlspecialchars('How was "The Matrix"?  Did you like it?'),
    //       'How was &quot;The Matrix&quot;?  Did you like it?'
    //     );
    //     assert.strictEqual(
    //       htmlspecialchars("<script>alert('Website Hacked!');</script>"),
    //       "&lt;script&gt;alert('Website Hacked!');&lt;/script&gt;"
    //     );
    //   })
    // })

    // ******MY ANSWER********

    function htmlspecialchars(e) {
        return e.split('').map((f)=>f==='<'?'&lt;':f==='>'?'&gt;':f==='"'?'&quot;':f==='&'?'&amp;':f).join('')
       
       
       }