  // CHALLENGE NAME-  L1: Bartender, drinks!

    // DESCRIPTION:

    // Complete the function that receives as input a string, and 
    // produces outputs according to the following table:

    // Input	Output
    // "Jabroni"	"Patron Tequila"
    // "School Counselor"	"Anything with Alcohol"
    // "Programmer"	"Hipster Craft Beer"
    // "Bike Gang Member"	"Moonshine"
    // "Politician"	"Your tax dollars"
    // "Rapper"	"Cristal"
    // anything else	"Beer"
    // Note: anything else is the default case: if the input to the 
    // function is not any of the values in the table, then the return 
    // value should be "Beer".
    
    // Make sure you cover the cases where certain words do not show up 
    // with correct capitalization. For example, the input "pOLitiCIaN" 
    // should still return "Your tax dollars".

    // // ***STARTER CODE***

    // function getDrinkByProfession(param){

    // }    

    // //   ******TEST CASES*****
    
    // const assert = require('chai').assert;

    // describe("Example Tests", () => {
    //   it("getDrinkByProfession", () => {
    //     assert.strictEqual(getDrinkByProfession("jabrOni"), "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
    //     assert.strictEqual(getDrinkByProfession("scHOOl counselor"), "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
    //     assert.strictEqual(getDrinkByProfession("prOgramMer"), "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
    //     assert.strictEqual(getDrinkByProfession("bike ganG member"), "Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
    //     assert.strictEqual(getDrinkByProfession("poLiTiCian"), "Your tax dollars", "'Politician' should map to 'Your tax dollars'");
    //     assert.strictEqual(getDrinkByProfession("rapper"), "Cristal", "'Rapper' should map to 'Cristal'");
    //     assert.strictEqual(getDrinkByProfession("pundit"), "Beer", "'Pundit' should map to 'Beer'");
    //     assert.strictEqual(getDrinkByProfession("Pug"), "Beer", "'Pug' should map to 'Beer'");
    //   });

    // ******MY ANSWER********

    function getDrinkByProfession(p){
        return p.toLowerCase()==="jabroni"?"Patron Tequila"
        : p.toLowerCase()==="school counselor"?	"Anything with Alcohol"
        : p.toLowerCase()==="programmer"?	"Hipster Craft Beer"
        : p.toLowerCase()==="bike gang member"?	"Moonshine"
        : p.toLowerCase()==="politician"?	"Your tax dollars"
        : p.toLowerCase()==="rapper"?	"Cristal"
        :	"Beer"
        }