//global varible

// let game = "sonic";
// console.log(game);

// function title(){
//     console.log('$(game)');
// }
// title();

// if(true){
//     console.log('$(game)');
// }

//local scope

// function a(){
//     let game = "sonic";
//     console.log(game);
// }

// a();

// if(true){
//     let game = "mario"; 
//     console.log(game);
// }

//function scope
// function hello(){
//     var gretting = "hello";

// }
// console.log(gretting);

// if (true){
//     var gretting= "hello";

// }
// console.log(gretting);

//block scope
// let x = 10;
// console.log(x);
// if(true){
//     let x = 2;
//     console.log(x);
// }
// console.log(x);

//task
function user() {
    let firstName = "shakib";
    let lastName = "ramez";
    let age = 21;
    let country = 'afghanistan';
    console.log(`${firstName} ${lastName} is ${age} years old and lives in ${country}`);
}

let firstName = 'James';

user();

let game = "Sonic";

if (true) {
    let game = "Mario";
    console.log(game);
}

console.log(game);
