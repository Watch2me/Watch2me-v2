// 1234/movie-all.js (updated)

const part1 = 'ODhiNjNmMGNmYzQ1';
const part2 = 'MmE2NDdjYzM5NGQ3ZTNhNTIyMTQ=';
const apiKey = atob(part1 + part2);
const baseUrl = 'https://api.themoviedb.org/3';

let currentPage = 1;
let currentCategory = ''; // Stores the initial category from the URL (e.g., 'trending', 'popular')
let isLoading = false;
let currentGenre = '';
let currentSortBy = 'popularity.desc'; // Default sort by popularity descending
let currentYear = '';
let is4K = false; // Note: TMDB doesn't have a direct 4K filter, this is illustrative

const genreSelect = document.getElementById('genre-select');
const sortBySelect = document.getElementById('sort-by-select');
const yearSelect = document.getElementById('year-select');
const _4kCheckbox = document.getElementById('4k-checkbox');

// Function to fetch genres and populate the dropdown
const fetchGenres = async () => {
    try {
        const response = await fetch(`${baseUrl}/genre/movie/list?api_key=${apiKey}&language=en-US`);
        const data = await response.json();
        if (data.genres) {
            data.genres.forEach(genre => {
                const option = document.createElement('option');
                option.value = genre.id;
                option.textContent = genre.name;
                if (genreSelect) genreSelect.appendChild(option);
            });
        }
    } catch (error) {
        console.error('Error fetching genres:', error);
    }
};

// Function to populate years dropdown (e.g., last 100 years)
const populateYears = () => {
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= currentYear - 100; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        if (yearSelect) yearSelect.appendChild(option);
    }
};

// Main function to fetch movies based on current filters
const fetchAllMovies = async () => {
    if (isLoading) return; // Prevent multiple simultaneous fetches
    isLoading = true;

    const allMoviesTitle = document.getElementById('all-movies-title');
    const allMoviesContainer = document.getElementById('all-movies-container');
    const loadingSpinner = document.getElementById('loading-spinner');
    const noMoreMoviesMsg = document.getElementById('no-more-movies');

    // Show loading spinner
    if (loadingSpinner) loadingSpinner.style.display = 'block';

    if (currentPage === 1) { // Clear existing movies only if it's the first page
        if (allMoviesContainer) allMoviesContainer.innerHTML = '';
        if (noMoreMoviesMsg) noMoreMoviesMsg.style.display = 'none';
    }

    try {
        let url = '';
        let titleText = '';

        // Determine the base URL and initial title based on current state
        if (currentGenre || currentSortBy !== 'popularity.desc' || currentYear || is4K) {
            // If any filter is active, use the discover endpoint and build URL with filters
            url = `${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&page=${currentPage}`;
            if (currentGenre) {
                const selectedGenreName = genreSelect.options[genreSelect.selectedIndex].textContent;
                titleText = `All ${selectedGenreName} Movies`;
                url += `&with_genres=${currentGenre}`;
            } else {
                titleText = 'Explore Filtered Movies';
            }
            if (currentSortBy) {
                url += `&sort_by=${currentSortBy}`;
            }
            if (currentYear) {
                url += `&primary_release_year=${currentYear}`;
            }
            // TMDB doesn't have a direct "4K" filter. This is illustrative.
            // If TMDB had a specific '4k' flag in their API, you would add a parameter here.
        } else {
            // If no filters are active, use the initial category from URL or default
            switch (currentCategory) {
                case 'popular':
                    url = `${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&page=${currentPage}&sort_by=popularity.desc`;
                    titleText = 'All Popular Movies';
                    break;
                case 'trending':
                    url = `${baseUrl}/trending/movie/week?api_key=${apiKey}&page=${currentPage}`; // Trending has a specific endpoint
                    titleText = 'All Trending Movies';
                    break;
                case 'top_rated':
                    url = `${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&page=${currentPage}&sort_by=vote_average.desc`;
                    titleText = 'All Top Rated Movies';
                    break;
                default:
                    // Default to popular if no category and no filters
                    url = `${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&page=${currentPage}&sort_by=popularity.desc`;
                    titleText = 'Explore All Movies';
                    break;
            }
        }

        if (allMoviesTitle) allMoviesTitle.textContent = titleText;

        const response = await fetch(url);
        const data = await response.json();

        // Check if there are more pages available
        if (data.total_pages && currentPage >= data.total_pages) {
            if (noMoreMoviesMsg) noMoreMoviesMsg.style.display = 'block';
            window.removeEventListener('scroll', handleScroll); // Remove scroll listener if no more pages
        } else {
            if (noMoreMoviesMsg) noMoreMoviesMsg.style.display = 'none';
        }

        if (data.results && data.results.length > 0) {
            data.results.forEach(movie => {
                const movieItem = document.createElement('div');
                movieItem.classList.add('movie-card'); // Use 'movie-card' for consistent styling
                movieItem.style.position = 'relative'; // Ensure positioning context for overlay

                const moviePoster = document.createElement('img');
                moviePoster.classList.add('row__poster'); // Use 'row__poster' for the image
                moviePoster.src = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://placehold.co/200x300/000000/FFFFFF?text=No+Poster';
                moviePoster.alt = movie.title;

                // Create the overlay div
                const overlay = document.createElement('div');
                overlay.classList.add('poster-overlay'); // Re-use the existing overlay class

                // Create and append the play button image
                const playButtonImg = document.createElement('img');
                playButtonImg.src = 'img/play-button.png'; // Make sure you have this image in your img folder
                playButtonImg.alt = 'Play';
                playButtonImg.classList.add('play-button-overlay');

                // Create and append the title
                const overlayTitle = document.createElement('p');
                overlayTitle.classList.add('overlay-title');
                overlayTitle.textContent = movie.title;

                // Create and append the rating and year
                const overlayMeta = document.createElement('p');
                overlayMeta.classList.add('overlay-meta');
                const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A';
                const rating = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';
                overlayMeta.innerHTML = `<i class="fas fa-star" style="color: #f7c400;"></i> ${rating} &bull; ${releaseYear}`; // Font Awesome star and bullet point

                // Append elements to the overlay
                overlay.appendChild(playButtonImg);
                overlay.appendChild(overlayTitle);
                overlay.appendChild(overlayMeta);

                movieItem.appendChild(moviePoster);
                movieItem.appendChild(overlay); // Add the overlay here

                movieItem.addEventListener('click', () => {
                    window.location.href = `movie-details.html?movie_id=${movie.id}`;
                });

                if (allMoviesContainer) allMoviesContainer.appendChild(movieItem);
            });
            // noMoreMoviesMsg visibility is now handled by the total_pages check
        } else if (currentPage === 1) { // Only show "No Movies" if no results on the first page
            if (noMoreMoviesMsg) noMoreMoviesMsg.style.display = 'block';
        }

    } catch (error) {
        console.error('Error fetching all movies:', error);
        if (allMoviesTitle) allMoviesTitle.textContent = 'Error loading movies.';
    } finally {
        if (loadingSpinner) loadingSpinner.style.display = 'none';
        isLoading = false;
    }
};

// Function to handle infinite scrolling
const handleScroll = () => {
    // A slightly larger buffer for mobile might help
    const buffer = 200; // Load when user is within 200px of the bottom
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - buffer && !isLoading) {
        currentPage++;
        fetchAllMovies(); // Call without parameters, as it uses global state
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    currentCategory = urlParams.get('category'); // Get category from URL

    // Initial fetch based on URL category or default
    fetchAllMovies(); // Initial call, will use currentPage = 1 and category/defaults

    // Populate genres and years
    fetchGenres();
    populateYears();

    // Add event listeners for filter changes
    if (genreSelect) {
        genreSelect.addEventListener('change', () => {
            currentGenre = genreSelect.value;
            currentPage = 1; // Reset page on filter change
            fetchAllMovies(); // Re-fetch with new filter
            window.addEventListener('scroll', handleScroll); // Re-attach scroll listener to ensure it's active
        });
    }

    if (sortBySelect) {
        sortBySelect.addEventListener('change', () => {
            currentSortBy = sortBySelect.value;
            currentPage = 1; // Reset page on filter change
            fetchAllMovies(); // Re-fetch with new filter
            window.addEventListener('scroll', handleScroll); // Re-attach scroll listener
        });
    }

    if (yearSelect) {
        yearSelect.addEventListener('change', () => {
            currentYear = yearSelect.value;
            currentPage = 1; // Reset page on filter change
            fetchAllMovies(); // Re-fetch with new filter
            window.addEventListener('scroll', handleScroll); // Re-attach scroll listener
        });
    }

    if (_4kCheckbox) {
        _4kCheckbox.addEventListener('change', () => {
            is4K = _4kCheckbox.checked;
            currentPage = 1; // Reset page on filter change
            fetchAllMovies(); // Re-fetch with new filter
            window.addEventListener('scroll', handleScroll); // Re-attach scroll listener
        });
    }

    window.addEventListener('scroll', handleScroll); // Initial attachment of scroll listener
});
