// Fetch the verse of the day from a public Bible API
fetch('https://beta.ourmanna.com/api/v1/get/?format=json')
    .then(response => response.json())
    .then(data => {
        // Update the page with the verse
        const verse = data.verse.details.text + " — " + data.verse.details.reference;
        document.getElementById('verse').innerText = verse;
    })
    .catch(error => {
        // Handle any errors
        document.getElementById('verse').innerText = 'Sorry, something went wrong. Please try again later.';
        console.error('Error fetching verse:', error);
    });