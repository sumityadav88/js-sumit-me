// singleton 
// object.create //made with the help of constructor

//object literals

// const mySym = Symbol("key1")

// const jsUser = {
//     name: "Sumit",
//     "full name": "Sumit Yadav",
//     [mySym]: "masterkey",
//     age: 18,
//     location: "Delhi",
//     email: "Sumit@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["monday", "Saturday"]
// }

// // console.log(jsUser.email);
// // console.log(jsUser["full name"]);
// // console.log(jsUser["mySym"]);
// // console.log(jsUser[mySym]);

// jsUser.email = "dell@chatgpt.com";
// // Object.freeze(jsUser);
// jsUser.email = "lenovo@gmial.com";
// // console.log(jsUser);

// jsUser.greeting = function(){
//     console.log(`Hello Js User, ${this.name}`);
// }

// jsUser.greetingTwo = function(){
//     console.log("Hello Js User");
// }
// // console.log(jsUser.greeting);
// // console.log(jsUser.greeting());

// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());

// obect L-2
// const tinderUser = new Object() //singelton object
// const tinderUser = {}    //Non singelton object

// tinderUser.id = "!23abc";
// tinderUser.name = "kelly";
// tinderUser.isLoggedIn = false;

// // console.log(tinderUser);

// const regularUser = {
//     email: "Kelly@gmail.com",
//     fullname: {
//         userFullName: {
//             firstName: "sumit",
//             lastName: "yadav"
//         }
//     }
// }

// console.log(regularUser.fullname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// // const obj3 = {obj1, obj2}
// // const obj3 = Object.assign({}, obj1, obj2, obj4);

// const obj3 = {...obj1, ...obj2} // spread value
// console.log(obj3);


// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     }
// ]

// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty(`isLogged`));

//Destructuring 

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "sumit"
}

//course.courseInstructor

const  {courseInstructor : Instructor }= course;

// console.log(courseInstructor);
console.log(Instructor);

// const navbar = ({company}) => {

// }

// navbar(company = "hitesh"); destructor in react

// {
//     "name": "sumit",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]



