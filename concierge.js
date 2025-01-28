<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat com a Recepção</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="app">
        <h1>Chat com a Recepção</h1>
        <div id="chatBox"></div>
        <input type="text" id="messageInput" placeholder="Digite sua mensagem...">
        <button onclick="sendMessage()">Enviar</button>
        <button onclick="window.location.href='guest.html'">Voltar para Área do Hóspede</button>
    </div>
    <script src="chat.js"></script>
</body>
</html>
