function rangeOfNumbers(startNum, endNum) {
  if (startNum == endNum) {
    return [startNum];
  } else {
    const myArray = rangeOfNumbers(startNum, endNum - 1);
    myArray.push(endNum);
    console.log(myArray);
    return myArray;
  }
  return [];
};