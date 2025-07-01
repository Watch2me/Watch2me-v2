// 1234/tvshow-all.js (updated)

const part1 = 'ODhiNjNmMGNmYzQ1';
const part2 = 'MmE2NDdjYzM5NGQ3ZTNhNTIyMTQ=';
const apiKey = atob(part1 + part2);
const baseUrl = 'https://api.themoviedb.org/3';

let currentPage = 1;
let currentCategory = '';
let isLoading = false;
let currentGenre = '';
let currentSortBy = 'popularity.desc'; // Default sort by popularity descending for TV shows
let currentYear = '';
// let is4K = false; // Uncomment if you add a 4K checkbox for TV shows

const genreSelect = document.getElementById('genre-select');
const sortBySelect = document.getElementById('sort-by-select');
const yearSelect = document.getElementById('year-select');
// const _4kCheckbox = document.getElementById('4k-checkbox'); // Uncomment if you add a 4K checkbox

// Function to fetch TV show genres and populate the dropdown
const fetchTVShowGenres = async () => {
    try {
        const response = await fetch(`${baseUrl}/genre/tv/list?api_key=${apiKey}&language=en-US`);
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
        console.error('Error fetching TV show genres:', error);
    }
};

// Function to populate years dropdown for TV shows (e.g., last 100 years)
const populateYears = () => {
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= currentYear - 100; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        if (yearSelect) yearSelect.appendChild(option);
    }
};

const fetchAllTVShows = async (category, page, genreId = '', sortBy = '', year = '') => { // Removed _4k parameter for now
    if (isLoading) return; // Prevent multiple simultaneous fetches
    isLoading = true;

    const allTVShowsTitle = document.getElementById('all-tvshows-title');
    const allTVShowsContainer = document.getElementById('all-tvshows-container');
    const loadingSpinner = document.getElementById('loading-spinner');
    const noMoreTVShowsMsg = document.getElementById('no-more-tvshows');

    // Show loading spinner
    if (loadingSpinner) loadingSpinner.style.display = 'block';

    if (page === 1) { // Clear existing TV shows only if it's the first page
        if (allTVShowsContainer) allTVShowsContainer.innerHTML = '';
        if (noMoreTVShowsMsg) noMoreTVShowsMsg.style.display = 'none';
    }

    try {
        let url = '';
        let titleText = '';

        // Base URL for TV show discovery, which allows for more complex filtering
        url = `${baseUrl}/discover/tv?api_key=${apiKey}&language=en-US&page=${page}`;

        if (genreId) {
            url += `&with_genres=${genreId}`;
            const selectedGenreName = genreSelect.options[genreSelect.selectedIndex].textContent;
            titleText = `All ${selectedGenreName} TV Shows`;
        } else {
            // Original category handling, but now combined with filters
            switch (category) {
                case 'popular':
                    url += '&sort_by=popularity.desc';
                    titleText = 'All Popular TV Shows';
                    break;
                case 'trending':
                    url = `${baseUrl}/trending/tv/week?api_key=${apiKey}&page=${page}`; // Trending has a specific endpoint
                    titleText = 'All Trending TV Shows';
                    break;
                case 'top_rated':
                    url += '&sort_by=vote_average.desc';
                    titleText = 'All Top Rated TV Shows';
                    break;
                default:
                    // If no specific category from URL, default to popular or general explore
                    url += '&sort_by=popularity.desc';
                    titleText = 'Explore All TV Shows';
                    break;
            }
        }

        if (sortBy) {
            url += `&sort_by=${sortBy}`;
        }
        if (year) {
            url += `&first_air_date_year=${year}`;
        }
        // If you add a 4K filter, you would add logic here. TMDB does not have a direct '4K' filter for TV shows either.

        if (allTVShowsTitle) allTVShowsTitle.textContent = titleText;

        const response = await fetch(url);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
            data.results.forEach(tvShow => {
                const tvShowItem = document.createElement('div');
                tvShowItem.classList.add('movie-card'); // Use 'movie-card' for consistent styling and animation
                tvShowItem.style.position = 'relative'; // Ensure positioning context for overlay

                const tvShowPoster = document.createElement('img');
                tvShowPoster.classList.add('row__poster'); // Use 'row__poster' for the image
                tvShowPoster.src = tvShow.poster_path ? `https://image.tmdb.org/t/p/w500${tvShow.poster_path}` : 'https://placehold.co/200x300/000000/FFFFFF?text=No+Poster';
                tvShowPoster.alt = tvShow.name;

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
                overlayTitle.textContent = tvShow.name;

                // Create and append the rating and year
                const overlayMeta = document.createElement('p');
                overlayMeta.classList.add('overlay-meta');
                const firstAirYear = tvShow.first_air_date ? new Date(tvShow.first_air_date).getFullYear() : 'N/A';
                const rating = tvShow.vote_average ? tvShow.vote_average.toFixed(1) : 'N/A';
                overlayMeta.innerHTML = `<i class="fas fa-star" style="color: #f7c400;"></i> ${rating} &bull; ${firstAirYear}`; // Font Awesome star and bullet point

                // Append elements to the overlay
                overlay.appendChild(playButtonImg);
                overlay.appendChild(overlayTitle);
                overlay.appendChild(overlayMeta);

                tvShowItem.appendChild(tvShowPoster);
                tvShowItem.appendChild(overlay); // Add the overlay here

                tvShowItem.addEventListener('click', () => {
                    window.location.href = `tvshows-details.html?id=${tvShow.id}`;
                });

                if (allTVShowsContainer) allTVShowsContainer.appendChild(tvShowItem);
            });
            if (noMoreTVShowsMsg) noMoreTVShowsMsg.style.display = 'none';
        } else {
            if (noMoreTVShowsMsg) noMoreTVShowsMsg.style.display = 'block';
        }

    } catch (error) {
        console.error('Error fetching all TV shows:', error);
        if (allTVShowsTitle) allTVShowsTitle.textContent = 'Error loading TV shows.';
    } finally {
        if (loadingSpinner) loadingSpinner.style.display = 'none';
        isLoading = false;
    }
};

// Function to handle infinite scrolling (modified to use current filters)
const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 50 && !isLoading) { // -50 for a little buffer
        currentPage++;
        fetchAllTVShows(currentCategory, currentPage, currentGenre, currentSortBy, currentYear); // Removed _4k parameter
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    currentCategory = urlParams.get('category'); // Get category from URL

    // Initial fetch based on URL category or default
    fetchAllTVShows(currentCategory, currentPage, currentGenre, currentSortBy, currentYear);

    // Populate genres and years
    fetchTVShowGenres();
    populateYears();

    // Add event listeners for filter changes
    if (genreSelect) {
        genreSelect.addEventListener('change', () => {
            currentGenre = genreSelect.value;
            currentPage = 1; // Reset page on filter change
            fetchAllTVShows(currentCategory, currentPage, currentGenre, currentSortBy, currentYear);
        });
    }

    if (sortBySelect) {
        sortBySelect.addEventListener('change', () => {
            currentSortBy = sortBySelect.value;
            currentPage = 1; // Reset page on filter change
            fetchAllTVShows(currentCategory, currentPage, currentGenre, currentSortBy, currentYear);
        });
    }

    if (yearSelect) {
        yearSelect.addEventListener('change', () => {
            currentYear = yearSelect.value;
            currentPage = 1; // Reset page on filter change
            fetchAllTVShows(currentCategory, currentPage, currentGenre, currentSortBy, currentYear);
        });
    }

    // Uncomment if you add a 4K checkbox for TV shows
    // if (_4kCheckbox) {
    //     _4kCheckbox.addEventListener('change', () => {
    //         is4K = _4kCheckbox.checked;
    //         currentPage = 1; // Reset page on filter change
    //         fetchAllTVShows(currentCategory, currentPage, currentGenre, currentSortBy, currentYear, is4K);
    //     });
    // }

    window.addEventListener('scroll', handleScroll);
});