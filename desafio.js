/* Contagem de Medalhas
Crie um programa que receba o número de medalhas de ouro, prata e bronze de um país nas Olimpíadas e calcule o total de medalhas. Quando escrever 'sair', o programa deverá encerrar e mostrar na tela o ranking de medalhas no formato:


#Ranking de medalhas:
#Brasil: 7 medalhas
#França: 6 medalhas
#Argentina: 3 medalhas

*/
let ranking = {};

while (true) {
    let pais = prompt("Digite o nome do país (ou 'sair' para encerrar):");

    if (pais.toLowerCase() === 'sair') {
        break;
    }

    let ouro = parseInt(prompt(`Digite o número de medalhas de ouro para ${pais}:`)) || 0;
    let prata = parseInt(prompt(`Digite o número de medalhas de prata para ${pais}:`)) || 0;
    let bronze = parseInt(prompt(`Digite o número de medalhas de bronze para ${pais}:`)) || 0;

    let total = ouro + prata + bronze;

    ranking[pais] = total;
}

console.log("Ranking de medalhas:");
for (let pais in ranking) {
    console.log(`${pais}: ${ranking[pais]} medalhas`);
}