// console.log("I");
// console.log("B");
// console.log("T");
// console.log("I");
// console.log("S");
// console.log("A");
// console.log("M");


function sayMyName(params) {
    console.log("I");
console.log("B");
console.log("T");
console.log("I");
console.log("S");
console.log("A");
console.log("M");
}

//sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

//     let result = number1 + number2
//     return result
//    // console.log("IBTISAM");
        return number1 + number2
}
const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function loginUserMessage(Username = "sam"){
    // if(Username === undefined)
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${Username} just logged in`
}

// console.log(loginUserMessage("IBTISAM"))
// console.log(loginUserMessage("IBTISAM"))

function calculateCartPrice(val1, val2, ...num1){               //  ... rest operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))
const user = {

    username: "IBTISAM",
    Price: 199
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.Price}`);
}

// handleobject(user)
handleobject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));