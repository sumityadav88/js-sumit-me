// Immediately Invoke function Exprssion (IIFE)

(function chai(){
    // named iife
    console.log(`DB Connected`);   
})();

( (name) => {
    // simple iife
    console.log(`DB connected Two ${name}`);    
} )("sumit");
