const user = {
    username: "IBTISAM",
    Price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username  = "sam"
// username.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "IBTISAM"
//     console.log(this.username);
// }

// chai()

const chai =  () => {                       //Arrow Function
    let username = "IBTISAM"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//const addTwo = (num1, num2) =>  num1 + num2

//const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username: "IBTISAM"})


console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
  