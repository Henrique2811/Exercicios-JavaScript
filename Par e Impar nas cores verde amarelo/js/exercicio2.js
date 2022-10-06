// REGRAS PRA NUNCA SE CONFUNDIR E NÃO TER VÁRIOS PROBLEMAS COM O CÓDIGO
// SEMPRE QUE FOR COMEÇAR UM CÓDIGO, LEMBRE-SE

// 1° - Não tem problema declarar as variáveis fora do bloco, mas o valor delas deve ser atribuido dentro de um
// 2° - Não tem mais regra não seu loco, só prestar atenção pra não se confundir ou se asustar com o tamanho do código 🧐
//      nem com a quantidade de variáveis que você criar

let linhas;
let colunas;
let conteudo;
document.querySelector("#btn1").addEventListener("click", function() { // Lembrando do evento de click pra executar uma função
                                                                      // e atribuir o valor das varáveis dentro do bloco
    linhas = parseInt(document.querySelector("#qtdlinhas").value);
    colunas = parseInt(document.querySelector("#qtdcolunas").value);

    if (linhas > 0 && colunas > 0) { // O número de linhas & colunas deve ser maior que zero pra ter uma tabela, por isso o IF
        conteudo = "<table>"; // O conteúdo recebe a primeira linha só com o (=), mas lembre de usar o (+=) dps pra atribuir mais coisa

        for (let numLinhas = 1; numLinhas <= linhas; numLinhas++) { // Uma estrutura de repetição pra criar automáticamente 
                                                                    // as linhas e colunas
                                                                    // conforme a quantidade que o usuário solicitar
                                                                    // o "enquanto" (numLinhas) número de linhas for <= 
                                                                    // ao que foi pedido pelo usuário na variável (linhas)
            conteudo += `<tr>`; // (tr) variável de linha

            for (let numColunas = 1; numColunas <= colunas; numColunas++) { // "enquanto" (numColunas) número de colunas for menor ou igual 
                                                                            // ao que foi pedido pelo usuário na variável (colunas)
                
                if ((numColunas % 2) == 0) { // se o resto da divisão por 2 for zero, é par
                    conteudo += `<td class="par">${numLinhas}.${numColunas}`; // aqui só ta imprimindo a númeração de cada linha e coluna
                    conteudo += `</td>`;                                      // com o valor que ta sendo atribuido pelo FOR no ++
                } else {
                    conteudo += `<td class="impar">${numLinhas}.${numColunas}`;
                    conteudo += `</td>`; // (td) variável de colunas
                }

            }

            conteudo += `</tr>`;
        }

        conteudo += "</table>";
        document.getElementById("saida").innerHTML = conteudo; // Sendo impresso no html da div com id (saida)
                                                               // Obs: da pra usar querySelector tmb
                                                               // mas só com getElement aparece a opção de autocompletar o inner
                                                               // então to usando ele por segurança                                                           
    }
})
