const { ValoresFloat, ValoresInt } = require('../sensores/valoresRandom')
const { GerarData } = require('../sensores/data')
const { ModuloHTTP } = require('../moduloHTTP/dataingestion')

function DadosAmbientais() {
    const dados = () => {
        var intensidade_luminosa = ValoresFloat(0, 134)
        var umidade_ambiente = ValoresFloat(54.9, 64.3)
        var temp_ambiente = ValoresFloat(20, 23)
        var temp_inter = ValoresFloat(22.38, 28.93)        
        var logger_id = 200
        var ponto = 1
        var data = GerarData()

        var newDados = new Object({
            logger_id: logger_id,
            umidade_ambiente: umidade_ambiente,
            ano: data.ano,
            ponto: ponto,
            intensidade_luminosa: intensidade_luminosa,
            hora: data.hora,
            segundos: data.segundos,
            temp_inter: temp_inter,
            mes: data.mes,
            minutos: data.min,
            dia: data.dia,
            temp_ambiente: temp_ambiente
        })

        var schema = 'dados_ambientais'
        ModuloHTTP(schema,newDados)
    }

    dados()
    setInterval(dados, 100000)

    return dados
}

exports.DadosAmbientais = DadosAmbientais