 // Function to handle form submission
 function handleCommentSubmission(event) {
    event.preventDefault();
    // Get the comment text
    var commentText = this.querySelector('textarea').value;
    if (commentText.trim() !== '') {
        // Create a new comment element
        var commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        var commentContent = document.createElement('div');
        commentContent.classList.add('comment-content');
        commentContent.textContent = commentText;
        commentElement.appendChild(commentContent);
        // Append the new comment to the comments section
        var commentsSection = this.parentElement.previousElementSibling.querySelector('.comments');
        commentsSection.appendChild(commentElement);
        // Clear the textarea
        this.querySelector('textarea').value = '';
    } else {
        alert('Please enter a comment.');
    }
}

// Add event listeners to comment forms
var commentForms = document.querySelectorAll('.comment-form');
commentForms.forEach(function(form) {
    form.addEventListener('submit', handleCommentSubmission);
});