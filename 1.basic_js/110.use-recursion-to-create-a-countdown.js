// Only change code below this line
function countdown(n){
  if ( n <= 0) {
    return [];
  } else {
    const myArray = countdown(n - 1);
    myArray.unshift(n);
    console.log(myArray);
    return myArray;
  }
}
// Only change code above this line