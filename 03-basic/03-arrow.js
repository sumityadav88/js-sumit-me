const user = {
    username : "Sumit",
    price: 99,

    welocomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);               
    }

}

// user.welocomeMessage();
// user.username = "Sam";
// user.welocomeMessage();

// console.log(this);

// function chai(){
//     let username = "Sumit"
//     console.log(this.username);   
// }

// chai()

// const chai = function (){
//     let username = "SUMIT"
//     console.log(this.username);    
// }

// chai()

// const chai = () => {
//     let username = "sumit"
//     console.log(this); 
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 4))

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "sumit"})

console.log(addTwo(3, 4))

const myArr = [2, 5, 3, 7, 8]
myArr.forEach()

