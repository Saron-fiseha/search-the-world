document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value.trim();
    const messageDiv = document.getElementById('message'); // Assuming you have a message div for displaying messages

    // Clear previous messages
    messageDiv.textContent = '';

    // Validate user input
    if (!validateInput(query)) {
        messageDiv.textContent = 'Please enter a valid country name.';
        document.getElementById('tableBody').innerHTML = ''; // Clear previous results
        return; // Stop execution if input is invalid
    }

    // Proceed with fetching data if input is valid
    fetch(`https://restcountries.com/v3.1/name/${query}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => displayCountries(data))
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('tableBody').innerHTML = '<tr><td colspan="6">No results found</td></tr>';
        });
});

// Validation function
function validateInput(input) {
    // Check if the input is empty or contains only whitespace
    return input.length > 0;
}

function displayCountries(countries) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    countries.forEach(country => {
        const row = document.createElement('tr');
        
        // Getting languages as a string
        const languages = country.languages ? Object.values(country.languages).join(', ') : 'N/A';

        row.innerHTML = `
            <td><img src="${country.flags.svg}" alt="Flag of ${country.name.common}" style="width: 50px; height: auto;"></td>
            <td>${country.name.common}</td>
            <td>${country.capital ? country.capital[0] : 'N/A'}</td>
            <td>${country.population.toLocaleString()}</td>
            <td>${country.region}</td>
            <td>${languages}</td>
        `;
        tableBody.appendChild(row);
    });
}
