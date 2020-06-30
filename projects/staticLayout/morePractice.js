//Given Cel return far
// (c x 9/5) + 32   50
function CelsiusToFaharenheit(Celsius){
    Fahrenheit =  (Celsius * 9/5) + 32;
    return Fahrenheit;
}

console.log(CelsiusToFaharenheit(0));

// Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far. A win receives 3 points, a draw 1 point and a loss 0 points.

function footballResults(wins, draws, losses){
    points = (wins * 3) + (draws) + (losses*0);
    return points
}
console.log(footballResults(1,1,1))

var testExample = function(a) {
    var greeting = " Hi, My name is " + a;
    return greeting;
}
var a = "Tyler"
console.log(testExample(a));

(function() {
    var greeting = "Hi, My name is Tyler";
    console.log(greeting);
}())