(function() {
    emailjs.init("TpnkLnc8acHN4EM35");
})();

let selectedRoom = null;
let pendingRequests = {};
const administrators = ['Vanessa', 'Aline', 'João'];
const staff = ['Sabrina', 'Betânia'];

function createRooms(numRooms) {
    const container = document.getElementById('roomContainer');
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

function requestService(service) {
    if (!selectedRoom) return;
    
    const serviceNames = {
        toalha: 'Pedir Toalha',
        quarto: 'Serviço de Quarto',
        manutencao: 'Pedir Manutenção',
        ar: 'Problemas com Ar-condicionado',
        camareira: 'Solicitar Camareira',
        checkout: 'Fazer Checkout',
        ventilador: 'Solicitar Ventilador',
        lencois: 'Trocar Lençóis',
        limpeza: 'Solicitar Limpeza'
    };

    const room = document.querySelector(`.room:nth-child(${selectedRoom})`);
    room.classList.add('active');

    if (!pendingRequests[selectedRoom]) {
        pendingRequests[selectedRoom] = [];
    }
    const requestTime = new Date();
    pendingRequests[selectedRoom].push({service, requestTime});

    updateAdminPanel();
    logRequest(selectedRoom, serviceNames[service]);
    sendEmailNotification(selectedRoom, serviceNames[service]);
    addNotification(`Serviço solicitado: ${serviceNames[service]} para o Quarto ${selectedRoom}`);
    startTimer(selectedRoom, service, requestTime);
}

function createAdminLayout() {
    const adminList = document.getElementById('adminList');
    adminList.innerHTML = '<h3>Administradores</h3>';
    
    administrators.forEach(admin => {
        const adminElement = document.createElement('div');
        adminElement.className = 'admin-item';
        adminElement.innerHTML = `
            <i class="fas fa-user-tie"></i>
            <span>${admin}</span>
        `;
        adminList.appendChild(adminElement);
    });
}

function updateAdminPanel() {
    const panel = document.getElementById('adminPanel');
    panel.style.display = 'block';
    
    createAdminLayout();
    
    const requestsDiv = document.getElementById('pendingRequests');
    requestsDiv.innerHTML = '<h3>Solicitações Pendentes</h3>';

    for (let room in pendingRequests) {
        if (pendingRequests[room].length > 0) {
            const roomDiv = document.createElement('div');
            roomDiv.innerHTML = `<h4>Quarto ${room}</h4>`;
            pendingRequests[room].forEach(request => {
                const serviceButton = document.createElement('button');
                serviceButton.textContent = `Concluir ${request.service}`;
                serviceButton.onclick = () => concludeService(room, request.service, request.requestTime);
                roomDiv.appendChild(serviceButton);
            });
            requestsDiv.appendChild(roomDiv);
        }
    }
}

function concludeService(room, service, requestTime) {
    const completionTime = new Date();
    const timeTaken = (completionTime - requestTime) / 1000 / 60; // em minutos
    pendingRequests[room] = pendingRequests[room].filter(r => r.service !== service);
    if (pendingRequests[room].length === 0) {
        document.querySelector(`.room:nth-child(${room})`).classList.remove('active');
    }
    updateAdminPanel();
    const attendant = [...administrators, ...staff][Math.floor(Math.random() * (administrators.length + staff.length))];
    logServiceCompletion(room, service, attendant, timeTaken);
    addNotification(`Serviço concluído: ${service} para o Quarto ${room} por ${attendant}`);
    notifyAdministrators(room, service, attendant, timeTaken);
}

function logRequest(roomNumber, service) {
    const logList = document.getElementById('logList');
    const logItem = document.createElement('li');
    logItem.textContent = `Quarto ${roomNumber} - ${service} - Solicitado em ${new Date().toLocaleString()}`;
    logList.prepend(logItem);
}

function logServiceCompletion(roomNumber, service, attendant, timeTaken) {
    const logList = document.getElementById('logList');
    const logItem = document.createElement('li');
    logItem.textContent = `Quarto ${roomNumber} - ${service} - Concluído por ${attendant} em ${timeTaken.toFixed(2)} minutos`;
    logList.prepend(logItem);
}

function sendEmailNotification(roomNumber, service) {
    const templateParams = {
        room_number: roomNumber,
        service: service,
        to_email: 'tharlesdt@gmail.com'
    };

    emailjs.send('service_dtltzp7', 'template_iy5p6td', templateParams)
        .then(function(response) {
            console.log('E-mail enviado com sucesso!', response.status, response.text);
        }, function(error) {
            console.log('Falha ao enviar e-mail...', error);
        });
}

function addNotification(message) {
    const notificationList = document.getElementById('notificationList');
    const notificationItem = document.createElement('li');
    notificationItem.textContent = message;
    notificationList.prepend(notificationItem);
}

function startTimer(room, service, startTime) {
    const timerElement = document.createElement('div');
    timerElement.className = 'timer';
    document.querySelector(`#pendingRequests div:nth-child(${room})`).appendChild(timerElement);

    const timer = setInterval(() => {
        const now = new Date();
        const timePassed = Math.floor((now - startTime) / 1000);
        const timeLeft = Math.max(0, 30 * 60 - timePassed);
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

        if (timeLeft === 0) {
            clearInterval(timer);
            timerElement.textContent = 'Tempo esgotado!';
        }
    }, 1000);
}

function notifyAdministrators(room, service, attendant, timeTaken) {
    const message = `Serviço ${service} para o Quarto ${room} foi concluído por ${attendant} em ${timeTaken.toFixed(2)} minutos.`;
    administrators.forEach(admin => {
        console.log(`Notificando ${admin}: ${message}`);
    });
}

function initApp() {
    createRooms(9);
    createAdminLayout();
}

document.addEventListener('DOMContentLoaded', initApp);

