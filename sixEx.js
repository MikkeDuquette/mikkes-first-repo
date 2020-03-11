
function countBs (str, k){
    let counter = 0;
    for (let j = 0; j < str.length; j++)
    if (str[j] === k){
        counter++;
    }
    return counter;
}


// Second Portion
function countChars(str, k){
    // initialise a counter
    let counter = 0;  
    //go through every counter in a string
    for (let i = 0; i < str.length; i++)
      if (str[i] === k ){
        counter++;
      }
    return counter;
  }
  
  console.log(countBs("kjdhs khdhj eBBBk","B"));