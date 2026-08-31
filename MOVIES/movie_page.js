const title = document.querySelector("title");
const container = document.querySelector("#movie-container");

const movieId = "969681";
//calling

async function loadMovie() {
  const movie = await getMovie(movieId);
  console.log(movie);

  const image = document.createElement("img");
  image.src = `https://image.tmdb.org/t/p/w500/${movie.data.poster_path}`;
  image.alt = "movie poster";
  image.classList.add("movie-poster");

  title.textContent = "hello";

  container.append(image);
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
