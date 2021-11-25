<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <table>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Endereço</th>
                <th>Salário</th>
            </tr>
        </thead>

        <tbody>

        </tbody>
                 
    </table>

    <script>
        let funcionarios = [
            {
                "nome": "Douglas",
                "endereco" : "Rua da esquina, 123",
                "salario" : "4500"
            },

            {
                "nome": "Felipe",
                "endereco" : "Rua da virada, 456",
                "salario" : "5000"
            },

            {
                "nome": "Silvio",
                "endereco" : "Rua da aresta, 789",
                "salario" : "6000"
            }
        ];

        let funcionariosEmHtml = funcionarios.map (f => `

            <tr>
               <td>${f.nome}</td>
               <td>${f.endereço}</td>
               <td>${f.salario}</td>
            </tr>

        `);

        let htmlConcatenado = funcionariosEmHtml.join(''); 
        let tabela = document.querySelector("tbody");
        tabela.innerHTML = htmlConcatenado;

    </script>
</body>
</html>