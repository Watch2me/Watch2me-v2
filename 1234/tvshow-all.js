// 1234/tvshow-all.js (updated)

const part1 = 'ODhiNjNmMGNmYzQ1';
const part2 = 'MmE2NDdjYzM5NGQ3ZTNhNTIyMTQ=';
const apiKey = atob(part1 + part2);
const baseUrl = 'https://api.themoviedb.org/3';

let currentPage = 1;
let currentCategory = ''; // Stores the initial category from the URL (e.g., 'trending', 'popular')
let isLoading = false;
let currentGenre = '';
let currentSortBy = 'popularity.desc'; // Default sort for TV shows
let currentYear = '';

const genreSelect = document.getElementById('genre-select');
const sortBySelect = document.getElementById('sort-by-select');
const yearSelect = document.getElementById('year-select');

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

// Main function to fetch TV shows based on current filters
const fetchAllTVShows = async () => {
    if (isLoading) return; // Prevent multiple simultaneous fetches
    isLoading = true;

    const allTVShowsTitle = document.getElementById('all-tvshows-title');
    const allTVShowsContainer = document.getElementById('all-tvshows-container');
    const loadingSpinner = document.getElementById('loading-spinner');
    const noMoreTVShowsMsg = document.getElementById('no-more-tvshows');

    // Show loading spinner
    if (loadingSpinner) loadingSpinner.style.display = 'block';

    if (currentPage === 1) { // Clear existing TV shows only if it's the first page
        if (allTVShowsContainer) allTVShowsContainer.innerHTML = '';
        if (noMoreTVShowsMsg) noMoreTVShowsMsg.style.display = 'none';
    }

    try {
        let url = '';
        let titleText = '';

        // Determine the base URL and initial title based on current state
        if (currentGenre || currentSortBy !== 'popularity.desc' || currentYear) {
            // If any filter is active, use the discover endpoint and build URL with filters
            url = `${baseUrl}/discover/tv?api_key=${apiKey}&language=en-US&page=${currentPage}`;
            if (currentGenre) {
                const selectedGenreName = genreSelect.options[genreSelect.selectedIndex].textContent;
                titleText = `All ${selectedGenreName} TV Shows`;
                url += `&with_genres=${currentGenre}`;
            } else {
                titleText = 'Explore Filtered TV Shows';
            }
            if (currentSortBy) {
                url += `&sort_by=${currentSortBy}`;
            }
            if (currentYear) {
                url += `&first_air_date_year=${currentYear}`;
            }
        } else {
            // If no filters are active, use the initial category from URL or default
            switch (currentCategory) {
                case 'popular':
                    url = `${baseUrl}/discover/tv?api_key=${apiKey}&language=en-US&page=${currentPage}&sort_by=popularity.desc`;
                    titleText = 'All Popular TV Shows';
                    break;
                case 'trending':
                    url = `${baseUrl}/trending/tv/week?api_key=${apiKey}&page=${currentPage}`; // Trending has a specific endpoint
                    titleText = 'All Trending TV Shows';
                    break;
                case 'top_rated':
                    url = `${baseUrl}/discover/tv?api_key=${apiKey}&language=en-US&page=${currentPage}&sort_by=vote_average.desc`;
                    titleText = 'All Top Rated TV Shows';
                    break;
                default:
                    // Default to popular if no category and no filters
                    url = `${baseUrl}/discover/tv?api_key=${apiKey}&language=en-US&page=${currentPage}&sort_by=popularity.desc`;
                    titleText = 'Explore All TV Shows';
                    break;
            }
        }

        if (allTVShowsTitle) allTVShowsTitle.textContent = titleText;

        const response = await fetch(url);
        const data = await response.json();

        // Check if there are more pages available
        if (data.total_pages && currentPage >= data.total_pages) {
            if (noMoreTVShowsMsg) noMoreTVShowsMsg.style.display = 'block';
            window.removeEventListener('scroll', handleScroll); // Remove scroll listener if no more pages
        } else {
             if (noMoreTVShowsMsg) noMoreTVShowsMsg.style.display = 'none';
        }


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
            // noMoreTVShowsMsg visibility is now handled by the total_pages check
        } else if (currentPage === 1) { // Only show "No TV shows" if no results on the first page
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

// Function to handle infinite scrolling
const handleScroll = () => {
    // A slightly larger buffer for mobile might help
    const buffer = 200; // Load when user is within 200px of the bottom
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - buffer && !isLoading) {
        currentPage++;
        fetchAllTVShows(); // Call without parameters, as it uses global state
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    currentCategory = urlParams.get('category'); // Get category from URL

    // Initial fetch based on URL category or default
    fetchAllTVShows(); // Initial call, will use currentPage = 1 and category/defaults

    // Populate genres and years
    fetchTVShowGenres();
    populateYears();

    // Add event listeners for filter changes
    if (genreSelect) {
        genreSelect.addEventListener('change', () => {
            currentGenre = genreSelect.value;
            currentPage = 1; // Reset page on filter change
            fetchAllTVShows(); // Re-fetch with new filter
            window.addEventListener('scroll', handleScroll); // Re-attach scroll listener to ensure it's active
        });
    }

    if (sortBySelect) {
        sortBySelect.addEventListener('change', () => {
            currentSortBy = sortBySelect.value;
            currentPage = 1; // Reset page on filter change
            fetchAllTVShows(); // Re-fetch with new filter
            window.addEventListener('scroll', handleScroll); // Re-attach scroll listener
        });
    }

    if (yearSelect) {
        yearSelect.addEventListener('change', () => {
            currentYear = yearSelect.value;
            currentPage = 1; // Reset page on filter change
            fetchAllTVShows(); // Re-fetch with new filter
            window.addEventListener('scroll', handleScroll); // Re-attach scroll listener
        });
    }

    window.addEventListener('scroll', handleScroll); // Initial attachment of scroll listener
});
