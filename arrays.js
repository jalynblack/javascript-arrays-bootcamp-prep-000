chocolateBars = 
['snickers','hundred grand','kitkat','skittles'];


function addElementToBeginningOfArray() {
 var x = 'foo';
 var y = [1];
  return [x, ...y];
}

function destructivelyAddElementToBeginningOfArray(myArray, element) {

myArray.unshift(element);

return myArray;

}