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
    document.getElementById('selectedRoom').textContent = roomNumber;
    document.getElementById('servicePanel').style.display = 'block';
}

// ... outras funções ...

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    if (document.title === 'Área do Hóspede') {
        createRooms(9);
    } else if (document.title === 'Painel do Administrador') {
        updateAdminPanel();
        createRooms(9);
    }
});
