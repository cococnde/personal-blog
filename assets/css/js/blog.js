//add function to toggle darkmode
//this file will handle displaying the blog posts


const blogData = JSON.parse(localStorage.getItem('blogData')) || [];
function renderBlogPosts() {
    const blogContainer = document.getElementById('blogContent');

    // Clear existing content
    blogContainer.innerHTML = '';

    // Loop through blogData and create HTML elements for each post
    blogData.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');

        const titleElement = document.createElement('h2');
        titleElement.textContent = post.title;

        const authorElement = document.createElement('p');
        authorElement.textContent = `By ${post.author}`;

        const contentElement = document.createElement('p');
        contentElement.textContent = post.content;

        postElement.appendChild(titleElement);
        postElement.appendChild(authorElement);
        postElement.appendChild(contentElement);

        blogContainer.appendChild(postElement);
    });
}

//call renderBlogPosts when the blog page loads

if (window.location.pathname.endsWith('blog.html')) {
    renderBlogPosts();
}