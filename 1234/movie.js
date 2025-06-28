const part1 = 'ODhiNjNmMGNmYzQ1'; 
const part2 = 'MmE2NDdjYzM5NGQ3ZTNhNTIyMTQ='; 
const apiKey = atob(part1 + part2);
const baseUrl = 'https://api.themoviedb.org/3';

// Helper function to fetch movies and populate the row
const fetchMovies = async (category, rowId) => {
    try {
        let url = '';
        switch (category) {
            case 'popular':
                url = `${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
                break;
            case 'trending':
                url = `${baseUrl}/trending/movie/week?api_key=${apiKey}`;
                break;
            case 'top_rated':
                url = `${baseUrl}/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;
                break;
            case 'action':
                url = `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=28&page=1`;
                break;
            case 'comedy':
                url = `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=35&page=1`;
                break;
            case 'horror':
                url = `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=27&page=1`;
                break;
            case 'romance':
                url = `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=10749&page=1`;
                break;
            case 'documentary':
                url = `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=99&page=1`;
                break;
            default:
                console.log('Unknown category');
                return;
        }

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);  // Log data for debugging

        const movieCards = document.getElementById(rowId);
        movieCards.innerHTML = ''; // Clear existing posters

        if (data.results && data.results.length > 0) {
            data.results.forEach(movie => {
                const movieCard = document.createElement('div');
                movieCard.classList.add('movie-card');
                movieCard.style.position = 'relative'; // Ensure the card has a position context for the icon

                // Movie poster
                const moviePoster = document.createElement('img');
                moviePoster.classList.add('row__poster');
                moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                moviePoster.alt = movie.title;

                // Add "Add to List" icon (Font Awesome plus icon)
                const addToListIcon = document.createElement('button');
                addToListIcon.classList.add('add-to-list-icon');
                addToListIcon.innerHTML = '<i class="fas fa-plus"></i>'; // Default plus icon

                // Check if the movie is in the local storage list
                let movieList = JSON.parse(localStorage.getItem('movieList')) || [];
                if (movieList.find(m => m.id === movie.id)) {
                    addToListIcon.querySelector('i').classList.remove('fa-plus');
                    addToListIcon.querySelector('i').classList.add('fa-minus'); // Set to minus if already in list
                }

                // Event listener for "Add to List" icon
                addToListIcon.addEventListener('click', (event) => {
                    event.stopPropagation();  // Prevent movie click event
                
                    // Toggle between plus and minus icons
                    const icon = addToListIcon.querySelector('i');
                    if (icon.classList.contains('fa-plus')) {
                        icon.classList.remove('fa-plus');
                        icon.classList.add('fa-minus');
                        
                        // Add the movie to localStorage
                        movieList.push(movie);  // Add the movie to the list
                        localStorage.setItem('movieList', JSON.stringify(movieList)); // Save back to localStorage
                    } else {
                        icon.classList.remove('fa-minus');
                        icon.classList.add('fa-plus');
                
                        // Remove movie from localStorage
                        movieList = movieList.filter(m => m.id !== movie.id);  // Remove movie by ID
                        localStorage.setItem('movieList', JSON.stringify(movieList)); // Save back to localStorage
                    }
                });

                // Append the poster and icon to the movie card
                movieCard.appendChild(moviePoster);
                movieCard.appendChild(addToListIcon);

                // Add click event to each movie poster to redirect to the movie details page
                movieCard.addEventListener('click', () => {
                    window.location.href = `movie-details.html?movie_id=${movie.id}`;
                });

                movieCards.appendChild(movieCard);
            });
        } else {
            console.log(`No results for category: ${category}`);
        }
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the movie list from localStorage
    let movieList = JSON.parse(localStorage.getItem('movieList')) || [];

    // Get the container where movies will be displayed
    const movieListContainer = document.getElementById('movie-list-container');

    // Check if the list is empty
    if (movieListContainer && movieList.length === 0) { // Added check for movieListContainer
        movieListContainer.innerHTML = '<p>Your movie list is empty!</p>';
        return;
    } else if (movieListContainer) { // Only proceed if container exists
        // Loop through the list of movies and display them
        movieList.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');

            // Movie poster
            const moviePoster = document.createElement('img');
            moviePoster.classList.add('row__poster'); // Same class as the main page
            moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            moviePoster.alt = movie.title;

            // Movie title
            const movieTitle = document.createElement('p');
            movieTitle.textContent = movie.title;

            // Append poster and title to the movie card
            movieCard.appendChild(moviePoster);
            movieCard.appendChild(movieTitle);

            // Add the movie card to the movie list container
            movieListContainer.appendChild(movieCard);

            // Add click event to each movie poster to redirect to the movie details page
            movieCard.addEventListener('click', () => {
                window.location.href = `movie-details.html?movie_id=${movie.id}`;
            });
        });
    }
});

const fetchBanner = async () => {
    try {
        // Fetch popular movies from the API
        const url = `${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
        const response = await fetch(url);
        const data = await response.json();

        // Select a random movie from the list of popular movies
        const movie = data.results[Math.floor(Math.random() * data.results.length)];
        const movieId = movie.id;

        // ----------------------
        // Update Banner with Movie Data
        // ----------------------

        const banner = document.querySelector('.banner');
        const bannerContents = document.querySelector('.banner__contents');
        const trailerContainer = document.getElementById('trailer-container');
        const trailerIframe = document.getElementById('trailer-iframe');

        // Create and add "TOP 10" label
        let topTenLabel = document.querySelector('.top-ten-label');
        if (!topTenLabel) { // Create only if it doesn't exist
            topTenLabel = document.createElement('div');
            topTenLabel.classList.add('top-ten-label');
            banner.appendChild(topTenLabel);
        }
        topTenLabel.textContent = "TOP 10";

        // Set the banner title to the selected movie's title
        const bannerTitle = document.querySelector('.banner__title');
        bannerTitle.textContent = movie.title;

        // Set the banner description (limit to 150 characters for brevity)
        const bannerDescription = document.querySelector('.banner__description');
        bannerDescription.textContent = movie.overview.length > 150 ? movie.overview.substring(0, 150) + '...' : movie.overview;

        // Set the banner background image using the movie's backdrop
        banner.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`;

        // ----------------------
        // Fetch and Play Trailer
        // ----------------------
        const videosUrl = `${baseUrl}/movie/${movieId}/videos?api_key=${apiKey}`;
        const videosResponse = await fetch(videosUrl);
        const videosData = await videosResponse.json();

        const trailer = videosData.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');

        if (trailer) {
            setTimeout(() => {
                bannerContents.style.display = 'none'; // Hide banner content
                trailerContainer.style.display = 'block'; // Show trailer container
                trailerIframe.src = `https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailer.key}`;
            }, 3000); // 3-second delay
        } else {
            console.log('No trailer found for this movie.');
            // Optionally, if no trailer is found, keep the banner contents visible
            bannerContents.style.display = 'block';
            trailerContainer.style.display = 'none';
        }

        // ----------------------
        // Play Button Functionality
        // ----------------------
        const playButton = document.getElementById('play-button');
        playButton.addEventListener('click', () => {
            window.location.href = `movie-details.html?movie_id=${movie.id}`;
        });

    } catch (error) {
        console.error('Error fetching banner data:', error);
    }
};

// Load a random movie for the banner when the page loads
fetchBanner();

const initArrowNavigation = () => {
    // Find all rows of posters (e.g., netflixOriginals, topRated, etc.)
    const allRows = document.querySelectorAll('.row__posters');

    // Loop over each row and add the scroll functionality
    allRows.forEach(rowPosters => {
        const prevButton = rowPosters.parentElement.querySelector('.arrow-button.prev');
        const nextButton = rowPosters.parentElement.querySelector('.arrow-button.next');
        let scrollAmount = 0;
        const scrollStep = 220; // Adjust scroll step to your preference

        // Check if both buttons exist
        if (prevButton && nextButton) {
            // Scroll left (previous)
            prevButton.addEventListener('click', () => {
                // Ensure we don't scroll past the start
                if (scrollAmount > 0) {
                    scrollAmount -= scrollStep;
                    rowPosters.scrollTo({
                        left: scrollAmount,
                        behavior: 'smooth'
                    });
                }
            });

            // Scroll right (next)
            nextButton.addEventListener('click', () => {
                // Ensure we don't scroll past the end
                const maxScroll = rowPosters.scrollWidth - rowPosters.clientWidth;
                if (scrollAmount < maxScroll) {
                    scrollAmount += scrollStep;
                    rowPosters.scrollTo({
                        left: scrollAmount,
                        behavior: 'smooth'
                    });
                }
            });
        }
    });
};

// Toggle the search bar visibility when clicking the search icon
function toggleSearchBar() {
    const searchBar = document.querySelector('.search-bar');
    searchBar.classList.toggle('show');
}

// Close the search bar if clicked outside
document.addEventListener('click', function(event) {
    const searchBar = document.querySelector('.search-bar');
    const searchIcon = document.querySelector('.icon i.fa-search');
    const iconsContainer = document.querySelector('.icons-container');

    // Check if the click was outside the search bar or any of the icons
    if (searchBar && iconsContainer && !searchBar.contains(event.target) && !iconsContainer.contains(event.target)) {
        searchBar.classList.remove('show');
    }
});

function openSearchPage() {
    // Magbukas ug new page
    window.location.href = 'search.html';  // I-replace ang 'search.html' sa URL sa imong gustong page
}

// Array of movie endpoints with custom server names
const MOVIE_ENDPOINTS = [
    { url: 'https://player.videasy.net/movie/', name: 'Mythical 4K(Recommended, Auto Switch Server)' },
    { url: 'https://vidsrc.cc/v2/embed/movie/', name: 'Legend(NOADSFAST)' },
    { url: 'https://vidlink.pro/movie/', name: 'Warrior' },
    { url: 'https://api.hexa.watch/movie/', name: 'Epic(No Ads)' },
    { url: 'https://111movies.com/movie/', name: 'Mythic(Fast)' },
    { url: 'https://rivestream.live/embed?type=movie&id=', name: 'Grand Master' },
    { url: 'https://vidsrc.dev/embed/movie/', name: 'Divine' },
    { url: 'https://vidsrc.io/embed/movie/', name: 'Sniper' },
    { url: 'https://moviesapi.club/movie/', name: 'KUPAL(Decent)' }
];

// Get the movie ID from the URL query string
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('movie_id');

// Variable to keep track of the current server index
let currentServerIndex = 0; // To store which server is currently selected

// Fetch movie details based on the movieId
const fetchMovieDetails = async () => {
    if (!movieId) return; // Exit if no movie ID is found

    try {
        // Fetch the movie details using the movie ID
        const url = `${baseUrl}/movie/${movieId}?api_key=${apiKey}&language=en-US`;
        const response = await fetch(url);
        const movie = await response.json();

        // Movie Poster
        const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        const moviePosterElement = document.getElementById('movie-poster');
        if (moviePosterElement) moviePosterElement.src = posterUrl;

        // Movie Background
        const backdropUrl = movie.backdrop_path ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}` : 'https://via.placeholder.com/1500x800?text=No+Backdrop+Available';
        const blurredBackground = document.querySelector('.blurred-background');
        if (blurredBackground) blurredBackground.style.backgroundImage = `url(${backdropUrl})`;

        // Movie Description
        const movieDescriptionElement = document.getElementById('movie-description');
        if (movieDescriptionElement) movieDescriptionElement.textContent = movie.overview;

        // Movie Rating (star rating)
        const movieRating = movie.vote_average; // Rating from 1 to 10
        const starContainer = document.getElementById('movie-rating');
        if (starContainer) {
            starContainer.innerHTML = ''; // Clear existing stars

            const filledStars = Math.round(movieRating / 2); // Convert 10-point rating to 5-point scale
            const emptyStars = 5 - filledStars;

            // Add filled stars
            for (let i = 0; i < filledStars; i++) {
                const star = document.createElement('span');
                star.classList.add('star', 'filled');
                starContainer.appendChild(star);
            }

            // Add empty stars
            for (let i = 0; i < emptyStars; i++) {
                const star = document.createElement('span');
                star.classList.add('star', 'empty');
                starContainer.appendChild(star);
            }
        }

        // Movie Release Date
        const releaseDateTextElement = document.getElementById('release-date-text');
        if (releaseDateTextElement) releaseDateTextElement.textContent = `: ${movie.release_date}`;

        // Movie Genres
        const genreContainer = document.getElementById('movie-genres');
        if (genreContainer) {
            genreContainer.innerHTML = ''; // Clear existing genres
            movie.genres.forEach(genre => {
                const genreElement = document.createElement('span');
                genreElement.classList.add('genre');
                genreElement.textContent = genre.name;
                genreContainer.appendChild(genreElement);
            });
        }

        const watchNowBtn = document.getElementById('watch-now-btn');
        if (watchNowBtn) {
            watchNowBtn.addEventListener('click', () => {
                const iframeContainer = document.getElementById('iframe-container');
                if (iframeContainer) iframeContainer.style.display = 'flex';
            
                const iframe = document.getElementById('movie-iframe');
                if (iframe) iframe.src = `${MOVIE_ENDPOINTS[currentServerIndex].url}${movieId}?primaryColor=ffffff&secondaryColor=a2a2a2&iconColor=eefdec&icons=default&player=jw&title=true&poster=true&autoplay=true`;
            
                watchNowBtn.style.display = 'none';
            });
        }

        // Fetch More Like This Movies
        fetchMoreLikeThis(movieId);

        // Add functionality for Change Server Button
        const changeServerBtn = document.getElementById('change-server-btn');
        const serverDropdown = document.getElementById('server-dropdown');
        const serverList = document.getElementById('server-list');

        if (changeServerBtn && serverDropdown && serverList) {
            // Populate the server list with custom names
            MOVIE_ENDPOINTS.forEach((endpoint, index) => {
                const listItem = document.createElement('li');
                listItem.textContent = `${endpoint.name}`; // Use custom server name
                listItem.addEventListener('click', () => changeServer(index));
                serverList.appendChild(listItem);
            });

            // Show dropdown when Change Server button is clicked
            changeServerBtn.addEventListener('click', () => {
                serverDropdown.style.display = serverDropdown.style.display === 'none' ? 'block' : 'none';
            });

            // Function to change the server
            function changeServer(index) {
                currentServerIndex = index;
                const iframe = document.getElementById('movie-iframe');
                if (iframe) iframe.src = `${MOVIE_ENDPOINTS[currentServerIndex].url}${movieId}`;

                serverDropdown.style.display = 'none';
                console.log(`Changed to server: ${MOVIE_ENDPOINTS[currentServerIndex].name}`);
            }
        }

        const closeBtn = document.getElementById('close-iframe-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                const iframeContainer = document.getElementById('iframe-container');
                if (iframeContainer) {
                    iframeContainer.style.display = 'none';
                    iframeContainer.innerHTML = ''; // Clear iframe content
                }
                if (watchNowBtn) watchNowBtn.style.display = 'block';
                window.location.reload();
            });
        }
        
    } catch (error) {
        console.error('Error fetching movie details:', error);
    }
};

// Fetch More Like This Movies
const fetchMoreLikeThis = async (movieId) => {
    if (!movieId) return; // Exit if no movie ID is found

    try {
        const url = `${baseUrl}/movie/${movieId}/similar?api_key=${apiKey}&language=en-US`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        const similarMoviesContainer = document.getElementById('similar-movies-container');
        if (similarMoviesContainer) {
            similarMoviesContainer.innerHTML = ''; // Clear previous similar movies

            // Loop through the results and create movie grid items
            data.results.forEach(movie => {
                const movieItem = document.createElement('div');
                movieItem.classList.add('similar-movie');

                const movieImageUrl = movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image';
                const movieImage = document.createElement('img');
                movieImage.src = movieImageUrl;
                movieImage.alt = movie.title;
                movieImage.classList.add('similar-movie-img');

                const movieTitle = document.createElement('span');
                movieTitle.textContent = movie.title;
                movieTitle.classList.add('movie-title');

                movieItem.appendChild(movieImage);

                movieItem.addEventListener('click', () => {
                    window.location.href = `movie-details.html?movie_id=${movie.id}`; // Ensure it navigates to movie-details.html
                });

                similarMoviesContainer.appendChild(movieItem);
            });
        }
    } catch (error) {
        console.error('Error fetching similar movies:', error);
    }
};

// Fetch and display movie details on page load
fetchMovieDetails();

// Fetch data for different categories
fetchMovies('popular', 'netflixOriginals');
fetchMovies('trending', 'trendingNow');
fetchMovies('top_rated', 'topRated');
fetchMovies('action', 'actionMovies');
fetchMovies('comedy', 'comedyMovies');
fetchMovies('horror', 'horrorMovies');
fetchMovies('romance', 'romanceMovies');
fetchMovies('documentary', 'documentaries');

// Initialize arrow buttons functionality after fetching the movie data
document.addEventListener('DOMContentLoaded', initArrowNavigation);

// JavaScript for the Close Button (on movie-details.html, not movies.html)
const closeButton = document.getElementById('close-button');
if (closeButton) { // Check if the close button exists (it's likely on movie-details.html)
    closeButton.addEventListener('click', () => {
        window.location.href = 'movies.html';
    });
}

window.addEventListener("load", function() {
    const loadingScreen = document.getElementById("loading-screen");
    if (loadingScreen) { // Check if loading screen exists
        setTimeout(function() {
            loadingScreen.style.display = "none";
        }, 1000); // 1000ms = 1 second
    }
});
