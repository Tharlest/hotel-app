const partners = {
    passeios: [
        { nome: "Passeios Turísticos SA", whatsapp: "+55 11 98765-4321", endereco: "Rua das Aventuras, 123" },
    ],
    restaurante: [
        { nome: "Restaurante Bom Sabor", whatsapp: "+55 11 98765-4322", endereco: "Avenida Gourmet, 456" },
    ],
    // Adicione mais categorias e parceiros conforme necessário
};

function showPartners(category) {
    const partnerInfo = document.getElementById('partnerInfo');
    partnerInfo.innerHTML = '';
    partners[category].forEach(partner => {
        const partnerDiv = document.createElement('div');
        partnerDiv.className = 'partner';
        partnerDiv.innerHTML = `
            <h3>${partner.nome}</h3>
            <p>WhatsApp: ${partner.whatsapp}</p>
            <p>Endereço: ${partner.endereco}</p>
        `;
        partnerInfo.appendChild(partnerDiv);
    });
}
