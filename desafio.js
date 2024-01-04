/*1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a
partir de sua altura, em metros, e peso,
em quilogramas, que serão recebidos
como parâmetro.*/

let altura = parseFloat(prompt("Digite a sua altura: "));
alert(`Sua altura: ${altura} metros.`);

let peso = parseFloat(prompt("Digite a seu peso: "));
alert(`Seu peso: ${peso} quilos.`);

function calcularImc (altura, peso) {
    let imc = peso / (altura * altura);
    alert(`O seu IMC é de: ${imc}`);
}

calcularImc(altura, peso);


/*2. Crie uma função que calcule o valor do fatorial de um número passado como
parâmetro.*/

let numero = parseFloat(prompt("Digite um número para calcular o seu fatorial: "));

alert(`O fatorial de: ${numero} metros.`);