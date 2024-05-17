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

    // Clear the form inputs
    document.getElementById('postForm').reset();

    // Display success message
    var successMessage = document.createElement('div');
    successMessage.id = 'successMessage';
    successMessage.innerText = 'submitted successfully!';
    document.body.appendChild(successMessage);

    // Remove the success message after a few seconds
    setTimeout(function() {
        successMessage.remove();
    }, 3000); // 3 seconds
});
