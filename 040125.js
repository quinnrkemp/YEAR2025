  // CHALLENGE NAME-  Fun with ES6 Classes #1 - People, people, people


    // DESCRIPTION:

    // Time for some OOP fun!

    // Define a class Person with the following properties:
    
    // A constructor that accepts 4 arguments: firstName/FirstName (defaults to "John" 
    //     if not set), lastName/LastName (defaults to "Doe" if not set), age/Age (defaults 
    //         to 0 if not set) and gender/Gender (defaults to "Male" if not set). These 
    //         should be stored in this.firstName/this.FirstName, this.lastName/this.LastName, 
    //         this.age/this.Age and this.gender/this.Gender respectively.
    // A method sayFullName/SayFullName that accepts no arguments and returns the full name
    //  (e.g. "John Doe")
    // A class/static method greetExtraTerrestrials/GreetExtraTerrestrials that accepts one 
    // parameter raceName and returns "Welcome to Planet Earth raceName". For example, if the 
    // race name is "Martians", it should say "Welcome to Planet Earth Martians"
    // You may use any valid syntax you like; however, it is highly recommended that you 
    // complete this Kata using ES6 syntax and features.
    
    // Have fun! :D

    // // ***STARTER CODE***

    // class Person {
    //                 // Get coding in ES6 :D
    //       }

    // //   ******TEST CASES*****
    
    // const { assert } = require('chai');
    // describe("Example Tests", () => {
    //   it("should have the correct defaults", () => {
    //     let john = new Person();
    //     assert.strictEqual(john.firstName, "John");
    //     assert.strictEqual(john.lastName, "Doe");
    //     assert.strictEqual(john.age, 0);
    //     assert.strictEqual(john.gender, "Male");
    //     assert.strictEqual(john.sayFullName(), "John Doe");
    //   });
    //   it("should work with a person Jane Doe", () => {
    //     let jane = new Person("Jane", "Doe", 25, "Female");
    //     assert.strictEqual(jane.firstName, "Jane");
    //     assert.strictEqual(jane.lastName, "Doe");
    //     assert.strictEqual(jane.age, 25);
    //     assert.strictEqual(jane.gender, "Female");
    //     assert.strictEqual(jane.sayFullName(), "Jane Doe");
    //   });
    //   it("should have the class method", () => {
    //     assert.strictEqual(Person.greetExtraTerrestrials("Martians"), "Welcome to Planet Earth Martians");
    //   });
    // });

    // ******MY ANSWER********

    class Person {
        constructor (firstName= 'John',lastName= 'Doe',age= 0, gender= 'Male'){
          this.firstName=firstName
          this.lastName=lastName
          this.age=age
          this.gender=gender
        }
        sayFullName(){
          return `${this.firstName} ${this.lastName}`
        } 
       static greetExtraTerrestrials(raceName){
          return `Welcome to Planet Earth ${raceName}`
        }
       //   // Get coding in ES6 :D
       }