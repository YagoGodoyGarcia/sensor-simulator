const { ValoresFloat } = require('../sensores/valoresRandom')
const { ModuloHTTP } = require('../moduloHTTP/dataingestion')
const { GerarData } = require('../sensores/data')

function DadosAmbientais() {
    const dados = () => {
        let dados = []
        var data = GerarData()

        let newDados1 = new Object({
            logger_id: '200',
            umidade_ambiente: ValoresFloat(54.9, 64.3, 3),
            ponto: 1,
            intensidade_luminosa: ValoresFloat(0, 134, 3),
            temp_inter: ValoresFloat(22.38, 28.93, 3),
            temp_ambiente: ValoresFloat(20, 23, 3),
            data: data.dia + "/" + data.mes + "/" + data.ano,
            hora: data.hora + ":" + data.min + ":" + data.seg
        })

        let newDados2 = new Object({
            logger_id: '200',
            umidade_ambiente: ValoresFloat(54.9, 64.3, 3),
            ponto: 2,
            intensidade_luminosa: ValoresFloat(0, 134, 3),
            temp_inter: ValoresFloat(22.38, 28.93, 3),
            temp_ambiente: ValoresFloat(20, 23, 3),
            data: data.dia + "/" + data.mes + "/" + data.ano,
            hora: data.hora + ":" + data.min + ":" + data.seg
        })


        dados = [...dados, newDados1]
        dados = [...dados, newDados2]
        var schema = 'ambientais_v3'
        ModuloHTTP(schema, dados)
    }
    dados()
    setInterval(dados, 300000)
}

exports.DadosAmbientais = DadosAmbientais