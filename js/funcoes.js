function soma(n1, n2){
    return n1 + n2;
}

function replaceTexto(frase, textoRetirar, textoInserir){
    return frase.replace(textoRetirar, textoInserir)
}

var variavelGlobal = false;
function validaComVariávelGlobal(idade){
    if(idade >= 18){
        return variavelGlobal = true;
    }
    return variavelGlobal;
}

function validaComVariávelLocal(idade){
    var variavelLocal = false;
    if(idade >= 18){
        return variavelLocal = true;
    }
    return variavelLocal;
}

console.log(validaComVariávelGlobal(prompt('Digite sua idade - Variável Global')));
console.log(validaComVariávelLocal(prompt('Digite sua idade - Variável Local')));
console.log(soma(5,5));
console.log(replaceTexto('Esta frase tem textoRetirar', 'textoRetirar', 'textoInserir'));