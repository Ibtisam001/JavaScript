// array

const myArr = [0, 1, 2, 3, 4, 5]                //JavaScript Arrays are resizeable
const myHeros = ["Shaktiman", "naagraj"]       // Deep copy/Shallow Copy   / Deep Copy not change in orignal whereas shallow copy
                                                // Changes in origanal 

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[0]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// console.log(typeof newArr);


// Slics, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B " , myArr);

const myn2 = myArr.splice(1, 3)
console.log("C " , myArr);
console.log(myn2);