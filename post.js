document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Collect form data
    var name = document.getElementById('name').value;
    var subject = document.getElementById('subject').value;
    var text = document.getElementById('text').value;

    // Construct post object
    var post = {
        name: name,
        date: new Date().toDateString(), // Add current date
        subject: subject,
        text: text
    };

    // Save post data to localStorage
    var posts = localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')) : [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));

    // Fetch the existing posts from messages.json
    fetch('messages.json')
    .then(response => response.json())
    .then(posts => {
        // Append the new post to the existing array
        posts.push(post);

        // Save the updated array back to messages.json
        return fetch('messages.json', {
            method: 'POST', // Use POST method to append to the existing file
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(posts)
        });
    })
    .then(response => {
        if (response.ok) {
            alert('Post submitted successfully!');
            document.getElementById('postForm').reset();
        } else {
            throw new Error('Failed to save post data.');
        }
    })
    .catch(error => {
        console.error('Error occurred while saving post data:', error);
    });
    

    // Clear the form inputs
    document.getElementById('postForm').reset();

    // Display success message
    var successMessage = document.createElement('div');
    successMessage.id = 'successMessage';
    successMessage.innerText = 'Submitted successfully!';
    document.body.appendChild(successMessage);

    // Remove the success message after a few seconds
    setTimeout(function() {
        successMessage.remove();
    }, 5500); // 3 seconds
});
