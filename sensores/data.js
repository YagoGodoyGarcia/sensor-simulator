function GerarData() {
    // Obtém a data/hora atual
    var data = new Date();

    // Guarda cada pedaço em uma variável
    var diaAtual = data.getDate()           // 1-31
    var mesAtual = data.getMonth()          // 0-11 (zero=janeiro)
    var anoAtual = data.getFullYear()      // 4 dígitos
    var horaAtual = data.getHours()         // 0-23
    var minAtual = data.getMinutes()        // 0-59
    var segAtual = data.getSeconds()

    if(mesAtual+1 > 9){
        mesAtual = mesAtual
    }else{
        mesAtual = "0"+(mesAtual+1)
    }

    var newData = new Object({
        ano: anoAtual,
        mes: mesAtual,
        dia: diaAtual,
        hora: horaAtual,
        min: minAtual,
        seg: segAtual
    })

    return newData
}

exports.GerarData = GerarData