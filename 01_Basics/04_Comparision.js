// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);


//Avoid Below these comparisions because these comparisions are confusing we are focusing on clean code.
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0 ); //The reason is that an equity check == and comparisons > < >= <= work differently.
                         //Comparisions convert null to a number, treating it as 0. That's why (3) null >= 0 is true and (1) null > 0
                         // is false.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === this check also check datatype as well.

console.log("2" === 2);