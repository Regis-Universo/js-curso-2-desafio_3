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

let numero = parseInt(prompt("Digite um número para calcular o seu fatorial: "));

function fatorial(numero) {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
      resultado *= i;
    }
    return resultado;
  }
  
  alert(fatorial(numero));


/* 3. Crie uma função que converte um valor em dólar, passado como parâmetro, e
retorna o valor equivalente em reais.
Para isso, considere a cotação do dólar
igual a R$4,80 */

const valorEmDolar = 4.80;

let valorEmReal = parseFloat(prompt("Digite o valor, em reais, que você quer converter para dólares: "));

function converterEmDolar() {
    valorConvertido = valorEmReal / valorEmDolar;
    return valorConvertido;
}

converterEmDolar();

alert(`Convertendo R${valorEmReal} reais para valor em dolar = $${valorConvertido} dólares`);


/* 4. Crie uma função que mostre na tela a
área e o perímetro de uma sala
retangular, utilizando altura e largura
que serão dadas como parâmetro. */

let comprimento = parseFloat(prompt("Digite o valor do comprimento da área da sala: "));
let largura = parseFloat(prompt("Digite o valor da largura da área da sala: "));

function calcularAreaPerimetro(comprimento, largura) {
    let areaDaSala = comprimento * largura;
    let perimetroDaSala = (largura + comprimento) * 2;
    alert(` A área da sala é de ${areaDaSala} m² e o perímetro da sala é de ${perimetroDaSala} metros.`);
}

calcularAreaPerimetro(comprimento, largura);

/* 5. Crie uma função que mostre na tela a
área e o perímetro de uma sala circular,
utilizando seu raio que será fornecido
como parâmetro. Considere Pi = 3,14. */

let raio = parseFloat(prompt("Digite o valor do raio da sala, em m²: "));
const pi = 3.14;

function calcularArea(raio,pi) {
    // let raio = parseFloat(prompt("Digite o valor do raio da sala: "));
    // const pi = 3.14;
    let area = pi*(raio*raio);
    alert(`Área da sala: ${area}m²`);
    let perimetro = (2*pi)*raio;
    alert(`O perímetro da salaé de: ${perimetro} metros.`);
}

calcularArea(raio,pi);


/* 6. Crie uma função que mostre na tela a
tabuada de um número dado como
parâmetro */

let multiplicando = parseFloat(prompt("Digite o valor do número a ser multiplicado: "));

function mostrarTabuada(multiplicando) {
    for (let i = 1; i <= 10; i++) {
      let resultado = multiplicando * i;
      console.log(`${multiplicando} x ${i} = ${resultado}`);
    }
}

mostrarTabuada(multiplicando);