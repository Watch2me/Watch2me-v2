const part1 = 'ODhiNjNmMGNmYzQ1';
const part2 = 'MmE2NDdjYzM5NGQ3ZTNhNTIyMTQ=';
const apiKey = atob(part1 + part2);
const baseUrl = 'https://api.themoviedb.org/3';

// Function to fetch TV shows based on category
const fetchTVShows = async (category, rowId) => {
    try {
        let url = '';
        switch (category) {
            case 'popular':
                url = `${baseUrl}/tv/popular?api_key=${apiKey}&language=en-US&page=1`;
                break;
            case 'trending':
                url = `${baseUrl}/trending/tv/week?api_key=${apiKey}&page=1`;
                break;
            case 'top_rated':
                url = `${baseUrl}/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`;
                break;
            case 'drama':
                url = `${baseUrl}/discover/tv?api_key=${apiKey}&with_genres=18&page=1`; // Genre ID 18 is Drama
                break;
            case 'comedy':
                url = `${baseUrl}/discover/tv?api_key=${apiKey}&with_genres=35&page=1`; // Genre ID 35 is Comedy
                break;
            case 'romance':
                url = `${baseUrl}/discover/tv?api_key=${apiKey}&with_genres=10749&page=1`; // Genre ID 10749 is Romance
                break;
            case 'documentary':
                url = `${baseUrl}/discover/tv?api_key=${apiKey}&with_genres=99&page=1`; // Genre ID 99 is Documentary
                break;
            default:
                console.log('Unknown category');
                return;
        }

        const response = await fetch(url);
        const data = await response.json();
        console.log(data); // Log data for debugging

        const tvShowCards = document.getElementById(rowId);
        tvShowCards.innerHTML = ''; // Clear existing posters

        if (data.results && data.results.length > 0) {
            data.results.forEach(tvShow => {
                const tvShowCard = document.createElement('div');
                tvShowCard.classList.add('movie-card'); // Use 'movie-card' class for consistent styling
                tvShowCard.style.position = 'relative'; // Ensure the card has a position context for the icon and overlay

                // TV Show poster
                const tvShowPoster = document.createElement('img');
                tvShowPoster.classList.add('row__poster');
                tvShowPoster.src = `https://image.tmdb.org/t/p/w500${tvShow.poster_path}`;
                tvShowPoster.alt = tvShow.name;

                // Create the overlay div for TV shows
                const overlay = document.createElement('div');
                overlay.classList.add('poster-overlay'); // Re-use the existing overlay class

                // Create and append the play button image
                const playButtonImg = document.createElement('img');
                playButtonImg.src = 'img/play-button.png'; // Make sure you have this image in your img folder
                playButtonImg.alt = 'Play';
                playButtonImg.classList.add('play-button-overlay');

                // Create and append the title (use tvShow.name for TV shows)
                const overlayTitle = document.createElement('p');
                overlayTitle.classList.add('overlay-title');
                overlayTitle.textContent = tvShow.name;

                // Create and append the rating and year (use tvShow.first_air_date for TV shows)
                const overlayMeta = document.createElement('p');
                overlayMeta.classList.add('overlay-meta');
                const releaseYear = tvShow.first_air_date ? new Date(tvShow.first_air_date).getFullYear() : 'N/A';
                const rating = tvShow.vote_average ? tvShow.vote_average.toFixed(1) : 'N/A';
                overlayMeta.innerHTML = `<i class="fas fa-star" style="color: #f7c400;"></i> ${rating} &bull; ${releaseYear}`; // Font Awesome star and bullet point

                // Append elements to the overlay
                overlay.appendChild(playButtonImg);
                overlay.appendChild(overlayTitle);
                overlay.appendChild(overlayMeta);

                // Add "Add to List" icon (Font Awesome plus icon)
                const addToListIcon = document.createElement('button');
                addToListIcon.classList.add('add-to-list-icon');
                addToListIcon.innerHTML = '<i class="fas fa-plus"></i>'; // Default plus icon

                // Check if the TV show is in the local storage list
                let tvShowList = JSON.parse(localStorage.getItem('tvShowList')) || [];
                if (tvShowList.find(show => show.id === tvShow.id)) {
                    addToListIcon.querySelector('i').classList.remove('fa-plus');
                    addToListIcon.querySelector('i').classList.add('fa-minus'); // Set to minus if already in list
                }

                // Event listener for "Add to List" icon
                addToListIcon.addEventListener('click', (event) => {
                    event.stopPropagation(); // Prevent TV show click event

                    // Toggle between plus and minus icons
                    const icon = addToListIcon.querySelector('i');
                    if (icon.classList.contains('fa-plus')) {
                        icon.classList.remove('fa-plus');
                        icon.classList.add('fa-minus');

                        // Add the TV show to localStorage
                        tvShowList.push(tvShow); // Add the TV show to the list
                        localStorage.setItem('tvShowList', JSON.stringify(tvShowList)); // Save back to localStorage
                    } else {
                        icon.classList.remove('fa-minus');
                        icon.classList.add('fa-plus');

                        // Remove TV show from localStorage
                        tvShowList = tvShowList.filter(show => show.id !== tvShow.id); // Remove TV show by ID
                        localStorage.setItem('tvShowList', JSON.stringify(tvShowList)); // Save back to localStorage
                    }
                });

                // Append the poster, overlay, and icon to the TV show card
                tvShowCard.appendChild(tvShowPoster);
                tvShowCard.appendChild(overlay); // Add the overlay here
                tvShowCard.appendChild(addToListIcon);

                // Add click event to each TV show poster to redirect to the details page
                tvShowCard.addEventListener('click', () => {
                    window.location.href = `tvshows-details.html?id=${tvShow.id}`;
                });

                tvShowCards.appendChild(tvShowCard);
            });
        } else {
            console.log(`No results for category: ${category}`);
        }
    } catch (error) {
        console.error('Error fetching TV shows:', error);
    }
};

const fetchBanner = async () => {
    try {
        // Fetch trending TV shows from the API
        const url = `${baseUrl}/trending/tv/week?api_key=${apiKey}&language=en-US`;
        const response = await fetch(url);
        const data = await response.json();

        // Get a random TV show from the list of trending TV shows
        const tvShow = data.results[Math.floor(Math.random() * data.results.length)];
        const tvShowId = tvShow.id; // Get TV Show ID for trailer fetching

        // ----------------------
        // Update Banner with TV Show Data
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
        topTenLabel.textContent = "TOP 10"; // Text "TOP 10" added above the title

        // Set the banner title to the selected TV show's name
        const bannerTitle = document.querySelector('.banner__title');
        bannerTitle.textContent = tvShow.name;

        // Shorten the description (limit to 150 characters for brevity)
        const bannerDescription = document.querySelector('.banner__description');
        bannerDescription.textContent = tvShow.overview.length > 150 ? tvShow.overview.substring(0, 150) + '...' : tvShow.overview;

        // Set the background image for the banner using the TV show's backdrop
        banner.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${tvShow.backdrop_path})`;

        // ----------------------
        // Fetch and Play Trailer for TV Show
        // ----------------------
        const videosUrl = `${baseUrl}/tv/${tvShowId}/videos?api_key=${apiKey}`;
        const videosResponse = await fetch(videosUrl);
        const videosData = await videosResponse.json();

        // Find a trailer (preferably from YouTube)
        const trailer = videosData.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');

        if (trailer) {
            // Set the iframe source immediately, but it will be hidden by CSS opacity initially
            trailerIframe.src = `https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailer.key}&modestbranding=1&rel=0`;

            setTimeout(() => {
                // Add class to show trailer (fades in due to CSS transition)
                trailerContainer.style.display = 'block'; // Make sure the container itself is visible
                trailerContainer.classList.add('show-trailer'); // Add class to trigger opacity transition
            }, 3000); // 3-second delay
        } else {
            console.log('No trailer found for this TV show.');
            // If no trailer, ensure trailer container is hidden and its source is cleared
            trailerContainer.style.display = 'none'; // Ensure container is hidden
            trailerContainer.classList.remove('show-trailer'); // Remove class
            trailerIframe.src = ''; // Clear iframe source
        }

        // ----------------------
        // Play Button Functionality
        // ----------------------

        // Get the Play button
        const playButton = document.getElementById('play-btn');

        // Add event listener to the Play button to navigate to TV show details
        playButton.addEventListener('click', () => {
            window.location.href = `tvshows-details.html?id=${tvShow.id}`;
        });

    } catch (error) {
        console.error('Error fetching banner data:', error);
    }
};

// Load a random TV show for the banner when the page loads
window.onload = fetchBanner;

const initArrowNavigation = () => {
    // Find all rows of posters (e.g., popularTVShows, topRatedTVShows, etc.)
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

// --- EXPANDING SEARCH ICON LOGIC (Copied from movie.js) ---
document.addEventListener('DOMContentLoaded', () => {
    const searchIconContainer = document.getElementById('search-icon-container'); // The main div for search icon
    const expandedSearchInput = document.getElementById('expanded-search-input');
    const expandedSearchButton = document.getElementById('expanded-search-button');

    // Function to show/hide the expanded search bar
    const toggleExpandedSearchBar = (show) => {
        if (show) {
            searchIconContainer.classList.add('expanded');
            expandedSearchInput.focus(); // Focus the input when expanded
        } else {
            searchIconContainer.classList.remove('expanded');
            expandedSearchInput.value = ''; // Clear input when collapsed
        }
    };

    // Function to handle scroll to show/hide expanded search bar
    const handleScrollForSearch = () => {
        const scrollThreshold = 100; // Adjust this value as needed
        if (window.scrollY > scrollThreshold) {
            // Keep it open if user clicks, otherwise close it when scrolling back up
            if (!searchIconContainer.classList.contains('expanded')) {
                toggleExpandedSearchBar(true);
            }
        } else {
            toggleExpandedSearchBar(false);
        }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScrollForSearch);

    // Initial check in case the page loads scrolled down
    handleScrollForSearch();

    // Event listener for clicking the search icon itself to toggle or redirect
    if (searchIconContainer) {
        searchIconContainer.addEventListener('click', (event) => {
            // Check if the search bar is currently expanded
            const isExpanded = searchIconContainer.classList.contains('expanded');

            // Check if the click was directly on the icon or its immediate container,
            // not on the input field or button inside the expanded bar.
            const clickedOnIconOrContainer = event.target.classList.contains('fas') || event.target.id === 'search-icon-container';

            if (clickedOnIconOrContainer) {
                if (isExpanded) {
                    // If the search bar is already expanded (due to scroll or previous click),
                    // then we just toggle it closed. We don't want to redirect here.
                    toggleExpandedSearchBar(false); // Close the search bar
                } else {
                    // If the search bar is NOT expanded (only icon is visible),
                    // then redirect to search.html when the icon is clicked.
                    window.location.href = `search.html`;
                }
            }
            // If the click was inside the expanded input/button, let their specific handlers manage it.
            // No need to stopPropagation here as the handlers for input/button are specifically added later.
        });
    }

    // Event listener for the expanded search button
    if (expandedSearchButton) {
        expandedSearchButton.addEventListener('click', () => {
            const query = expandedSearchInput.value.trim();
            if (query) {
                window.location.href = `search.html?query=${encodeURIComponent(query)}`;
            } else {
                window.location.href = `search.html`; // Go to search page even if empty
            }
        });
    }

    // Handle pressing Enter key in the search input
    if (expandedSearchInput) {
        expandedSearchInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                expandedSearchButton.click(); // Simulate a click on the search button
            }
        });
    }

    // Close the search bar if clicked outside (but not on the search icon container itself)
    document.addEventListener('click', function(event) {
        if (searchIconContainer &&
            !searchIconContainer.contains(event.target) && // If click is not inside the search bar container
            searchIconContainer.classList.contains('expanded')) { // And if it's currently expanded
            toggleExpandedSearchBar(false);
        }
    });

    // Stop propagation for clicks INSIDE the input/button to prevent them from closing the bar
    if (expandedSearchInput) {
        expandedSearchInput.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    }
    if (expandedSearchButton) {
        expandedSearchButton.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    }
});
// --- END EXPANDING SEARCH ICON LOGIC ---

const SERIES_ENDPOINTS = [
    { url: 'https://111movies.com/tv/', name: 'Server 1 (Fast, Auto Next, Auto Play)' },
    { url: 'https://player.videasy.net/tv/', name: 'Server 2 (Recommended)' },
    { url: 'https://vidlink.pro/tv/', name: 'Server 3 (Auto Play)' },
    { url: 'https://vidsrc.vip/embed/tv/', name: 'Server 4 (Next Button)' },
    { url: 'https://vidsrc.rip/embed/tv/', name: 'Server 5' },
    { url: 'https://api.hexa.watch/tv/', name: 'Server 6 (No Ads)' },
    { url: 'https://vidsrc.dev/embed/tv/', name: 'Server 7' },
    { url: 'https://vidsrc.me/embed/tv/', name: 'Server 8' },
    { url: 'https://vidsrc.cc/v2/embed/tv/', name: 'Server 9' },
    { url: 'https://player.vidsrc.co/embed/tv/', name: 'Server 10' },
    { url: 'https://vidapi.xyz/tv/', name: 'Server 11' },
    { url: 'https://vidsrc.xyz/embed/tv/', name: 'Server 12' },
    { url: 'https://vidjoy.pro/embed/tv/', name: 'Server 13' },
    { url: 'https://www.2embed.cc/embedtvfull/', name: 'Server 14' },
    { url: 'https://vidsrc.dev/embed/tv/', name: 'Server 15' },
    { url: 'https://vidlink.pro/tv/', name: 'Server 16' }
];

const urlParams = new URLSearchParams(window.location.search);
const tvShowId = urlParams.get('id');
let currentServerIndex = 0;
let selectedSeason = null;
let selectedEpisode = null;

console.log('TV Show ID:', tvShowId);

const fetchTVShowDetails = async () => {
    if (!tvShowId) return; // Exit if no TV show ID is found

    try {
        const url = `${baseUrl}/tv/${tvShowId}?api_key=${apiKey}&language=en-US`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const tvShow = await response.json();

        // Populate poster and details
        const tvShowPosterElement = document.getElementById('tv-show-poster');
        const posterUrl = tvShow.poster_path ? `https://image.tmdb.org/t/p/w500${tvShow.poster_path}` : 'https://placehold.co/300x450/000000/FFFFFF?text=No+Poster';
        if (tvShowPosterElement) tvShowPosterElement.src = posterUrl;

        const backdropUrl = tvShow.backdrop_path ? `https://image.tmdb.org/t/p/original${tvShow.backdrop_path}` : 'https://placehold.co/1500x800/000000/FFFFFF?text=No+Backdrop+Available';
        const blurredBackground = document.getElementById('blurred-background');
        if (blurredBackground) blurredBackground.style.backgroundImage = `url(${backdropUrl})`;

        const tvShowTitleElement = document.getElementById('tv-show-title');
        if (tvShowTitleElement) tvShowTitleElement.textContent = tvShow.name || 'Unknown Title';

        const tvShowDescriptionElement = document.getElementById('tv-show-description');
        if (tvShowDescriptionElement) tvShowDescriptionElement.textContent = tvShow.overview || 'No description available.';

        const tvShowRating = tvShow.vote_average;
        const starContainer = document.getElementById('tv-show-rating');
        if (starContainer) {
            starContainer.innerHTML = '';
            const filledStars = Math.round(tvShowRating / 2);
            for (let i = 0; i < 5; i++) {
                const star = document.createElement('span');
                star.classList.add('star', i < filledStars ? 'filled' : 'empty');
                starContainer.appendChild(star);
            }
        }

        const tvShowFirstAirDate = tvShow.first_air_date ? new Date(tvShow.first_air_date).getFullYear() : "N/A";
        const airDateTextElement = document.getElementById('first-air-date-text');
        if (airDateTextElement) airDateTextElement.textContent = `Year: ${tvShowFirstAirDate}`;

        const tvShowGenresInlineContainer = document.getElementById('tv-show-genres-inline');
        if (tvShowGenresInlineContainer) {
            tvShowGenresInlineContainer.innerHTML = '';
            if (tvShow.genres && tvShow.genres.length > 0) {
                tvShow.genres.forEach(genre => {
                    const genreElement = document.createElement('span');
                    genreElement.classList.add('genre-tag');
                    genreElement.textContent = genre.name;
                    tvShowGenresInlineContainer.appendChild(genreElement);
                });
            }
        }

        // Fetch Cast
        const creditsUrl = `${baseUrl}/tv/${tvShowId}/credits?api_key=${apiKey}`;
        const creditsResponse = await fetch(creditsUrl);
        const credits = await creditsResponse.json();
        const castList = document.getElementById('tv-show-cast');
        if (castList) {
            castList.innerHTML = '';
            credits.cast.slice(0, 6).forEach(member => {
                const castMemberDiv = document.createElement('div');
                castMemberDiv.classList.add('cast-member');
                castMemberDiv.innerHTML = `
                    <img src="${member.profile_path ? `https://image.tmdb.org/t/p/w200${member.profile_path}` : 'https://placehold.co/100x100/CCCCCC/000000?text=No+Image'}" alt="${member.name}">
                    <p>${member.name}</p>
                `;
                castList.appendChild(castMemberDiv);
            });
        }

        // Fetch Seasons
        const seasonsContainer = document.getElementById('seasons-list');
        if (seasonsContainer) {
            seasonsContainer.innerHTML = '';
            tvShow.seasons.forEach(season => {
                if(season.season_number === 0) return; // Skip "Specials"
                const seasonItem = document.createElement('li');
                seasonItem.innerHTML = `<img src="${season.poster_path ? `https://image.tmdb.org/t/p/w200${season.poster_path}` : 'https://placehold.co/40x40'}" alt="Season ${season.season_number}"> Season ${season.season_number}`;
                seasonItem.addEventListener('click', (e) => {
                    e.stopPropagation();
                    selectedSeason = season.season_number;
                    loadEpisodes(selectedSeason);
                    toggleDropdown('seasons-list', false);
                    document.getElementById('episode-btn').style.display = 'block';
                    document.getElementById('season-btn').textContent = `Season ${selectedSeason}`;
                });
                seasonsContainer.appendChild(seasonItem);
            });
        }

        // Fetch Similar TV Shows
        fetchSimilarTVShows(tvShowId);

        // Function to toggle dropdown visibility
        const toggleDropdown = (dropdownId, shouldShow) => {
            const dropdown = document.getElementById(dropdownId);
            if(dropdown) {
                if(shouldShow) dropdown.classList.add('show');
                else dropdown.classList.remove('show');
            }
        };

        // Load Episodes for the selected season
        const loadEpisodes = async (seasonNumber) => {
            const episodesUrl = `${baseUrl}/tv/${tvShowId}/season/${seasonNumber}?api_key=${apiKey}&language=en-US`;
            const episodesResponse = await fetch(episodesUrl);
            const episodesData = await episodesResponse.json();
            const episodesContainer = document.getElementById('episodes-list');
            if (episodesContainer) {
                episodesContainer.innerHTML = '';
                episodesData.episodes.forEach(episode => {
                    const episodeItem = document.createElement('li');
                    episodeItem.innerHTML = `<img src="${episode.still_path ? `https://image.tmdb.org/t/p/w200${episode.still_path}` : 'https://placehold.co/40x40'}" alt="E${episode.episode_number}"> Episode ${episode.episode_number}: ${episode.name}`;
                    episodeItem.addEventListener('click', (e) => {
                        e.stopPropagation();
                        selectedEpisode = episode.episode_number;
                        playEpisode();
                        toggleDropdown('episodes-list', false);
                        document.getElementById('episode-btn').textContent = `Episode ${selectedEpisode}`;
                    });
                    episodesContainer.appendChild(episodeItem);
                });
            }
        };

        // Play selected episode
        const playEpisode = () => {
            if (!selectedSeason || !selectedEpisode) return;
            const selectedServerUrl = SERIES_ENDPOINTS[currentServerIndex].url;
            const iframeContainer = document.getElementById('iframe-container');
            const iframe = document.getElementById('tv-show-iframe');
            if (iframeContainer && iframe) {
                iframeContainer.style.display = 'flex';
                iframe.src = `${selectedServerUrl}${tvShowId}/${selectedSeason}/${selectedEpisode}`;
            }
        };

        // --- ITO ANG BAGONG LOGIC PARA SA SERVER AT IBA PANG BUTTONS ---
        const seasonBtn = document.getElementById('season-btn');
        const episodeBtn = document.getElementById('episode-btn');
        const changeServerBtn = document.getElementById('change-server-btn');
        const closeIframeBtn = document.getElementById('close-iframe-btn');

        const serverDropdown = document.getElementById('server-dropdown');
        const serverList = document.getElementById('server-list');

        // Function para palitan ang server
        const changeServer = (index) => {
            currentServerIndex = index;
            // Update active class
            document.querySelectorAll('#server-list li').forEach(item => item.classList.remove('active'));
            const activeItem = document.querySelector(`#server-list li[data-index='${index}']`);
            if (activeItem) activeItem.classList.add('active');
            
            // I-reload ang episode gamit ang bagong server kung may pinipili na
            if (selectedSeason && selectedEpisode) {
                playEpisode();
            }
            // Isara ang dropdown
            serverDropdown.classList.remove('show');
        };

        // I-populate ang server list (isang beses lang)
        serverList.innerHTML = '';
        SERIES_ENDPOINTS.forEach((server, index) => {
            const serverItem = document.createElement('li');
            serverItem.textContent = server.name;
            serverItem.dataset.index = index;
            if (index === 0) serverItem.classList.add('active');
            
            serverItem.addEventListener('click', (e) => {
                e.stopPropagation();
                changeServer(index);
            });
            serverList.appendChild(serverItem);
        });

        // Event listeners para sa mga button
        if(seasonBtn) seasonBtn.addEventListener('click', (e) => { e.stopPropagation(); document.getElementById('server-dropdown')?.classList.remove('show'); document.getElementById('episodes-list')?.classList.remove('show'); document.getElementById('seasons-list')?.classList.toggle('show'); });
        if(episodeBtn) episodeBtn.addEventListener('click', (e) => { e.stopPropagation(); document.getElementById('server-dropdown')?.classList.remove('show'); document.getElementById('seasons-list')?.classList.remove('show'); document.getElementById('episodes-list')?.classList.toggle('show'); });
        if(changeServerBtn) changeServerBtn.addEventListener('click', (e) => { e.stopPropagation(); document.getElementById('seasons-list')?.classList.remove('show'); document.getElementById('episodes-list')?.classList.remove('show'); document.getElementById('server-dropdown')?.classList.toggle('show'); });
        if(closeIframeBtn) closeIframeBtn.addEventListener('click', () => {
            const iframeContainer = document.getElementById('iframe-container');
            const iframe = document.getElementById('tv-show-iframe');
            if (iframeContainer) iframeContainer.style.display = 'none';
            if (iframe) iframe.src = '';
        });

        // Pangsara ng lahat ng dropdown kapag nag-click sa labas
        window.addEventListener('click', () => {
            document.getElementById('seasons-list')?.classList.remove('show');
            document.getElementById('episodes-list')?.classList.remove('show');
            document.getElementById('server-dropdown')?.classList.remove('show');
        });

    } catch (error) {
        console.error('Error fetching TV show details:', error);
        document.body.innerHTML = '<h1>Error loading TV show details.</h1>';
    }
};

const fetchSimilarTVShows = async (tvShowId) => { // Renamed from fetchMoreLikeThis for TV shows
    try {
        const similarShowsUrl = `${baseUrl}/tv/${tvShowId}/similar?api_key=${apiKey}&language=en-US`;
        const similarShowsResponse = await fetch(similarShowsUrl);
        const similarShowsData = await similarShowsResponse.json();

        const similarTVShowsContainer = document.getElementById('similar-tv-shows-container'); // Changed ID
        if (similarTVShowsContainer) {
            similarTVShowsContainer.innerHTML = ''; // Clear existing similar TV shows

            if (similarShowsData.results && similarShowsData.results.length > 0) {
                similarShowsData.results.slice(0, 10).forEach(tvShow => { // Limit to 10 similar TV shows
                    const tvShowItem = document.createElement('div');
                    tvShowItem.classList.add('similar-tv-show-item'); // Changed class

                    const posterPath = tvShow.poster_path ? `https://image.tmdb.org/t/p/w500${tvShow.poster_path}` : 'https://placehold.co/180x270/000000/FFFFFF?text=No+Image';
                    const tvShowImage = document.createElement('img');
                    tvShowImage.src = posterPath;
                    tvShowImage.alt = tvShow.name;
                    tvShowImage.onerror = function() { this.src = 'https://placehold.co/180x270/000000/FFFFFF?text=No+Image'; }; // Fallback for broken images

                    const tvShowTitle = document.createElement('p');
                    tvShowTitle.textContent = tvShow.name;

                    tvShowItem.appendChild(tvShowImage);
                    tvShowItem.appendChild(tvShowTitle);

                    tvShowItem.addEventListener('click', () => {
                        window.location.href = `tvshows-details.html?id=${tvShow.id}`;
                    });
                    similarTVShowsContainer.appendChild(tvShowItem);
                });
            } else {
                const noSimilar = document.createElement('p');
                noSimilar.textContent = 'No similar TV shows found.';
                similarTVShowsContainer.appendChild(noSimilar);
            }
        }
    } catch (error) {
        console.error('Error fetching similar TV shows:', error);
        const similarTVShowsContainer = document.getElementById('similar-tv-shows-container');
        if (similarTVShowsContainer) similarTVShowsContainer.innerHTML = '<p>Error loading similar TV shows.</p>';
    }
};


// Fetch data for different TV show categories (keep existing)
fetchTVShows('popular', 'popularTVShows');
fetchTVShows('trending', 'trendingTVShows');
fetchTVShows('top_rated', 'topRatedTVShows');
fetchTVShows('drama', 'dramaTVShows');
fetchTVShows('comedy', 'comedyTVShows');
fetchTVShows('romance', 'romanceTVShows');
fetchTVShows('documentary', 'documentaryTVShows');

// Fetch banner details for TV Shows (keep existing)
fetchBanner();

// Initialize arrow buttons functionality after fetching the TV show data (keep existing)
document.addEventListener('DOMContentLoaded', initArrowNavigation);

// Close Button Logic: Redirect to tvshows.html (keep existing)
const closeButton = document.getElementById('close-button');

if (closeButton) { // Ensure button exists before adding listener
    closeButton.addEventListener('click', () => {
        window.location.href = 'tvshows.html'; // Redirects to the tvshows page
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
