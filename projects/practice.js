

function minToSec(minutes) {
    let secInOneMin = 60;
    return console.log( minutes * secInOneMin);
    
}
minToSec(10);


function secToMin(seconds){
    return console.log ( seconds / 60);
}
secToMin(120);


//Get the area of a rectangle
// length * width
// Paramters
function areaOfRectangle(length, width){
    area = length * width;
    return area;
}
// Arguments
console.log(areaOfRectangle(2000,5));


//area = x * y
function areaOfASquare(length, width){
    area = length * width
    return area;
}
console.log(areaOfASquare(20,5));


// area of a cube * width * height

function areaOfCube(length, width, height){
    area = length * width * height;
    return area;
}
length = ("Give me a length"); // us asking the user for input
area = areaOfCube(length, 5, 5); // running our function
console.log(`A cube with a height of 5inches and 5 inches wide and 5 inches long has a volume of ${areaOfCube(5, 5, 5)}`);


function sum(a, b) {
    return a + b;
  }
  console.log(sum(1, 2, 3, 4));

  function foo () {
    return bar();
    function bar() {
      return "Poppin' bottles";
    }
  }
  console.log(foo());

  function whatDoesItDo(val) {
    return val ? 1 : 2;
  }; 

  function whatDoesItDo(color) {    
    if (color !== 'blue' || color !== 'green') {
       color = 'red';
    }
    return color;
 }; 
 
 console.log(whatDoesItDo());

 let count = 0;
for ( ;  count < 9; ++count ) {
  console.log(count);
}


for ( let j = 5; j < 16 ; j++ ) {
    console.log(j);
  }

  for ( let j = 10;  j >  5; j-- ) {
    console.log(j);
  }

  for ( let j = 0;  j <  5; j++ ) {
    console.log(j + " ")
  }