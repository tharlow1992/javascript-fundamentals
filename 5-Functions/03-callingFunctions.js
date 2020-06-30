
function hi() {
    console.log('Ayo');
}

hi();
hi;
console.log(hi);
console.log(hi());

// Create a function that, when invoked lists out the numbers between 1-10;

let printNumbers = function potato() {
  for (let i=1; i < 10; i++) {
      console.log(i);
    }
}

printNumbers();

console.log(printNumbers);
// IIFE
(function () {console.log('why is this working') })();



let n = [];

for (let n = 0; n <= 10; n = n + 1) {
    console.log(n);
}

let x = [];

for (let x = 0; x <= 26; x = x * 2) {
    console.log(x);
}

console.log();


\\