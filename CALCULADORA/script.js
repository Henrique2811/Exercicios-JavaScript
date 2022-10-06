// LEMBREM QUE OU VOCÊS FAZEM UMA FUNÇÃO PARA RECEBER AS VARIÁVEIS, E DPS IMPORTAM A FUNÇÃO PRO BLOCO QUE QUEREM
// OU DECLAREM AS VARIÁVEIS DENTRO DE CADA BLOCO

let resultado = document.querySelector("#resultado");
let n1, n2; // Aqui as varáveis só estao sendo declaradas, mas o valor ta sendo atribuido dentro da função

function variaveis() {
    n1 = parseFloat(document.querySelector("#n1").value); // Só atribuir o valor dentro da função
    n2 = parseFloat(document.querySelector("#n2").value); // Mensagens não precisam ser "formatadas", 
                                            // mas se for algum número precisa do parseFloat/parseInt, para fazer operações matemáticas
                                            // Como vou usar o valor delas pra calcular, estou usando o .value
}

function operacoes(res) {
    resultado.value = res; // Quando for apresentar o valor/mensagem final, é bom só usar o .value ná hora de atribuir o valor msm
                           // Por isso não usei o .value na linha 4
                           // o res é um jeito de usar o valor que a função recebu em outros blocos, dentro dela msm
                           // mas podem os nomes que quiserem além de (res)
}

document.querySelector("#soma").addEventListener("click", function() { // Existem vários eventos, mas o alcides só passou o de click
                                                                       // que será executado dps de CLICAR em algo
                                                                       // e sempre deve ter a função ao lado
                                                                       // pois é isso qeu o evento irá fazer
                                                                       // EXERCUTAR UMA FUNÇÃO
    variaveis();
    operacoes(n1 + n2); // Atribuindo o valor a funçao que vai usa-lo, como expliquei na linha 17
})

document.querySelector("#subtracao").addEventListener("click", function() {
    variaveis();
    operacoes(n1 - n2);
})

document.querySelector("#multiplicacao").addEventListener("click", function() {
    variaveis();
    operacoes(n1 * n2);
})

document.querySelector("#divisao").addEventListener("click", function() {
    variaveis();
    operacoes(n1 / n2);
})
