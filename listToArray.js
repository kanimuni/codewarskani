// Lists are data structures composed of nested objects, each containing a single value 
// and a reference to the next object.
// Here's an example of a list in JavaScript:

var list1 = {value: 1, next: {value: 2, next: {value: 3, next: null}}};
// should return [1,2,3]

function listToArray(list, resultArray) {
  resultArray = resultArray || [];
  
  resultArray.push(list.value);
  
  if(list.next === null)
  return resultArray;
  
  return listToArray(list.next, resultArray);
  
}