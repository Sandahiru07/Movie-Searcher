# Movie Searcher App

A simple and elegant web application to search for movies using the [OMDb API](http://www.omdbapi.com/).  
Enter a movie title and instantly get detailed information including poster, genre, director, actors, plot summary, and IMDb rating.

---

## Features

- Search movies by title
- Display movie poster and key details
- User-friendly and responsive design
- Error handling for invalid or missing movie titles
- Clean and professional UI

---

## How It Works

This app sends a request to the OMDb API with the movie title you enter and displays the response data on the webpage. The OMDb API requires an API key to authenticate your requests.

---

## Getting Your OMDb API Key

1. Visit the official [OMDb API website](http://www.omdbapi.com/apikey.aspx).
2. Sign up with your email address.
3. You will receive an email with an API key and an activation link.
4. Click the activation link in the email to activate your key.
5. Use this key in your app to make authorized API requests.

---

## Setup & Running Locally

1. Clone or download this repository.
2. Open `index.js` and replace the placeholder API key with your own:

   ```js
   let omdbKey = "YOUR_OMDB_API_KEY";
