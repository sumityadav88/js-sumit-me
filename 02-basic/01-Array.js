// Array

const myArr = [0, 1, 2, 3, 4, 5];
// console.log(myArr[0]);


// const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr2[1]);

// Array methods
// myArr.push(6);
// console.log(myArr);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(9);
// myArr.shift(9);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(19));

// const newArr = myArr.join()// Here join bind our array and alo convert into string type

// console.log(myArr);
// console.log(typeof newArr);

// slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3);

// console.log(myn1);
// console.log("B ", myArr);

// const myn2 = myArr.splice(1, 3);
// console.log("C ", myArr);
// console.log(myn2);

// Array2
const marvel = ["thor", "Ironman", "spiderman"];
const dc = ["superman", "flash", "cyborg"];

// marvel.push(dc);
// console.log(marvel);
// console.log(marvel[3][1]);

// const allHeroes = marvel.concat(dc);
// console.log(allHeroes);

// marvel.concat(dc);
// console.log(marvel);

const all_new = [...marvel, ...dc]; // this syntax is known as spread 
// console.log(all_new);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real = another_array.flat(Infinity);
console.log(real);

console.log(Array.isArray("sumit"));
console.log(Array.from("sumit"));
console.log(Array.from({name : "sumit"})); // intersting case if it do not convert it itno array then return empty {}

let score1 = 100, score2 = 200, score3 = 300;
console.log(Array.of(score1, score2, score3));
