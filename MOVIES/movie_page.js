const title = document.querySelector("title");
//const container = document.querySelector("#movie-container");
const movieTitle = document.querySelector("#movie-title");
const tagline = document.getElementById("tagline");
const description = document.getElementById("description");
const rating = document.getElementById("rating-value");
const releaseDate = document.getElementById("release-date");
const duration = document.getElementById("duration");
const language = document.getElementById("original-language");
const country = document.getElementById("origin-country");
const movieStatus = document.getElementById("status");
const genres = document.querySelector(".genre-bubble-row");
const playBtn = document.getElementById("play-now-btn");
const cardsDiv = document.querySelector(".production-com");

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
  tagline.textContent = movie.data.tagline;
  description.textContent = movie.data.overview;
  rating.textContent = movie.data.vote_average;
  releaseDate.textContent += movie.data.release_date;
  duration.textContent += `${movie.data.runtime} min`;
  language.textContent += movie.data.original_language.toUpperCase();
  country.textContent = movie.data.origin_country;
  movieStatus.textContent = movie.data.status;

  movie.data.genres.forEach((genre) => {
    const newGenreDiv = document.createElement("div");
    const newGenreSpan = document.createElement("span");
    newGenreSpan.textContent = genre.name;
    newGenreDiv.classList.add("genre-bubble");
    newGenreDiv.append(newGenreSpan);

    genres.append(newGenreDiv);
  });
  playBtn.addEventListener('click', () =>{

    window.open(movie.data.stream_url, "_blank");
    
  });

  movie.data.production_companies.forEach((company)=>{
    const newCard = document.createElement("div");
    newCard.classList.add("prod-info-card");
    
    const image = document.createElement("img");
    image.src = `https://image.tmdb.org/t/p/w500/${company.logo_path}`;
    image.alt = "img";
    const spanName = document.createElement('span');
    spanName.textContent = company.name;
    const spanCu = document.createElement('span');
    spanCu.textContent =company.origin_country;

    newCard.append(image);
    newCard.append(spanName);
    newCard.append(spanCu);
    cardsDiv.append(newCard);

  });
  
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
