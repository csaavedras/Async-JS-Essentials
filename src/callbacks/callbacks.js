// Whats is a callback? A callback is a function that is passed as an argument to another function to be executed later.
// Where need to use callback? When we need to execute a function after another function has finished executing.
// Example? When we need to execute a function after a request has been made to a server.
// Example in React? When we need to execute a function after a component has been mounted.


// Example 1
function sum(num1, num2) {
    return num1 + num2;
}
function calculator(num1, num2, callback) {
    return callback(num1, num2);
}
console.log(calculator(2, 2, sum));

// Example 2
// Explain: The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
setTimeout(function () {
    console.log("Hello Javascript");
}, 3000);


// Example 3
function gretting(name) {
    console.log("Hello " + name);
}
setTimeout(gretting, 2000, "Camilo Saavedra");