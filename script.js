let selectedRoom = null;
let pendingRequests = {};

function createRooms(numRooms) {
    const container = document.getElementById('roomContainer');
    for (let i = 1; i <= numRooms; i++) {
        const room = document.createElement('div');
        room.className = 'room';
        const status = getRandomStatus();
        room.classList.add(status);
        room.innerHTML = `
            <div class="room-icon"><i class="fas fa-bed"></i></div>
            <div class="room-number">${i}</div>
            <div class="room-status">${status}</div>
        `;
        room.addEventListener('click', () => selectRoom(i));
        container.appendChild(room);
    }
}

function getRandomStatus() {
    const statuses = ['livre', 'ocupado', 'limpeza'];
    return statuses[Math.floor(Math.random() * statuses.length)];
}

function selectRoom(roomNumber) {
    selectedRoom = roomNumber;
    document.getElementById('selectedRoom').textContent = roomNumber;
    document.getElementById('servicePanel').style.display = 'block';
}

function requestService(service) {
    if (!selectedRoom) return;
    
    const serviceNames = {
        toalha: 'Pedir Toalha',
        quarto: 'Serviço de Quarto',
        manutencao: 'Pedir Manutenção',
        ar: 'Problemas com Ar-condicionado',
        camareira: 'Solicitar Camareira',
        checkout: 'Fazer Checkout'
    };

    if (!pendingRequests[selectedRoom]) {
        pendingRequests[selectedRoom] = [];
    }
    pendingRequests[selectedRoom].push(service);

    updateAdminPanel();
    addNotification(`Serviço solicitado: ${serviceNames[service]} para o Quarto ${selectedRoom}`);
}

function updateAdminPanel() {
    const panel = document.getElementById('adminPanel');
    panel.style.display = 'block';
    const requestsDiv = document.getElementById('pendingRequests');
    requestsDiv.innerHTML = '<h3>Solicitações Pendentes</h3>';

    for (let room in pendingRequests) {
        if (pendingRequests[room].length > 0) {
            const roomDiv = document.createElement('div');
            roomDiv.innerHTML = `<h4>Quarto ${room}</h4>`;
            pendingRequests[room].forEach(service => {
                const serviceButton = document.createElement('button');
                serviceButton.textContent = `Concluir ${service}`;
                serviceButton.onclick = () => concludeService(room, service);
                roomDiv.appendChild(serviceButton);
            });
            requestsDiv.appendChild(roomDiv);
        }
    }
}

function concludeService(room, service) {
    pendingRequests[room] = pendingRequests[room].filter(s => s !== service);
    updateAdminPanel();
    addNotification(`Serviço concluído: ${service} para o Quarto ${room}`);
}

function addNotification(message) {
    const notificationList = document.getElementById('notificationList');
    const notificationItem = document.createElement('li');
    notificationItem.textContent = message;
    notificationList.prepend(notificationItem);
}

function openConcierge() {
    window.open('concierge.html', '_blank');
}

function openChat() {
    window.open('chat.html', '_blank');
}

function generateReport() {
    const report = {
        totalRooms: 9,
        occupiedRooms: document.querySelectorAll('.room.ocupado').length,
        cleaningRooms: document.querySelectorAll('.room.limpeza').length,
        totalRequests: Object.values(pendingRequests).flat().length
    };

    alert(`Relatório:
    Total de Quartos: ${report.totalRooms}
    Quartos Ocupados: ${report.occupiedRooms}
    Quartos em Limpeza: ${report.cleaningRooms}
    Solicitações Pendentes: ${report.totalRequests}`);
}

createRooms(9);
