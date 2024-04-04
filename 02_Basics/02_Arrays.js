const marvel_heros = ["Thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)           //push method push elements in an existing Array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) //Concat method returns a new Array
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("IBTISAM"))
console.log(Array.from("IBTISAM"))              // convert values to Array
console.log(Array.from({name: "IBTISAM"}))         // interesting for interviews    //Tell the from function to make array from keys or Values
                                                                                    // otherwise from function could not make the array directly
                                                                                    // to the object

let score1 = 100  
let score2 = 200  
let score3 = 300

console.log(Array.of(score1, score2, score3));
