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
// Código para admin.js
function initAdmin() {
    updateAdminPanel();
    createRooms(9); // Para mostrar o status dos quartos
}

function updateAdminPanel() {
    const requestsDiv = document.getElementById('pendingRequests');
    requestsDiv.innerHTML = '<p>Nenhuma solicitação pendente no momento.</p>';
    // Aqui você adicionaria a lógica para buscar e exibir solicitações pendentes
}

function generateReport() {
    const report = `
        Relatório Diário:
        - Total de quartos: 9
        - Quartos ocupados: ${Math.floor(Math.random() * 9)}
        - Solicitações atendidas: ${Math.floor(Math.random() * 20)}
        - Satisfação média dos hóspedes: ${(Math.random() * 2 + 3).toFixed(1)}/5
    `;
    alert(report);
}

// Chame initAdmin() quando a página de administrador for carregada
if (document.querySelector('title').textContent === 'Painel do Administrador') {
    initAdmin();
}
