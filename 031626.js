  // CHALLENGE NAME-  Training JS #12: loop statement --for..in and for..of


    // DESCRIPTION:



    // ***STARTER CODE***

 function giveMeFive(obj){

  //coding here
  
}   

    //   ******TEST CASES*****
    


    // ******MY ANSWER********

    function giveMeFive(obj) {
  const fives = [];
  for (const k in obj) {
    const v = obj[k];
    if (k.length == 5) fives.push(k);
    if (v.length == 5) fives.push(v);
  }
  return fives;
}

