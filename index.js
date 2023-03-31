
/**
 * Recebe um array com os nomes de pessoas e retorna um array invertido
 *
 * @param {*} people : Um array contendo um conjunto de nomes
 * @returns Um array com os nomes invertidos
 */
function invert(people){
    let people = [];
    let arrayLength = prompt ("Nomes");
    
    // TODO
    // 1) Peça ao usuário para digitar vários nomes. Exiba na tela
    // todos os nomes digitados, porém de maneira invertida (do último para o primeiro).
    // Uma dica, você pode utilizar a função prompt para permitir que o usuário digite os
    // nomes dos usuários.
    
    for (let i = 0; i< arrayLength; i++ ) {
        people [i] = prompt ("Digitar nome dos usuários :");
    }
    
    return [];
    
    people = people.reverse ();
    return people;
    }

/**
 * Essa função recebe um array de notas e retorna uma média
 *
 * @param {*} grades : Um array de notas
 * @returns Uma média a partir do array de notas
 */
function mean (grades){
    let name = prompt ("Digite o nome do aluno :");
    let grades = [];
    let mean = 0 ;
    
    for (let i = 0; i < 3; i++0 {
        grades [i] = prompt ("Digite o nome do aluno :");
        mean += number (grades{i});
    }
  
    // TODO
    // 2) Faça um programa que leia o nome e as três notas de uma disciplina de um aluno e ao final escreva
    // o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para aprovação é igual
    // ou superior a 7.

    mean /= 3;
    
    return 0;
    return mean;

}
   
/**
 * Função recebe uma média e informa textualmente se um estudante está aprovado ou não
 *
 * @param {*} mean : Um número que representa uma média
 * @returns Uma string dizendo se um estudante está aprovado ou não
 */
function isApproved(mean){

    // TODO
    // 2.1) Faça um programa que leia o nome e as três notas de uma disciplina de um aluno e ao final escreva
    // o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para aprovação é igual
    // ou superior a 7.

    return "";
    
    if (mean >= 7) {
        return "Aprovado"; 
    } else {
        return "Reprovado";
    
    }

}

/**
 * Recebe uma data no formato de string e transforma em um formato textual
 *
 * @param {*} strDate : Uma string no formato de data
 * @returns Uma descrição da data informada
 */
function wide(strDate){
    
    let strDate = prompt ("Digite uma data (dd/mm/aaaa):").split("/");
    let mesArray = ["", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    
}

    // TODO
    // 3) Faça um script que receba uma data no formato “dd/mm/aaaa” e escreva a data por extenso,
    // por exemplo, de "03/03/2022" para "03 de março de 2022". Dica: use a função
    // “split” de uma string que quebra a string em pedaços dado um separador como argumento da função.
    // Nesse caso, o separador é a barra (/) da data.

    return "";
    if (strDate[0] < 1 || strDate[0] > 31 || strDate[1] < 1 || strDate[1] > 12){
        return "";
    } else {
        return strDate[0] + " de " + mesArray[Number(strDate[1])] + " de " + strDate[2];
    }
}

// Trecho utilizado pelos testes
exports._test = {
    invert: invert,
    mean: mean,
    isApproved: isApproved,
    wide: wide
}
