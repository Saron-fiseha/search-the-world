Country Information Search Application

Purpose

-The Country Information Search Application is a web-based tool designed to provide users with detailed information about countries around the world. Users can search for a specific country by name, and the application will retrieve and display relevant data, including the country's flag, capital city, population, region, and languages spoken. This application aims to enhance user knowledge about different countries and facilitate quick access to geographical information.

Features

- Search Functionality: Users can input a country name to fetch related data.
- Data Display: The application displays information in a structured table format, making it easy to read and understand.
- Error Handling: The application gracefully handles errors, such as invalid input or network issues, providing user-friendly messages.

Design

i-Technology Stack

- HTML: Structure of the web application.
- CSS: Basic styling for a clean and user-friendly interface.
- JavaScript: Handles user interactions, data fetching, and dynamic content updates.

ii-Components

1. Search Input: A text input field where users can enter the name of a country.
2. Search Button: A button that triggers the search action when clicked.
3. Message Display: A div element that shows error or informational messages to the user.
4. Results Table: A table that displays the fetched country data, including:
   - Country Flag
   - Country Name
   - Capital City
   - Population
   - Region
   - Languages Spoken

Flow of the Application

1. User enters a country name in the search input field and clicks the search button.
2. The application validates the input to ensure it is not empty.
3. If valid, it fetches data from the REST Countries API based on the user's query.
4. The results are displayed in a table format. If no results are found or if there is an error, an appropriate message is shown.

Usage

i-Getting Started

1. Clone the Repository: 
      git clone https://github.com/Saron-fiseha/search-the-world.git
   cd search-the-world
   

2. Open index.html: Open the index.html file in your web browser.

ii-Searching for a Country

1. Type the name of a country in the search input field (e.g., "Canada").
2. Click on the "Search" button.
3. View the results displayed in the table below.

iii-Error Handling

- If you enter an invalid country name or leave the input empty, a message will prompt you to enter a valid country name.
- If there are issues fetching data (e.g., network errors), an appropriate message will inform you that no results were found.

