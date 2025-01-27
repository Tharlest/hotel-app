const translations = {
    pt: {
        title: "App de Hospedagem",
        concierge: "CONCIERGE",
        chat: "Chat com a Recepção",
    },
    en: {
        title: "Hotel App",
        concierge: "CONCIERGE",
        chat: "Chat with Reception",
    },
    es: {
        title: "App de Hospedaje",
        concierge: "CONCIERGE",
        chat: "Chat con Recepción",
    }
};

function changeLanguage() {
    const lang = document.getElementById('languageSelect').value;
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[lang][key];
    });
}
