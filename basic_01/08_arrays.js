 const marvel_heros = ["thor", "IronMan","spiderman"]
const dc_heros = ["superman","flash","batman"]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

//console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array =  another_array.flat(Infinity)
//console.log(real_another_array)



// console.log(Array.isArray("Rohan"))
// console.log(Array.from("Rohan"))
// console.log(Array.from({name: "Rohan"})) //interesting

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3));

const myArr = [0,1,2,3,4,5]
let myArr1 = myArr.slice(1,3);
console.log(myArr1);

let myArr2 = myArr.splice(1,3);
console.log(myArr2);