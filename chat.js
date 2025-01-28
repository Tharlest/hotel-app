let messages = [];

function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    if (message) {
        messages.push({ text: message, sender: 'guest' });
        input.value = '';
        updateChat();
        simulateResponse();
    }
}

function updateChat() {
    const chatBox = document.getElementById('chatBox');
    chatBox.innerHTML = '';
    messages.forEach(msg => {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${msg.sender}`;
        messageDiv.textContent = msg.text;
        chatBox.appendChild(messageDiv);
    });
    chatBox.scrollTop = chatBox.scrollHeight;
}

function simulateResponse() {
    setTimeout(() => {
        const responses = [
            "Como posso ajudar?",
            "Entendi, vou verificar isso para você.",
            "Alguma outra coisa em que eu possa ajudar?",
            "Peço desculpas pelo inconveniente. Estamos resolvendo isso.",
            "Obrigado por entrar em contato. Mais alguma dúvida?"
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        messages.push({ text: randomResponse, sender: 'reception' });
        updateChat();
    }, 1000);
}
