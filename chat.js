let messages = [];

function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    if (message) {
        messages.push({ text: message, sender: 'guest' });
        input.value = '';
        updateChat();
        // Aqui você implementaria a lógica para enviar a mensagem para o servidor
        simulateReception();
    }
}

function updateChat() {
    const chatMessages = document.getElementById('chatMessages');
    chatMessages.innerHTML = '';
    messages.forEach(msg => {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${msg.sender}`;
        messageDiv.textContent = msg.text;
        chatMessages.appendChild(messageDiv);
    });
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function simulateReception() {
    setTimeout(() => {
        const responses = [
            "Como posso ajudar?",
            "Entendi, vou verificar isso para você.",
            "Mais alguma coisa em que eu possa ajudar?",
            "Peço desculpas pelo inconveniente. Estamos resolvendo isso.",
            "Obrigado por entrar em contato. Alguma outra dúvida?"
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        messages.push({ text: randomResponse, sender: 'reception' });
        updateChat();
    }, 1000 + Math.random() * 2000); // Simula um atraso de 1-3 segundos
}

// Adicione alguns estilos CSS inline para melhorar a aparência do chat
document.head.insertAdjacentHTML('beforeend', `
<style>
    #chatMessages {
        height: 300px;
        overflow-y: auto;
        border: 1px solid #ccc;
        padding: 10px;
        margin-bottom: 10px;
    }
    .message {
        margin-bottom: 10px;
        padding: 5px 10px;
        border-radius: 5px;
        max-width: 70%;
    }
    .guest {
        background-color: #e6f3ff;
        align-self: flex-end;
        margin-left: auto;
    }
    .reception {
        background-color: #f0f0f0;
    }
    #messageInput {
        width: 70%;
        padding: 5px;
    }
</style>
`);

// Inicializa o chat com uma mensagem de boas-vindas
messages.push({ text: "Bem-vindo ao chat da recepção! Como posso ajudar?", sender: 'reception' });
updateChat();
