//  Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.


const myPromis4sec = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Succes!");
    }, 4000)
});

myPromis4sec.then(result => console.log(result));



