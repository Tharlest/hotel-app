function createRooms(numRooms) {
    const container = document.getElementById('roomContainer');
    container.innerHTML = ''; // Limpa o container antes de adicionar os quartos
    for (let i = 1; i <= numRooms; i++) {
        const room = document.createElement('div');
        room.className = 'room ' + getRandomStatus(); // Adiciona uma classe de status aleatória
        room.innerHTML = `
            <div class="room-icon"><i class="fas fa-bed"></i></div>
            <div class="room-number">${i}</div>
        `;
        room.addEventListener('click', () => selectRoom(i));
        container.appendChild(room);
    }
}

function getRandomStatus() {
    const statuses = ['available', 'occupied', 'cleaning'];
    return statuses[Math.floor(Math.random() * statuses.length)];
}
