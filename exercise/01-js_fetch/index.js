console.log("JS Loaded");

const baseQueryUrl = "https://api.tvmaze.com/search/shows/?q=";
const baseMovieUrl = "https://api.tvmaze.com/shows/";

const searchField = document.getElementById("show-search");
const select = document.getElementById("show-select");
const details = document.getElementById("show-details");
const searchForm = document.getElementById("search");

function addSelectOptions(keyWord, listOfShows) {
  let options = `<option value="">Shows matching ${keyWord}...</option>`;

  for (const element of listOfShows) {
    // Generate the list of shows dynamically
  }
}

async function handleSearch(event) {
  event.preventDefault();
  const keyWord = searchField.value;
  const searchQuery = baseQueryUrl + keyWord;
  searchField.value = "";

  // Fetch and manipulate DOM here
}

async function handleShowDetails(event) {
  const showId = select.value;
  if (!showId) return;

  const oneMovieQuery = ""; ///... create the query stirng here and then use it to fetch.

  // fetch and manipualte DOM here
}

searchForm.addEventListener("submit", handleSearch);
select.addEventListener("change", handleShowDetails);
