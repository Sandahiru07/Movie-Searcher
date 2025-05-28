let omdbKey = "YOUR_OMDB_API_KEY"; // Make sure this key is activated via your email link

function search() {
  const inputTag = document.getElementById("input");
  if (!(inputTag instanceof HTMLInputElement)) return;

  const name = inputTag.value.trim();
  if (!name) {
    showError("Please enter a movie title.");
    return;
  }

  const url = `https://www.omdbapi.com/?apikey=${omdbKey}&t=${encodeURIComponent(name)}`;
  const httpRequest = new XMLHttpRequest();
  httpRequest.open("GET", url);
  httpRequest.responseType = "json";
  httpRequest.send();

  httpRequest.onload = function () {
    const resultBox = document.getElementById("result");
    if (!resultBox) return;

    if (httpRequest.status === 200) {
      const data = httpRequest.response;

      if (data.Response === "False") {
        showError("Movie not found.");
      } else {
        displayMovie(data);
      }
    } else {
      showError("Failed to fetch movie data.");
    }
  };

  httpRequest.onerror = function () {
    showError("Network error occurred.");
  };
}

function displayMovie(movie) {
  const resultBox = document.getElementById("result");
  if (!resultBox) return;

  resultBox.innerHTML = `
    <div class="movie">
      <img src="${movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/150'}" alt="Poster">
      <div class="movie-details">
        <h2>${movie.Title} (${movie.Year})</h2>
        <p><strong>Genre:</strong> ${movie.Genre}</p>
        <p><strong>Director:</strong> ${movie.Director}</p>
        <p><strong>Actors:</strong> ${movie.Actors}</p>
        <p><strong>Plot:</strong> ${movie.Plot}</p>
        <p><strong>IMDB Rating:</strong> ${movie.imdbRating}</p>
      </div>
    </div>
  `;
}

function showError(message) {
  const resultBox = document.getElementById("result");
  if (!resultBox) return;
  resultBox.innerHTML = `<p class="error">${message}</p>`;
}
