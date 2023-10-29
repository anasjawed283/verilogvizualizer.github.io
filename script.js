const textarea = document.querySelector('.home-textarea');
const generateButton = document.querySelector('.home-button');
const clearButton = document.querySelector('.home-button1');
const historyButton = document.querySelector('.home-button2');
const chatLog = []; // Initialize an empty chat log array

generateButton.addEventListener('click', () => {
    const userMessage = textarea.value;
    
    // Process the user's message here (for example, send it to a chatbot)

    // Add the user's message to the chat log
    chatLog.push(`User: ${userMessage}`);

    // Clear the textarea
    textarea.value = '';
});

clearButton.addEventListener('click', () => {
    textarea.value = '';
});

historyButton.addEventListener('click', () => {
    viewChatHistory();
});

function viewChatHistory() {
    if (chatLog.length > 0) {
        alert("Chat History:\n\n" + chatLog.join('\n'));
    } else {
        alert("No chat history available.");
    }
}
