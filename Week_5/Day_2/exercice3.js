// Instructions
// Using this code:

// const marioGame = {
//   detail : "An amazing game!",
//   characters : {
//       mario : {
//         description:"Small and jumpy. Likes princesses.",
//         height: 10,
//         weight: 3,
//         speed: 12,
//       },
//       bowser : {
//         description: "Big and green, Hates princesses.",
//         height: 16,
//         weight: 6,
//         speed: 4,
//       },
//       princessPeach : {
//         description: "Beautiful princess.",
//         height: 12,
//         weight: 2,
//         speed: 2,
//       }
//   },
// }
// Convert this JS object into a JSON object. What happens to the nested objects ?
// Convert and pretty print this JS object into a JSON object. Hint : Check out the JSON lesson on the platform.
// Use your web inspector to add a breakpoint. Check the values of the JSON object in the debugger.

const marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
};

const JsonMarioGame = JSON.stringify(marioGame);
console.log(JsonMarioGame);
const prettyJsonMarioGame = JSON.stringify(marioGame, null, 2);
console.log(prettyJsonMarioGame);

// First, with JSON.stringify(marioGame), the JS object is converted into one JSON string.
// The nested objects are not removed: they are also converted and kept inside the JSON string.
// Without pretty printing, the whole JSON string is displayed on one single line.

// Second, with JSON.stringify(marioGame, null, 2), the result is still one JSON string,
// but it is displayed in a more readable format with indentation.
// The second parameter, null, means we do not replace or filter any values.
// The third parameter, 2, means we use 2 spaces for indentation.

// When checking the values in the browser debugger with breakpoints,
// we can see that marioGame is still a JavaScript object,
// while JsonMarioGame and prettyJsonMarioGame are JSON strings.
// The pretty JSON string contains extra \n characters for line breaks and spaces for indentation.