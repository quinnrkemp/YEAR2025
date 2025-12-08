  // CHALLENGE NAME-  Merge two sorted arrays into one


    // DESCRIPTION:



    // ***STARTER CODE***

    

    //   ******TEST CASES*****
    


    // ******MY ANSWER********

function mergeArrays(arr1, arr2) {
 let newArr= arr1.concat(arr2);

 newArr.sort((a, b) => a - b);
let uniqueArray = [...new Set(newArr)];
return uniqueArray

}