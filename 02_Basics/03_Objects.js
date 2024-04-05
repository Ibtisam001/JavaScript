// Singleton        // jab ham litterls ki tara declare krtay hain tu singleton ni banta hai. constructor se agar banay gaa tu singleton banay ga.


// object literals
// Object.create       // object bananay ka aik yai bhi tareeka hai. yai banta constractor method ke through asi ke andar singleton banta hai.

const mySym = Symbol("key1")

const JsUser = {
    name: "IBTISAM",             //Objects ke andar (keys) and (Values) ka chakar hota hai.
    "full name": "IBTISAM ALI",     // The Values only Access in square notation
    [mySym]:"myKey1",
    age: 26,
    location: "Gujrat",
    email: "aliibtisam39@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// //console.log(typeof JsUser.mySym)
// console.log(JsUser[mySym])

JsUser.email = "aliibtisam001@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "aliibtisam003@gmail.com"
console.log(JsUser);

JsUser.greeting = function (){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function (){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





