

let returnToSender = () => {
    let running = () => () => 'not here'
    return 'running';
}

let value = returnToSender(); 

console.log(value);

let what = () => returnToSender(); //implicit return with concise body
                             //concise body means implicit return
let hmmm = what();

console.log(hmmm);

function whatCanIDo(){
    return 6;
}