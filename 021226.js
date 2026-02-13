  // CHALLENGE NAME-  Welcome!

    // DESCRIPTION:

The Task
Think of a way to store the languages as a database. The languages are 
listed below so you can copy and paste!
Write a 'welcome' function that takes a parameter 'language', with a type 
String, and returns a greeting - if you have it in your database. It should 
default to English if the language is not in the database, or in the event 
of an invalid input.

    // ***STARTER CODE***

    

    //   ******TEST CASES*****
    


    // ******MY ANSWER********

function greet(language) {
	var welcomes = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
  };
  return language in welcomes ? welcomes[language] : welcomes.english;
};