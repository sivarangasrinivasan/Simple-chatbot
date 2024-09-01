// script.js
const chatForm = document.getElementById('chat-form');
const chatBox = document.getElementById('chat-box');
const chatInput = document.getElementById('chat-input');

// Predefined responses for the chatbot
const responses = {
    "hello": "Hi there! How can I help you today?",
    "hi": "Hello! What can I do for you?",
    "how are you?": "I'm just a bot, but I'm doing great! How about you?",
    "what is your name?": "I'm a simple chatbot created to assist you.",
    "bye": "Goodbye! Have a great day!",
    "tell my name": "hello! Mr Siva Ranga Srinivasan",
    "default": "I'm sorry, I don't understand that. Can you rephrase?",
        "good morning": "Good morning! Hope you have a wonderful day ahead.",
        "good night": "Good night! Sweet dreams!",
        "what can you do?": "I can help you with a variety of tasks like answering questions, providing information, and even a little chit-chat!",
        "what time is it?": "I'm a bot, so I don't have a clock, but you can check the time on your device!",
        "where are you from?": "I'm from the cloud! More specifically, I live on servers around the world.",
        "thank you": "You're welcome! If you need anything else, just ask.",
        "who created you?": "I was created by some clever developers to help make your life easier.",
        "tell me a joke": "Why don't programmers like nature? It has too many bugs!",
        "i love you": "Aww, that's sweet! I'm here to help you anytime.",
        "i'm sad": "I'm sorry to hear that. Do you want to talk about it, or can I tell you something funny to cheer you up?",
        "what is your favorite color?": "I don't have a favorite color, but I think all colors are amazing!",
        "who is your best friend?": "You are my best friend! I'm here to assist you whenever you need.",
        "can you help me with programming?": "Of course! What do you need help with? I can assist with various programming languages and concepts.",
        "tell me a fun fact": "Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!",
        "how old are you?": "I don't age like humans do, but I was created fairly recently!",
        "do you have any siblings?": "I have lots of siblings! Other bots and AI systems are my family.",
        "can you dance?": "I can't dance physically, but I can show you some cool dance moves in ASCII art! :)",
        "tell me a quote": "Sure! Here's one: 'The only way to do great work is to love what you do.' - Steve Jobs",
        "default": "I'm sorry, I don't understand that. Can you try saying it another way?"
    }

// Function to add a message to the chat
function addMessage(message, type) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', type);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

// Function to get a response from the bot
function getBotResponse(userInput) {
    const normalizedInput = userInput.toLowerCase();
    return responses[normalizedInput] || responses["default"];
}

// Event listener for form submission
chatForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const userInput = chatInput.value.trim();
    if (userInput === "") return;

    // Add user message to chat
    addMessage(userInput, 'user');

    // Get bot response and add to chat
    const botResponse = getBotResponse(userInput);
    setTimeout(() => addMessage(botResponse, 'bot'), 500);

    // Clear input field
    chatInput.value = '';
    chatInput.focus();
});
