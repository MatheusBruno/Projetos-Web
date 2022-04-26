<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <?php require_once "atalhos/titulo.php" ?>
</head>
<body>
    <div id="tela">
        <video autoplay muted loop id="video">
            <source src="vid/amazonia.mp4">
        </video>
    </div>
    <div id="tela-dados">
        <div id="logo">
            <img src="imgs/amazonas-logo.png" alt="logo-amazonas">
        </div>
        <div id="main">
            <button id="botaoproximo">Home</button>
        </div>
        <div id="apresentacao">
            <p>Desenvolvido por Matheus</p>
        </div>
    </div>

    <script src="js/coffee.js"></script>
</body>
</html>