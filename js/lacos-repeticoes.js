var qtd = prompt('Digite quantas deseja realizar neste procedimento');
var qtdAux = qtd;

console.log('-> Reptição while')
console.log(qtd)

while(qtd >= 0){
    console.log('Valor decrementando ' + qtd--);
}

console.log(++qtd);

while(qtd <= qtdAux){
    console.log('Valor incrementado ' + qtd++);
}

console.log('-> Reptição for')
console.log(--qtd);
for(var i = 0; i <= qtd; i++){
    console.log('For incrementando i = ' + i);
}


console.log('---------------------------')
console.log('-> Reptição do while ' + qtd)

do{
    console.log('For incrementando i = ' + qtd);
}while(--qtd >= 0);

console.log(++qtd)