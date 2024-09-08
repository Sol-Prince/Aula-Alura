function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    

    // se campoPesquisa for uma string sem nada

    if (!campoPesquisa) {
        section.innerHTML = "Nada foi Encontrado. Sem Texto"
        return
    };

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";


    // Itera sobre cada item (dado) no array de dados.
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa) ) {
             // Concatena HTML para cada item, criando uma div com título, descrição e link.
        // O uso de template literals (``) facilita a inserção de variáveis dentro da string.
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a> </h2>
            <p class="descricao-meta">
                ${dado.descricao} </p>
            <a href="${dado.link}" target="_blank">Mais informações</a> </div>
    `;
        }
       
    }

    if (!resultados) {
        resultados = "<p>Nada foi Encontrado</p>"
    }

    // Atribui a string com os resultados ao conteúdo HTML da seção.
    section.innerHTML = resultados;
}