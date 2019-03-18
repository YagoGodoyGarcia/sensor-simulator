const { ValoresFloat, ValoresInt } = require('../sensores/valoresRandom')
const { ModuloHTTP } = require('../moduloHTTP/dataingestion')

function DadosAmbientais() {
    const dados = () => {
        let data = []

        let newDados1 = new Object({
            logger_id: '200',
            umidade_ambiente: ValoresFloat(54.9, 64.3, 3),
            ponto: 1,
            intensidade_luminosa: ValoresFloat(0, 134, 3),
            temp_inter: ValoresFloat(22.38, 28.93, 3),
            temp_ambiente: ValoresFloat(20, 23, 3)
        })

        let newDados2 = new Object({
            logger_id: '200',
            umidade_ambiente: ValoresFloat(54.9, 64.3, 3),
            ponto: 2,
            intensidade_luminosa: ValoresFloat(0, 134, 3),
            temp_inter: ValoresFloat(22.38, 28.93, 3),
            temp_ambiente: ValoresFloat(20, 23, 3)
        })
        

        data = [...data, newDados1]
        data = [...data, newDados2]
        var schema = 'ambientais_v2'
        ModuloHTTP(schema, data)
    }
    dados()
    setInterval(dados, 7200000)
}

exports.DadosAmbientais = DadosAmbientais