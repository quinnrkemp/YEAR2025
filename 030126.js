  // CHALLENGE NAME-  practice work- switch statements & "new Date"

  
    


    // ******MY ANSWER********


    let favFood = 'pizza'

    switch(favFood) {
        case 'cake':
            console.log(`That's right! ${favFood} is my favorit!`);
            break;
         case 'cookies':
            console.log(`That's right! ${favFood} is my favorit!`);
            break;
         case 'nachos':
            console.log(`That's right! ${favFood} is my favorit!`);
            break;
         case 'pizza':
            console.log(`That's right! ${favFood} is my favorit!`);
            break;
         case 'chicken':
            console.log(`That's right! ${favFood} is my favorit!`);
            break;
         default:
            console.log(`${favFood} not found...I'm hungry`);
        
    }

let currentDate= new Date()
let day= currentDate.getDay()
switch(day) {
        case 0:
            console.log(`That's right! The day is Sunday!`);
            break;
        case 1:
            console.log(`That's right! The day is Monday!`);
            break;
        case 2:
            console.log(`That's right! The day is Tuesday!`);
            break;
        case 3:
            console.log(`That's right! The day is Wednesday!`);
            break;
        case 4:
            console.log(`That's right! The day is Thursday!`);
            break;
        case 5:
            console.log(`That's right! The day is Friday!`);
            break; 
         default:
           console.log(`Yippee! It's Saturday!`);
    }

// console.log(new Date().toLocaleString())