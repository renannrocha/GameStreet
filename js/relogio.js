function atualizaHora(){
    var hoje = new Date();
    var hora = hoje.getHours();
    var minutos = hoje.getMinutes();
    var segundos = hoje.getSeconds();

    minutos = checkTime(minutos);
    segundos = checkTime(segundos);

    document.getElementById('relogio').innerHTML = hora + ":" + minutos + ":" + segundos;
    var tempo = setTimeout(atualizaHora, 1000);

    function checkTime(i){
        if (i < 10){
            i = "0" + i
        }
        return i;
    }
}