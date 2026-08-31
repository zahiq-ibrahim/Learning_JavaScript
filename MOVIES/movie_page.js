const title = document.querySelector("title");
const container = document.querySelector("#movie-container");
const movieTitle = document.querySelector("#movie-title");

const movieId = "969681";
//calling

async function loadMovie() {
  const movie = await getMovie(movieId);
  console.log(movie); //yes

  const image = document.getElementById("movie-poster");
  image.src = `https://image.tmdb.org/t/p/w500/${movie.data.poster_path}`;
  image.alt = "movie poster";

  title.textContent = movie.data.title;
  movieTitle.textContent = movie.data.title;
}

async function getMovie(movieId) {
  try {
    const response = await fetch(
      `https://nex-play-media-service.onrender.com/api/v1/movie/details?id=${movieId}&lang=en-US`,
      {
        method: "GET",
      },
    );

    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch movie: ", error);
  }
}

loadMovie();
