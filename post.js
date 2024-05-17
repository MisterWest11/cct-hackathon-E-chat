document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Collect form data
    var name = document.getElementById('name').value;
    var subject = document.getElementById('subject').value;
    var text = document.getElementById('text').value;

    // Construct post object
    var post = {
        name: name,
        subject: subject,
        text: text
    };

    // Save post data to localStorage
    var posts = localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')) : [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));

    alert('Post submitted successfully!');

    // You can redirect the user or do something else here after successful submission
});
