// Exercise 1 : Scope
// Instructions
// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.
// // #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// // #1.1 - run in the console:
// funcOne()
// // #1.2 What will happen if the variable is declared 
// // with const instead of let ?

// //#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()
// // #2.2 What will happen if the variable is declared 
// // with const instead of let ?


// //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour()
// funcFive()

// //#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix()
// // #4.2 What will happen if the variable is declared 
// // with const instead of let ?

// //#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// // #5.1 - run the code in the console
// // #5.2 What will happen if the variable is declared 
// // with const instead of let ?

function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
};
// a will be 3 as it was superior to 5, therefore it was change to 3 

funcOne();

let a = 0;
function funcTwo() {
    a = 5;
};

function funcThree() {
    alert(`inside the funcThree function ${a}`);
};
funcThree(); /// output would be : "inside the funcThree function 0" > because we declare a as 0 for value then we run the funcThree which displays the a
funcTwo(); // nothing will be display but the value of a will change to 5
funcThree(); // output would be : "inside the funcThree function 5" > because we called the funcTwo before that change the value of a to 5 

// // #2.2 What will happen if the variable is declared 
// // with const instead of let ?
/// >> if we declare a with a const then the value couldn't be modified, therefore the funcTwo will be useless and a will always be = 0

function funcFour() {
    window.a = "hello";
}
/// variable a value is changed at the window level. 

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}
funcFour();
funcFive();
/// therefore output will be : "inside the funcFive function"

let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}
funcSix();
/// a will be test since the a in the funcSix is only for this function and doesn't affect the a outside of it.
/// If we declare with const therefore a will be test as well since the a in the funcSix is only for this function and doesn't affect the a outside of it.
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
};
alert(`outside of the if block ${a}`);

// // #5.1 - run the code in the console
// // #5.2 What will happen if the variable is declared 
// // with const instead of let ?
/// in the if block a will be 5, outside of the if block a will be 2, since the let a in the if block is only for this block and doesn't affect the a outside of it.
/// if we declare with const it will be the same as let since the a in the if block is only for this block and doesn't affect the a outside of it.









