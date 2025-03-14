  // CHALLENGE NAME-  Welcome!

    // DESCRIPTION:

    // Your start-up's BA has told marketing that your website has a 
    // large audience in Scandinavia and surrounding countries. Marketing 
    // thinks it would be great to welcome visitors to the site in their 
    // own language. Luckily you already use an API that detects the user's 
    // location, so this is an easy win.

    // The Task
    // Think of a way to store the languages as a database. The languages 
    // are listed below so you can copy and paste!
    // Write a 'welcome' function that takes a parameter 'language', with 
    // a type String, and returns a greeting - if you have it in your database. 
    // It should default to English if the language is not in the database, or 
    // in the event of an invalid input.
    // The Database
    // Please modify this as appropriate for your language.
    
    // [ ("english", "Welcome")
    // , ("czech", "Vitejte")
    // , ("danish", "Velkomst")
    // , ("dutch", "Welkom")
    // , ("estonian", "Tere tulemast")
    // , ("finnish", "Tervetuloa")
    // , ("flemish", "Welgekomen")
    // , ("french", "Bienvenue")
    // , ("german", "Willkommen")
    // , ("irish", "Failte")
    // , ("italian", "Benvenuto")
    // , ("latvian", "Gaidits")
    // , ("lithuanian", "Laukiamas")
    // , ("polish", "Witamy")
    // , ("spanish", "Bienvenido")
    // , ("swedish", "Valkommen")
    // , ("welsh", "Croeso")
    // ]
    // Possible invalid inputs include:
    
    // IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
    // IP_ADDRESS_NOT_FOUND - ip address not in the database
    // IP_ADDRESS_REQUIRED - no ip address was supplied

    // // ***STARTER CODE***

    // function greet(language) {
	
    // }

    // //   ******TEST CASES*****
    
    // const Test = require('@codewars/test-compat');

    // describe("Tests", () => {
    //   it("test", () => {
    // Test.assertEquals(greet('english'), 'Welcome', "Your function should have returned 'Welcome'. Try again.");
    // Test.assertEquals(greet('dutch'), 'Welkom', "Your function should have returned 'Welkom'. Try again.");
    // Test.assertEquals(greet('IP_ADDRESS_INVALID'), 'Welcome', "Your function should have returned 'Welcome'. Try again.");
    //   });
    // });

    // ******MY ANSWER********

    function greet(lg) {
        return lg==="czech"?"Your function should have returned 'Vitejte' Try again.":
        lg==="danish"?"Your function should have returned 'Velkomst' Try again.":
        lg==="dutch"?"Your function should have returned 'Welkom' Try again.":
        lg==="estonian"?"Your function should have returned 'Tere tulemast' Try again.":
        lg==="finnish"?"Your function should have returned 'Tervetuloa' Try again.":
        lg==="flemish"?"Your function should have returned 'Welgekomen' Try again.":
        lg==="french"?"Your function should have returned 'Bienvenue' Try again.":
        lg==="german"?"Your function should have returned 'Willkommen' Try again.":
        lg==="irish"?"Your function should have returned 'Failte' Try again.":
        lg==="italian"?"Your function should have returned 'Benvenuto' Try again.":
        lg==="latvian"?"Your function should have returned 'Gaidits' Try again.":
        lg==="lithuanian"?"Your function should have returned 'Laukiamas' Try again.":
        lg==="polish"?"Your function should have returned 'Witamy' Try again.":
        lg==="spanish"?"Your function should have returned 'Bienvenido' Try again.":
        lg==="swedish"?"Your function should have returned 'Valkommen' Try again.":
        lg==="welsh"?"Your function should have returned 'Croeso' Try again.":	
        `Welcome, Your function should have returned 'Welcome' Try again.` 
          }

        //   ****I dont understand what result is being requested**** 