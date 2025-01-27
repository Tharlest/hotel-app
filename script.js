let selectedRoom = null;

function createRooms(numRooms) {
    const container = document.getElementById('roomContainer');
    container.innerHTML = ''; // Limpa o container antes de adicionar os quartos
    for (let i = 1; i <= numRooms; i++) {
        const room = document.createElement('div');
        room.className = 'room';
        room.innerHTML = `
            <div class="room-icon"><i class="fas fa-bed"></i></div>
            <div class="room-number">${i}</div>
        `;
        room.addEventListener('click', () => selectRoom(i));
        container.appendChild(room);
    }
}

function selectRoom(roomNumber) {
    selectedRoom = roomNumber;
    const servicePanel = document.getElementById('servicePanel');
    if (servicePanel) {
        document.getElementById('selectedRoom').textContent = roomNumber;
        servicePanel.style.display = 'block';
    }
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
}

function openConcierge() {
    alert('Funcionalidade do Concierge ainda não implementada.');
}

function openChat() {
    alert('Funcionalidade de Chat ainda não implementada.');
}

function updateAdminPanel() {
    const requestsDiv = document.getElementById('pendingRequests');
    if (requestsDiv) {
        requestsDiv.innerHTML = '<p>Nenhuma solicitação pendente no momento.</p>';
    }
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

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    if (document.title === 'Área do Hóspede') {
        createRooms(9);
    } else if (document.title === 'Painel do Administrador') {
        updateAdminPanel();
        createRooms(9);
    }
});
