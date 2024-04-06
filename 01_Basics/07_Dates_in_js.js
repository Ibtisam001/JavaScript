// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);                     // Date is an object in javaScript

// let myCreatedDate = new Date(2023, 0, 23)       // month is started from 0 in javascript in array index start from zero
//let myCreatedDate = new Date(2023, 0, 23, 5, 3) 
//let myCreatedDate = new Date("2023-01-14")                  // in this line month starts from 01 because in double digit
let myCreatedDate = new Date("01-14-2023") 
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);                                       // time in miliseconds from 1 jan 1970 to till date
// console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);                    // this line month start from zero 
console.log(newDate.getDay());

//`${newDate.getDay()} and the time`                  // String interpolation in javaScript

newDate.toLocaleString('default',{
    weekday: "long",
})
