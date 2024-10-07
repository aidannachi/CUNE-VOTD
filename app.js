// Fetch the verse of the day from a public Bible API
fetch('https://beta.ourmanna.com/api/v1/get/?format=json')
    .then(response => response.json())      // Parse response into JSON format to proccess in JS.
    .then(data => {
        // Update the page with the verse
        const verse = data.verse.details.text + " — " + data.verse.details.reference;       // Get the verse and reference and put it in verse.
        document.getElementById('verse').innerText = verse;     // Look for HTML elt w/ ID verse.
    })
    .catch(error => {
        // Handle any errors
        document.getElementById('verse').innerText = 'Sorry, something went wrong. Please try again later.';
        console.error('Error fetching verse:', error);
    });