// # primitive
/*
7 types: string, Number, Boolean, Null, undefined, 
symbol, BigInt
*/
// const score = 100;
// const scoreValue = 100.3;

// const isloogedIn = False;
// const Outsidetemp = null;

// const id = Symbol('123');
// const anotherId = Symbol('123');

// console.log(id === AnotherId);

//const bigNumber = 33333333333333n;

/*
Reference(non primitive)
Array, Objects, Functions
*/
// const heros = ["Shaktiman", "nagraj", "doga"];
// let myobj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function(){
//      console.log("Hello World");
// }

// console.log(typeof myFunction);


// ***************************************

// stack (primitive), Heap (non-primitive)

let myYouTube = "Sumit@dot";

let anotherName = myYouTube;
anotherName = "Priya@dot";

console.log(myYouTube);
console.log(anotherName);

let user = {
    email: "user@google.com";
    upi: "user@ybl";
}

let userTwo = user;

userTwo.email = "Sumit@google.com";

 console.log(user.email);
 console.log(userTwo.email);

