<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
</head>
<body>
<script>
    function pulaLinha() {
        document.write("<br>");
    }

    function mostra(frase) {
        document.write(frase);
        pulaLinha();
    }

    var nota = parseInt(prompt("Digite sua nota"))
    var nota2 = parseInt(prompt("Digite sua nota"))
    var nota3 = parseInt(prompt("Digite sua nota"))
    var nota4 = parseInt(prompt("Digite sua nota"))
    var notaMedia = (nota +nota2 +nota3 +nota4)/4

    if (notaMedia <= 60) {
        mostra("Aprovado");
    } else {
        mostra("Reprovado");
    }

    mostra("FIM");
</script>
</body>
</html>