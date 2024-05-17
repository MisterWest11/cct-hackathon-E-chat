var jsonData = [
    {
        "name": "John Doe",
        "date": "May 16, 2024",
        "subject": "Subject 1 is here."
    },
    {
        "name": "Jane Smith",
        "date": "May 15, 2024",
        "subject": "Subject 2 is here."
    },
    {
        "name": "Mike Johnson",
        "date": "May 14, 2024",
        "subject": "Subject 3 is here."
    },
    {
        "name": "Yondela Sasayi",
        "date": "May 16, 2024",
        "subject": "Subject 4 is here."
    }
    ,
    {
        "name": "Stanley Cooper",
        "date": "May 16, 2024",
        "subject": "Subject 4 is here."
    }
    ,
    {
        "name": "Sam",
        "date": "May 18, 2024",
        "subject": "Subject 5 is here."
    }
    ,
    {
        "name": "Stanley Cooper",
        "date": "May 16, 2024",
        "subject": "Subject 4 is here."
    },
    {
        "name": "Spheleke",
        "date": "May 19, 2024",
        "subject": "Subject 5 is here."
    },
    {
        "name": "Siyabonga Zungu",
        "date": "May 16, 2024",
        "subject": "Subject 6 is here."
    }
];

// Function to create a card element for each message
function createMessageCard(message) {
    var card = document.createElement('div');
    card.classList.add('card');

    var name = document.createElement('div');
    name.classList.add('name');
    name.textContent = message.name;

    var date = document.createElement('div');
    date.classList.add('date');
    date.textContent = message.date;

    var subject = document.createElement('div');
    subject.classList.add('subject');
    subject.textContent = message.subject;

    var viewButton = document.createElement('button');
    viewButton.classList.add('view-button');
    viewButton.textContent = 'View';

    card.appendChild(name);
    card.appendChild(date);
    card.appendChild(subject);
    card.appendChild(viewButton);

    return card;
}

// Function to display messages in the HTML page
function displayMessages() {
    var container = document.getElementById('messageContainer');
    jsonData.forEach(function(message) {
        var card = createMessageCard(message);
        container.appendChild(card);
    });
}

// Call the function to display messages when the page loads
displayMessages();