// # Primitive // Call by value

// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt

const score =  100
const scoreValue = 100.3

const isLogedIn = false
const outsideTemp = null
let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log( id === anotherId);


//const bigNumber = 354646646463186646n

// Reference (Non Primitive) // Call by reference

// Array, Objects, Functions


const heros = ["Shaktiman", "naagraj", "doga"];          //Reference Type or (non Primitive Type)
let myObj = {                                               // Object
    name: "IBTISAM",
    age: 22,
}


const myfunction = function(){
    console.log("Hello World");
}


console.log(typeof bigNumber);

//https://262.ecma-international.org/5.1/#sec-11.4.3



//*****************************************************
// There are two types of memory in javascript
// Stack memory used in  (Primitive(Copy of Value)) types on the other way , Heap (Non-Primitive(Reference of value it means change in orignal value))


let myYoutubename  = "IbtisamChoudhary"

let anothername = myYoutubename

anothername = "Ibtisamali"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email: "User@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "ibtisamali@google.com"

console.log(userOne.email);
console.log(userTwo.email);