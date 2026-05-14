// Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

const promiseOkfor3 = Promise.resolve(3);
promiseOkfor3.then(result => console.log(result));
const rejectPromiseBoo = Promise.reject("Boo!");
rejectPromiseBoo.catch(error => console.log(error));
