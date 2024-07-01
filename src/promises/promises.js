/* 

 What is a Promise? 
 A promise is an object that may produce a single value some time in the future: either a resolved value, 
 or a reason that it’s not resolved (e.g., a network error occurred). 

 A promise may be in one of 3 possible states: fulfilled, rejected, or pending. 
 Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.

 Why is important to use Promises? 
 Promises are a way to handle asynchronous operations in JavaScript, 
 such as fetching data from a server or reading a file.

*/

// Example 1 COWS

const cows = 10;
const countCows = new Promise((resolve, reject) => {
    cows > 10 ? resolve('Yes, there are more than 10 cows') : reject('No, there are less than 10 cows');
});

countCows.then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('Finished');
})

// Example 2 Delay Challenge

function delay(time, message) {
    // Tu código aquí 👈
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message)
        }, time)
    })
}

delay(3000, 'Hello World').then((message) => console.log(message))

