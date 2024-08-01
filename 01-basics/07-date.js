// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreDate = new Date(2024, 7, 1); // In date month are start from 0
// let myCreDate = new Date(2024, 7, 1, 7, 20);
let myCreDate = new Date("2024-01-14");
// console.log(myCreDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDAte.getDay()} and the time `

newDate.toLocaleString('default', 
    {
        weekday: "long",
    }
)


