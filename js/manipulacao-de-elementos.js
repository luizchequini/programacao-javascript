var lampada = true;


function cliqueBotao(){
    console.log('cliqueBotao');
    ligaDesliga(a = lampada);
}

function ligaDesliga(a){
    if(a){
        lampada = false;
        document.getElementById('cliqueBotao').innerHTML = '<b>Ligado</b>';
    }else{
        lampada = true;
        document.getElementById('cliqueBotao').innerHTML = '<b>Desligado</b>';
    }
}

function redirecionarNovaGuia(){
    window.open('https://github.com/luizchequini');
}

function redirecionarMesmaGuia(){
    window.location.href = 'https://github.com/luizchequini';
}

function onMouseOver(){
    console.log('onMouseOver');
    ligaDesliga(lampada);
}

function onMouseOut(){
    console.log('onMouseOut');
    ligaDesliga(lampada);
}

function onMouseOverThis(elemento){
    elemento.innerHTML = '<b>onMouseOutThis</b>';
}

function onMouseOutThis(elemento){
    elemento.innerHTML = '<b>onMouseOverThis</b>';
}

function onLoadCarregaBody(){
    console.log('Body acabou de ser carregado.');
}

function onChangeCombo(elemento){
    console.log(elemento.value);
}
