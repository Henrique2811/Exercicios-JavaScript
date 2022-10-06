let nome = "";
let i = 0;
let nomeslista = [];

while (true) {
    nome = prompt("Digite um nome"); // Com prompt pq fiquei com preguiça de fazer com form
    if (nome != null) { // Enquanto o valor da variável for diferente de vazio, ou seja, quando você digitar algo

        nomeslista[i] = nome; // oque você digitou vai ficar sendo armazenado na lista de vetores
        i++; // O i faz o papel de (length), pesquisem sobre dps, junto com vetoriais
             // mas é basicamente o i quem vai numerar sua lista add cada valor em uma posição diferente

    } else {

        break; // Quando decidir parar, a estrutura de repetição vai "quebrar"

    }
}

// NÃO PRECISA SE ASSUSTAR COM O TAMANHO OU com OS ITENS DESALINHADOS, NO HTML TEM UM EXEMPLO DE COMO FICARIA
// A TABELA SEM PRECISAR ADICIONA-LA POR JAVASCRIPT PRA ENTENDER MELHOR O CONCEITO DA ESTRUTURA DAS TAGS

// Bloco de conteúdo que vai pro innerHTML
let conteudo = `<table>
                    <tr>
                        <th>Índice</th>
                        <th>Nome</th>
                    </tr>`;

// Bloco do for que vai ficar criando novas linha automaticamente conforme você add mais nomes                    
for (let x = 0; x < nomeslista.length; x++) {
    conteudo += "<tr>";

    // Bloco de if para mudar a cor caso a numeração da linha ou coluna for par
    if (((x + 1) % 2) == 0) {

        conteudo += `<td class="par">${x + 1}</td>`; // Lembre-se de add essa classe com uma cor diferente no css tbm
        conteudo += `<td class="par">${nomeslista[x]}</td>`;

    } else { // Se não for par, vai imprimir normal com a formatação da tag em si que já está no css

        conteudo += `<td>${x + 1}</td>`;
        conteudo += `<td>${nomeslista[x]}</td>`;

    }
    conteudo += "</tr>";
}
conteudo += "</table>"; // Não esquece de colocar (+=), para atribuir mais coisas
                        // se colocar só o (=) vai substituir oque já estava na variável

document.getElementById("container").innerHTML = conteudo;
