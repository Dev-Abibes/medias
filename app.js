document.addEventListener('DOMContentLoaded', function() {
    let allMedia = []; // Store all media for search functionality
    
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            allMedia = data; // Save all media data for search functionality
            
            const mediaList = document.getElementById('media-list');
            const categoryNav = document.getElementById('category-nav');
            
            data.forEach(category => {
                // Create a category nav link
                const categoryNavLink = `
                    <li class="nav-item">
                        <a class="nav-link" href="#" data-category="${category.category}">${category.category}</a>
                    </li>
                `;
                categoryNav.insertAdjacentHTML('beforeend', categoryNavLink);
            });

            // Function to display media by category
            function displayMediaByCategory(categoryName) {
                mediaList.innerHTML = ''; // Clear the current media list
                data.forEach(category => {
                    if (category.category === categoryName) {
                        category.media.forEach(media => {
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

            // Add click event listeners to category nav links
            document.querySelectorAll('#category-nav .nav-link').forEach(navLink => {
                navLink.addEventListener('click', function(event) {
                    event.preventDefault();
                    const categoryName = this.getAttribute('data-category');
                    displayMediaByCategory(categoryName);
                });
            });

            // Display media for the first category by default
            if (data.length > 0) {
                displayMediaByCategory(data[0].category);
            }

            // Search functionality
            const searchForm = document.getElementById('search-form');
            const searchInput = document.getElementById('search-input');
            
            searchForm.addEventListener('submit', function(event) {
                event.preventDefault();
                const query = searchInput.value.toLowerCase();
                mediaList.innerHTML = ''; // Clear the current media list
                
                data.forEach(category => {
                    category.media.forEach(media => {
                        if (media.name.toLowerCase().includes(query) || 
                            media.url.toLowerCase().includes(query) || 
                            media.langue.toLowerCase().includes(query) || 
                            media.pays.toLowerCase().includes(query) ||
                            media.typeMedia.toLowerCase().includes(query) ||
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
        })
        .catch(error => console.error('Error fetching the data:', error));
});
