  // CHALLENGE NAME-  Calculate BMI

    // DESCRIPTION:

    // Write function bmi that calculates body mass index (bmi = weight / height2).

    // if bmi <= 18.5 return "Underweight"
    
    // if bmi <= 25.0 return "Normal"
    
    // if bmi <= 30.0 return "Overweight"
    
    // if bmi > 30 return "Obese"

    // // ***STARTER CODE***

    // function bmi(weight, height) {
    //     return "";
    //   }   

    // //   ******TEST CASES*****
    
    // const { assert } = require('chai');

    // describe("BMI tests", () => {
    //   it("Sample tests", () => {
    //     assert.strictEqual(bmi(50, 1.80), "Underweight", "For weight = 50 and height = 1.80");
    //     assert.strictEqual(bmi(80, 1.80), "Normal", "For weight = 80 and height = 1.80");
    //     assert.strictEqual(bmi(90, 1.80), "Overweight", "For weight = 90 and height = 1.80");
    //     assert.strictEqual(bmi(100, 1.80), "Obese", "For weight = 100 and height = 1.80");
    //   });
    // });

    // ******MY ANSWER********

    function bmi(w, h) {
        let tot=w/(h**2)
         return tot<= 18.5?"Underweight":tot<= 25.0?"Normal":tot<= 30.0?"Overweight":'Obese'
       }