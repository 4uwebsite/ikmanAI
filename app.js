document.getElementById('send-btn').addEventListener('click', function () {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput) {
        displayMessage(userInput, 'user');
        fetchAIResponse(userInput);
        document.getElementById('user-input').value = ''; // Clear input
    }
});

document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.getElementById('send-btn').click();
    }
});

function displayMessage(message, sender) {
    const chatWindow = document.getElementById('chat-window');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.textContent = message;
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to bottom
}

function fetchAIResponse(query) {
    // Simulate an AI response with a public API
    fetch(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(response => response.json())
        .then(data => {
            const aiMessage = `Here is the result for your query: "${query}":\n${data.body}`;
            displayMessage(aiMessage, 'ai');
        })
        .catch(error => {
            displayMessage("Sorry, I couldn't fetch the data right now.", 'ai');
            console.error(error);
        });
}
