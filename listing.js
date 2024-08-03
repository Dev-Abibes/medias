document.addEventListener('DOMContentLoaded', function() {
    const mediaList = document.getElementById('media-list');
    const categoryNav = document.getElementById('category-nav');

    // Function to fetch data from data2.json
    function fetchData() {
        return fetch('data/hackLinks.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                return data;
            })
            .catch(error => console.error('Error fetching the data:', error));
    }

    // Function to create category navigation
    function createCategoryNav(categories) {
        categories.forEach(categoryName => {
            const categoryNavLink = `
                <li class="nav-item">
                    <a class="nav-link" href="#" data-category="${categoryName}">${categoryName}</a>
                </li>
            `;
            categoryNav.insertAdjacentHTML('beforeend', categoryNavLink);
        });

        // Add click event listeners to category nav links
        document.querySelectorAll('#category-nav .nav-link').forEach(navLink => {
            navLink.addEventListener('click', function(event) {
                event.preventDefault();
                const categoryName = this.getAttribute('data-category');
                displayMediaByCategory(categoryName);
            });
        });
    }

    // Function to display media by category
    function displayMediaByCategory(categoryName, data) {
        mediaList.innerHTML = ''; // Clear the current media list
        data.forEach(category => {
            if (category.category === categoryName) {
                category.git.forEach(media => {
                    const mediaCard = `
                        <div class="col-md-2 mb-4">
                            <a href="${media.url}" class="card-link" target="_blank">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h6 class="card-title">${media.name}</h6>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `;
                    mediaList.insertAdjacentHTML('beforeend', mediaCard);
                });
            }
        });
    }

    // Function to set up the search functionality
    function setupSearch(data) {
        const searchForm = document.getElementById('search-form');
        const searchInput = document.getElementById('search-input');

        searchForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const query = searchInput.value.toLowerCase();
            mediaList.innerHTML = ''; // Clear the current media list
            
            data.forEach(category => {
                category.git.forEach(media => {
                    if (media.name.toLowerCase().includes(query) || 
                        media.url.toLowerCase().includes(query) || 
                        media.type.toLowerCase().includes(query) ||
                        media.description.toLowerCase().includes(query) ||
                        media.createdAt.toLowerCase().includes(query)
                    ){
                        const mediaCard = `
                            <div class="col-md-3 mb-4">
                                <a href="${media.url}" class="card-link" target="_blank">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <h6 class="card-title">${media.name}</h6>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        `;
                        mediaList.insertAdjacentHTML('beforeend', mediaCard);
                    }
                });
            });
        });
    }

    // Fetch data and initialize the page
    fetchData()
        .then(data => {
            const categories = [...new Set(data.map(item => item.category))];
            createCategoryNav(categories);

            // Display media for the first category by default
            if (categories.length > 0) {
                displayMediaByCategory(categories[0], data);
            }

            setupSearch(data);
        })
        .catch(error => console.error('Error processing the data:', error));
});
