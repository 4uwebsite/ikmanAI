# ikmanAI
 An AI based Chat Assistant that can assist shoppers of ikman.lk.

## Version 0.1.0

# AI Chat Interface

This is a minimalist AI chat interface where users can interact with a ChatGPT-like AI. The webpage uses a free public API (mocked in this example) to retrieve information and display it in a chat-like format. You can replace the mocked API with any real data source, such as `ikman.lk`.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Demo
The interface lets users ask questions, and the AI fetches responses from an API. The current demo uses the JSONPlaceholder API for simulated responses.

## Features
- **Minimalist UI**: Clean and modern user interface designed with simplicity in mind.
- **Responsive**: Works well on both desktop and mobile devices.
- **Dynamic Interaction**: The AI simulates a response based on user queries.
- **Real API Integration**: You can easily swap in any API, such as `ikman.lk`.

## Technologies
- **HTML5**: For the page structure.
- **CSS3**: For the styling and layout.
- **JavaScript (ES6+)**: For functionality and API interaction.
- **[JSONPlaceholder](https://jsonplaceholder.typicode.com/)**: A free API used for mocking AI responses (replaceable with real APIs).

## Getting Started

To get a local copy of this project up and running, follow these simple steps.

### Prerequisites
You need a basic understanding of:
- HTML
- CSS
- JavaScript

### Installation
1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/ai-chat-interface.git
    ```

2. Navigate into the project directory:

    ```bash
    cd ai-chat-interface
    ```

3. Open the project in your code editor.

4. Open `index.html` in your browser to view the AI chat interface.

## Usage
- Enter a query into the input box and click "Send" or press "Enter".
- The AI will simulate a response using a mock API (`jsonplaceholder.typicode.com`).
- You can easily customize the API endpoint to fetch data from a real source like `ikman.lk`.

## Customization

To integrate a real API:
1. Open the `app.js` file.
2. Modify the `fetchAIResponse()` function with your actual API endpoint.

For example:
```javascript
function fetchAIResponse(query) {
    // Replace this with a real API endpoint
    fetch(`https://your-real-api.com/query=${query}`)
        .then(response => response.json())
        .then(data => {
            const aiMessage = `Here's the result for your query "${query}":\n${data.result}`;
            displayMessage(aiMessage, 'ai');
        })
        .catch(error => {
            displayMessage("Sorry, I couldn't fetch the data right now.", 'ai');
            console.error(error);
        });
}
