//Handle form submission & local storage
const blogData = JSON.parse(localStorage.getItem('blogData')) || [];

document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username= document.getElementById('username').value;
    var title= document.getElementById('title').value;
    var content= document.getElementById('content').value;

    var blogPost = {username: username, title: title, content: content};

    if (!username || !title || !content) {
        alert('All fields are required!');
    }
    //push the new post to the blogData array
    blogData.push(blogPost);

    //store blog post in localStorage
    localStorage.setItem('blogPost', JSON.stringify(blogPost));

    //Redirect to blog page
    window.location.href = 'blog.html';
});