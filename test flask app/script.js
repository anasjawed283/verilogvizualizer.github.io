// script.js

document.addEventListener('DOMContentLoaded', function () {
    const outputDiv = document.getElementById('output');
    
    // Make an HTTP GET request to the Python API
    fetch('http://localhost:5000/api')
        .then(response => response.json())
        .then(data => {
            // Update the content of the output div with the API response
            outputDiv.textContent = data.message;
        })
        .catch(error => {
            console.error('Error:', error);
            outputDiv.textContent = 'An error occurred while fetching data from the API.';
        });
});
