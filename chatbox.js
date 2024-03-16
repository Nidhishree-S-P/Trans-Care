const chatForm = document.getElementById('user-msg');
const chatMessages = document.querySelector('.chat-messages');
const sendBtn = document.getElementById('send-btn');

const responses = {
    "feeling low": "I understand, but remember to fight for equality. Your strength can inspire others.",
    "precautions surgery": "Before any surgery or injections, it's essential to consult a qualified healthcare professional and understand all the risks involved.",
    "importance mental health": "Mental health is crucial for overall well-being. Remember to prioritize self-care and seek support when needed.",
    "importance physical health": "Taking care of your physical health is important for a healthy lifestyle. This includes regular exercise, nutritious diet, and medical check-ups.",
    // Add more questions and answers here
};

function outputMessage(message, type) {
    const div = document.createElement('div');
    div.classList.add('chat-message');
    div.classList.add(type === 'user' ? 'user-message' : 'bot-message');
    div.innerText = message;
    chatMessages.appendChild(div);
}

sendBtn.addEventListener('click', () => {
    const msg = chatForm.value.trim();
    if (msg) {
        outputMessage(msg, 'user');

        const response = responses[msg.toLowerCase()];
        if (response) {
            setTimeout(() => outputMessage(response, 'bot'), 1000);
        } else {
            // Handle other types of messages here
        }

        chatForm.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});