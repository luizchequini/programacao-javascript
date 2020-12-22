var nome = 'Luiz Chequini';
var id = 1;
var verificador = 321;
var frase = 'Japão é o melhor time do mundo'
var n1 = 10;
var n2 = 3;

// alert(nome + ' tem id ' + id + ' no sistema.');
// alert(nome + ' ' + id + verificador);

console.log('-> Manipulação de string');

console.log(nome + ' ' + id + verificador);
console.log(frase);
console.log('-> replace')
console.log(frase.replace('Japão', 'Brasil'));
console.log('-> lowerCase')
console.log(frase.toLowerCase());
console.log('-> upperCase')
console.log(frase.toUpperCase());

console.log('-> Calculos')
console.log('Soma de ' + n1 + ' + ' + n2+ ' = ' +(n1 + n2));
console.log('Subtração de ' + n1 + ' - ' + n2+ ' = ' +(n1 - n2));
console.log('Multiplicação de ' + n1 + ' * ' + n2+ ' = ' +(n1 * n2));
console.log('Divisão de ' + n1 + ' / ' + n2+ ' = ' +(n1 / n2));