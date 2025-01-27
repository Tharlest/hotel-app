// Código para guest.js
function initGuest() {
    createRooms(9);
}

function openConcierge() {
    window.open('concierge.html', '_blank');
}

function openChat() {
    window.open('chat.html', '_blank');
}

function requestService(service) {
    if (!selectedRoom) {
        alert('Por favor, selecione um quarto primeiro.');
        return;
    }
    
    const serviceNames = {
        toalha: 'Pedir Toalha',
        quarto: 'Serviço de Quarto',
        manutencao: 'Pedir Manutenção',
        ar: 'Problemas com Ar-condicionado',
        camareira: 'Solicitar Camareira',
        checkout: 'Fazer Checkout'
    };

    alert(`Serviço "${serviceNames[service]}" solicitado para o Quarto ${selectedRoom}.`);
    // Aqui você adicionaria a lógica para enviar a solicitação ao servidor
}

// Chame initGuest() quando a página de hóspede for carregada
if (document.querySelector('title').textContent === 'Área do Hóspede') {
    initGuest();
}
