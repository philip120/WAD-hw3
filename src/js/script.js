async function loadPostsFromJson() {
    console.log("Attempting to fetch posts.json...");

    try {
        const response = await fetch('data/posts.json');
        console.log("Fetch response received:", response);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const posts = await response.json();
        console.log("Posts data successfully fetched and parsed:", posts);

        if (!Array.isArray(posts)) {
            throw new Error("Invalid JSON format: Expected an array of posts");
        }

        displayPosts(posts);
    } catch (error) {
        console.error('Error loading posts from JSON file:', error);
    }
}

function displayPosts(posts) {
    console.log("Rendering posts...");
    const postsContainer = document.getElementById('posts-container');

    if (!postsContainer) {
        console.error("Error: Could not find 'posts-container' in the DOM.");
        return;
    }

    postsContainer.innerHTML = ''; // clear any existing content
    console.log("Cleared existing content in posts-container.");

    if (posts.length === 0) {
        console.warn("No posts found in the JSON data.");
        postsContainer.innerHTML = '<p>No posts available.</p>';
        return;
    }

    posts.forEach((post, index) => {
        console.log(`Processing post #${index}:`, post);

        // Create post element
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        // Post header
        const postHeader = document.createElement('div');
        postHeader.classList.add('post-header');

        // Profile image
        const profileImg = document.createElement('img');
        profileImg.src = 'logo.jpg'; 
        profileImg.alt = 'User Profile';
        profileImg.classList.add('profile-image');

        profileImg.onerror = () => {
            console.warn(`Profile image for post #${index} could not be loaded.`);
            profileImg.src = 'default-profile.jpg'; // Fallback image
        };

        // Author name
        const authorName = document.createElement('span');
        authorName.textContent = post.author || 'Unknown Author';
        authorName.classList.add('post-author');

        // Date formatting
        let formattedDate = 'Invalid Date';
        try {
            const date = new Date(post.createTime);
            formattedDate = date.toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short', // e.g., "Oct" 
                year: 'numeric' 
            });
        } catch (dateError) {
            console.error(`Error formatting date for post #${index}:`, dateError);
        }

        const postDate = document.createElement('span');
        postDate.textContent = formattedDate;

        // Append header elements
        postHeader.append(profileImg, authorName, postDate);
        postElement.appendChild(postHeader);

        // Post image
        if (post.image) {
            const postImage = document.createElement('img');
            postImage.src = post.image;
            postImage.alt = 'Uploaded Post Image';
            postImage.classList.add('post-image');

            postImage.onerror = () => {
                console.warn(`Post image for post #${index} could not be loaded: ${post.image}`);
            };

            postElement.appendChild(postImage);
        }

        // Post content
        const postContent = document.createElement('p');
        postContent.textContent = post.content || 'No content available.';
        postContent.classList.add('post-text');
        postElement.appendChild(postContent);

        // Post footer
        const postFooter = document.createElement('div');
        postFooter.classList.add('post-footer');

        const likeButton = document.createElement('span');
        likeButton.classList.add('like-button');
        likeButton.textContent = '👍 Like';

        postFooter.appendChild(likeButton);
        postElement.appendChild(postFooter);

        // Append the post element to the container
        postsContainer.appendChild(postElement);
        console.log(`Post #${index} rendered successfully.`);
    });

    console.log("All posts rendered.");
}

// Debug: Add DOMContentLoaded to ensure script runs after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded. Initializing post loading...");
    loadPostsFromJson();
});

// Load Header
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        const headerContainer = document.getElementById('header-container');
        headerContainer.innerHTML = ''; // Clear any existing content
        headerContainer.innerHTML = data;
    });

// Load Footer
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        const footerContainer = document.getElementById('footer-container');
        footerContainer.innerHTML = ''; // Clear any existing content
        footerContainer.innerHTML = data;
    });
