# 🎬 Movie Searcher App

A sleek and elegant web application that lets you search for your favorite movies using the [OMDb API](http://www.omdbapi.com/)!  
Just enter a movie title and get instant details including 🎞️ poster, 🎭 genre, 🎬 director, 👥 actors, 📖 plot summary, and ⭐ IMDb rating.

---

## 🚀 Features

✅ Search movies by title  
🖼️ Displays movie poster and detailed information  
📱 Responsive and user-friendly design  
⚠️ Error handling for empty or invalid movie titles  
✨ Clean, modern, and professional UI

---

## ⚙️ How It Works

This app uses **JavaScript** to send a request to the [OMDb API](http://www.omdbapi.com/) based on the title you type.  
It then receives a JSON response and dynamically updates the page to show the movie info.

---

## 🔑 Get Your OMDb API Key

To use this app, you’ll need an OMDb API key. It’s free and easy!

1. Go to [OMDb API - Get API Key](http://www.omdbapi.com/apikey.aspx).
2. Enter your email and choose the free plan.
3. Check your inbox for a verification email.
4. Click the activation link in the email to activate your key.
5. Replace the placeholder in `index.js` with your actual key:

```js
let omdbKey = "YOUR_OMDB_API_KEY";
