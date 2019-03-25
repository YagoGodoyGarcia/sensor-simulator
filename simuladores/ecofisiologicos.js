const { ModuloHTTP } = require('../moduloHTTP/dataingestion')
const { NewEco } = require('../sensores/objetoEco')

function DadosEcofisiologicos() {
    const dados = () => {
        let tratamento = ['T101', 'T201', 'T301', 'T401']
        let hibrido = [1, 2, 3, 4]
        let schema = 'ecofisiol_v3'
        let dados = []

        dados = [...dados, NewEco(tratamento[0], hibrido[0])]
        dados = [...dados, NewEco(tratamento[0], hibrido[1])]
        dados = [...dados, NewEco(tratamento[1], hibrido[1])]
        dados = [...dados, NewEco(tratamento[1], hibrido[2])]
        dados = [...dados, NewEco(tratamento[2], hibrido[2])]
        dados = [...dados, NewEco(tratamento[2], hibrido[3])]
        dados = [...dados, NewEco(tratamento[3], hibrido[3])]
        dados = [...dados, NewEco(tratamento[3], hibrido[0])]

        ModuloHTTP(schema,dados)
    }

    dados()
    setInterval(dados, 300000)
}

exports.DadosEcofisiologicos = DadosEcofisiologicos