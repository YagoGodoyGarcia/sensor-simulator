const { ValoresFloat } = require('../sensores/valoresRandom')

function NewEco(tratamento, hibrido) {
    var bateria = ValoresFloat(4.1, 4.9, 3)
    var temp_foliar = -110.8571
    var umidade_solo_res = 0
    var umidade_solo_cap = ValoresFloat(255, 227, 3)
    var fluxo_seiva = ValoresFloat(0.1, 2, 4)
    var balanca = 18.525
    var temp_inter = ValoresFloat(22.38, 28.93, 3)
    var logger_id = '200'

    var newDados = new Object({
        tratamento: tratamento,
        hibrido: hibrido,
        bateria: bateria,
        temp_foliar: temp_foliar,
        umidade_solo_res: umidade_solo_res,
        umidade_solo_cap: umidade_solo_cap,
        fluxo_seiva: fluxo_seiva,
        balanca: balanca,
        temp_inter: temp_inter,
        logger_id: logger_id,
        temp_inter: temp_inter,
    })

    return newDados
}

exports.NewEco = NewEco 