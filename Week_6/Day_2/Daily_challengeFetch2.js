//  Exercise 3 : Async function
// Instructions
// Improve the program below :

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));
// Create an async function, that will await for the above GET request.
// The program shouldn’t contain any then() method.
// Make sure to check the status of the Response and to catch any occuring errors.


async function fetchApi() {
    try {
        const request = await fetch("https://www.swapi.tech/api/starships/9/");
        const response = await request.json();
        console.log(response);
    } catch {
        err => {
        console.log(err);
    }}  
}
fetchApi();


// Exercise 4: Analyze
// Instructions
// Analyse the code provided below - what will be the outcome?

// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }
// async function asyncCall() {
//     console.log('calling');
//     let result = await resolveAfter2Seconds();
//     console.log(result);
// }

// asyncCall();

// first calling will be displayed, and then the result will be displayed 
// after 2 sec du to the await .. waiting for the promise to be solved (2 sec) tha was set in the first function