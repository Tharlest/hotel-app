const conciergeInfo = {
    passeios: [
        { nome: "Tour pela Cidade", descricao: "Conheça os principais pontos turísticos.", preco: "R$ 50,00" },
        { nome: "Passeio de Barco", descricao: "Desfrute de um relaxante passeio marítimo.", preco: "R$ 80,00" }
    ],
    restaurantes: [
        { nome: "Sabor Local", descricao: "Culinária típica da região.", endereco: "Rua das Flores, 123" },
        { nome: "Gourmet Especial", descricao: "Pratos refinados e ambiente elegante.", endereco: "Av. Central, 456" }
    ],
    farmacias: [
        { nome: "Farmácia 24h", endereco: "Rua da Saúde, 789", telefone: "(11) 1234-5678" },
        { nome: "Drogaria Bem-Estar", endereco: "Av. do Cuidado, 101", telefone: "(11) 8765-4321" }
    ],
    taxis: [
        { nome: "Táxi Rápido", telefone: "(11) 9876-5432" },
        { nome: "Táxi Conforto", telefone: "(11) 9876-1234" }
    ]
};

function showInfo(category) {
    const infoDisplay = document.getElementById('infoDisplay');
    infoDisplay.innerHTML = '';
    
    conciergeInfo[category].forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'info-item';
        let html = `<h3>${item.nome}</h3>`;
        for (let key in item) {
            if (key !== 'nome') {
                html += `<p>${key.charAt(0).toUpperCase() + key.slice(1)}: ${item[key]}</p>`;
            }
        }
        itemDiv.innerHTML = html;
        infoDisplay.appendChild(itemDiv);
    });
}
