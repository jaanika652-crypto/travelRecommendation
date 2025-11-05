// DOM elements
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const clearBtn = document.getElementById("clear-button");
const resultsSection = document.getElementById("results");

// Fetch JSON data and set up event listeners
fetch('travel_recommendation_api.json')
  .then(response => response.json())
  .then(data => {
    console.log('JSON data loaded:', data); // Debug log

    searchBtn.addEventListener("click", () => {
      const keyword = searchInput.value.trim();
      if (keyword) {
        displayRecommendations(data, keyword);
      } else {
        resultsSection.innerHTML = "<p>Please enter a keyword to search.</p>";
      }
    });

    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      resultsSection.innerHTML = "";
    });
  })
  .catch(error => {
    resultsSection.innerHTML = "<p>Failed to load recommendations data.</p>";
    console.error('Error fetching JSON:', error);
  });

// Make sure you have your displayRecommendations function defined elsewhere in your code