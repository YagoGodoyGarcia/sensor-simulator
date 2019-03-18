const { ModuloHTTP } = require('../moduloHTTP/dataingestion')
const { NewEco } = require('../sensores/objetoEco')

function DadosEcofisiologicos() {
    const dados = () => {
        let tratamento = ['T101', 'T201', 'T301', 'T401']
        let hibrido = [1, 2, 3, 4]
        let schema = 'ecofisiol_v1'
        let data = []

        data = [...data, NewEco(tratamento[0], hibrido[0])]
        data = [...data, NewEco(tratamento[0], hibrido[1])]
        data = [...data, NewEco(tratamento[1], hibrido[1])]
        data = [...data, NewEco(tratamento[1], hibrido[2])]
        data = [...data, NewEco(tratamento[2], hibrido[2])]
        data = [...data, NewEco(tratamento[2], hibrido[3])]
        data = [...data, NewEco(tratamento[3], hibrido[3])]
        data = [...data, NewEco(tratamento[3], hibrido[0])]

        ModuloHTTP(schema,data)
    }

    dados()
    setInterval(dados, 300000)
}

exports.DadosEcofisiologicos = DadosEcofisiologicos