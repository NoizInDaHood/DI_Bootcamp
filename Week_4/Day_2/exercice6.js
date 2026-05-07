//  Exercise 6 : Fortune teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, 
// and married to <partner's name> with <number of children> kids."

const jobTit = "Full-Stack Dev";
const geoLoc = "Tel Aviv";
const partName = "Gal Gadot";
const numChild = 2;


((numChild,partName,geoLoc,jobTit)=> {
    console.log(`You will be a ${jobTit} in ${geoLoc}, and maried to ${partName} with${numChild} kids.`)
}) (numChild,partName,geoLoc,jobTit);