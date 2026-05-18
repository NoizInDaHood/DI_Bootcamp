// Exercise 1 : Giphy API
// Instructions
// With your knewly accumulated knowledge of the Fetch API lets write some cool code!

// You will work with this part of the documention

// You will use this Gif URL: https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// Explanation of the Gif URL and the queries

// q Request Parameter: Search query term or phrase. Above, the URL is searching for “hilarious” gifs

// rating Request Parameter: Filters results by specified rating. We are searching for Level 1 gifs. Check out the ratings documentation

// api_key Request Paramater : GIPHY API Key. Our API KEY is hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// Create a program to retrieve the data from the API URL provided above.
// Use the fetch() method to make a GET request to the Giphy API and Console.log the Javascript Object that you receive.
// Make sure to check the status of the Response and to catch any occuring errors.

const apiGif = fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
apiGif
.then(response => {
    if (!response.ok) {
        throw new Error("Problem with the API request");
    }
    return response.json();  
})
.then(data => {
    console.log(data);
})
.catch(
    err => {
        console.log(err);
    }
);

// Exercise 2 : Giphy API
// Instructions
// Read carefully the documention to understand all the possible queries that the URL accept.
// Use the Fetch API to retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Make sure to check the status of the Response and to catch any occuring errors.
// Console.log the Javascript Object that you receive.


async function searchGif(word, num, position) {
    try {
        const gif10 = await fetch(`https://api.giphy.com/v1/gifs/search?q=${word}&limit=${num}&offset=${position}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
        const result = await gif10.json();
        console.log(result);
    } catch (error) {
        console.log(error);
    }

};
searchGif("sun", 10, 2);