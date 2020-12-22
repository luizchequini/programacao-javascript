//Aula 2
var lista = ['maça', 'pêra', 'laranja'];

console.log('Cria lista maça, pêra, laranja');
console.log(lista);
console.log(lista[0]);
console.log(lista[1]);
console.log(lista[2]);

lista.push('uva', 'melão', 'abacaxi');

console.log('Insere na lista uva, melão, abacaxi');
console.log(lista);
console.log(lista[3]);
console.log(lista[4]);
console.log(lista[5]);

console.log('Retira da lista abacaxi');
lista.pop();
console.log(lista);

console.log('Reverse na lista');
lista.reverse();
console.log(lista);

console.log('ToString na lista');
console.log(lista.toString());

console.log('Array no ToString da lista');
console.log(lista.toString()[0]);
console.log(lista.toString()[1]);
console.log(lista.toString()[2]);
console.log(lista.toString()[3]);
console.log(lista.toString()[4]);

console.log('Join na lista com separador |&/-_');
console.log(lista.join(' |&/-_ '));