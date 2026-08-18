const addMovieModal = document.getElementById('add-modal');

console.log(addMovieModal);

const startAddMovieButtom = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');

const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;

const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');

const deleteMovieModal = document.getElementById('delete-modal');



const movies = [];

const updateUi = () => {
    if(movies.length === 0){
        entryTextSection.style.display = 'block';
    }else{
        entryTextSection.style.display = 'none';
    }
};

const deleteMovie = (movieId) =>{

    let movieIndex = 0;
    for(const movie of movies){
        if(movie.id == movieId){
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list');
    listRoot.removeChild(listRoot.children[movieIndex]);
    cancelMovieDeletion();
    updateUi();
};

const cancelMovieDeletion = () =>{
    toggleBackground();
    deleteMovieModal.classList.remove('visible');

}

const deleteMovieHandler = (movieId) => {
    deleteMovieModal.classList.add('visible');
    toggleBackground();

    const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive');
    let confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');
   
    confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));
    confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

    cancelDeletionButton.removeEventListener('click', cancelMovieDeletion);

    cancelDeletionButton.addEventListener('click', cancelMovieDeletion);
    confirmDeletionButton.addEventListener(
        'click', 
        deleteMovie.bind(null, movieId)
    );
    
   //deleteMovie(movieId);
}; 

const renderNewMovieElement = (id, title, imgUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `

        <div class = "movie-element__image">
            <img src="${imgUrl}" alt="${title}">
        </div>

        <div class = "movie-element__info">
            <h2>${title}</h2>
            <p>${rating} /5 stars</p>
        </div>
    `;

    newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
};

const closeMovieModal = () => {
    addMovieModal.classList.remove('visible');
};

const showMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackground();
};

const toggleBackground = () => {
    backdrop.classList.toggle('visible');
};

const backdropClickHandler = () => {
    closeMovieModal();
    cancelMovieDeletion();
    clearMovieInput();
};

const cancelAddMovieHandler = () => {
    closeMovieModal();
    toggleBackground();
    clearMovieInput();
};

const clearMovieInput = () => {
    for(const usrInput of userInputs){
        usrInput.value = "";
    }
};

const addMovieHandler = () =>{
    const titleValue = userInputs[0].value;
    const imgUrlValue = userInputs[1].value;
    const ratingVaue = userInputs[2].value;

    if(
        titleValue.trim() === '' || 
        imgUrlValue.trim() === '' || 
        ratingVaue.trim() === '' ||
        +ratingVaue < 1 ||
        +ratingVaue > 5
    ){
        alert("Please Enter valid values (Rating 1-5).");
        return;        
    }

    const newMovie = {
        id : Math.random().toString(),
        title : titleValue,
        image : imgUrlValue,
        rating : ratingVaue
    };

    movies.push(newMovie);
    console.log(movies);
    closeMovieModal();
    toggleBackground();
    clearMovieInput();
    renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
    updateUi();
};

startAddMovieButtom.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);

