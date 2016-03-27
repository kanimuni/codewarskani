// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. 
// The string can contains any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


function XO(str) {
  var strArr = str.split("");
  var xCount = 0;
  var oCount = 0;

  return strArr.reduce(function(accumulator, item) {
    if(item === 'x' || item === 'X') {
      xCount++;
    }
    if(item === 'o' || item === 'O') {
      oCount++;
    }

    if(xCount === oCount){
      return true;
    } else {
      return false;
    }
  }, true);
}