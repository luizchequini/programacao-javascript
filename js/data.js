var data = new Date();
var diaDaSemana;
var mes;

switch(data.getDay()){
    case 1: 
        diaDaSemana = 'Segunda-feira';
    break;
    case 2: 
        diaDaSemana = 'Terça-feira';
    break;
    case 3: 
        diaDaSemana = 'Quarta-feira';
    break;
    case 4: 
        diaDaSemana = 'Quinta-feira';
    break;
    case 5: 
        diaDaSemana = 'Sexta-feira';
    break;
    case 6: 
        diaDaSemana = 'Sabado';
    break;
    case 7: 
        diaDaSemana = 'Domingo';
    break; 
}

switch((data.getMonth()+1)){
    case 1:
        mes = 'Janeiro';
    break;
    case 2:
        mes = 'Fevereiro';
    break;
    case 3:
        mes = 'Março';
    break;
    case 4:
        mes = 'Abril';
    break;
    case 5:
        mes = 'Março';
    break;
    case 6:
        mes = 'Junho';
    break;
    case 7:
        mes = 'Julho';
    break;
    case 8:
        mes = 'Agosto';
    break;
    case 9:
        mes = 'Setembro';
    break;
    case 10:
        mes = 'Outubro';
    break;
    case 11:
        mes = 'Novembro';
    break;
    case 12:
        mes = 'Dezembro';
    break;
}
console.log(data.getMonth()+1);
console.log(data);
console.log('Data ' + (data.getDate()));
console.log('Dia ' + (data.getDay()));
console.log('Mês ' + (data.getMonth() + 1));
console.log('Ano ' + (data.getFullYear()));
console.log('Hoje é '+ diaDaSemana + ' ' + data.getDate() + ' de ' + mes + ' de ' + data.getFullYear());
console.log('Agora são: ' + data.getHours() + ':' + data.getMinutes());


