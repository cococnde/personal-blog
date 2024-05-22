//add function to toggle darkmode
//this file will handle displaying the blog posts


window.onload = function() {
    const blogPost = JSON.parse(localStorage.getItem('blogPost'));

    document.getElementById('username').innerText = blogPost.username;
    document.getElementById('title').innerText = blogPost.title;
    document.getElementById('content').innerText = blogPost.content;
};