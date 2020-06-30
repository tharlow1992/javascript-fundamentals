// greeting()   <---Cannot read if greeting is NOT initialized before calling

let greeting = function greeting () {
    console.log('Hi, Im Paul');
}

greeting();
/*

An expression is NOT hoisted,
but a Declaration IS.

*/