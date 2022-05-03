// The differences between Javascript expressions and declarations
// A JS expression is written like this:
const square = function(num) {
    return Math.pow(num, 2);
}
// While a JS declaration is written like this: 
function square(num) {
    return Math.pow(num, 2);
}
// 
//The benefit of using a declaration over an expression is in hoisting.
// Declarations can be hoisted, while expressions cannot.
// This means a function declaration can be referenced before the
// function is written out.
// 
// Function expressions are useful as they can use anonymous functions.
// This way, function expressions can be used as
// Immediately Invoked Function Expressions.
// Function expressions are also useful because they are only used when
// they are invoked. Which also means they are not avaliable outside of 
// the scope they are defined in.
// 
// Such as: 
const array = ['1', '2', '3', '4'];
array.map(item => parseInt(item));
// 
// Function expressions are more useful than declarations as they can 
// be more flexible. You can take an expression and use it inside of
// another function without the danger of it being referenced outside
// of that function.

