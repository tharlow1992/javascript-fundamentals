
let greeting = function (name) {
    console.log(`Hello, ${name}!`);
}

greeting('Becky');


let printMyName = function(fName, lName) {
    let fullName = fName + " " + lName;  //  <--concatination
    console.log(`Hello, my name is ${ fullName}.`)
}

printMyName('Tyler', 'Harlow');


let calculateBalance = function (debits, credits) {
    // parameter debits = [array of numbers]
    // parameter credits = [ numbers ]
    let total = 0;
    for (debit of debits) {
        total -= debit;
     }
     for (credit of credits){
         total += credit;
     }
    console.log(total);
}
            // 0       1       2
let mydeb = [150.00, 34.00, 23.98]
let mycred = [1000.00, 50.00, 25.00]
calculateBalance(mydeb, mycred);
