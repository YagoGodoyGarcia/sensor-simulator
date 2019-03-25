function ModuloHTTP(schema, dados) {
    var schema = schema
    var body = dados
    var request = require('request');
    console.log(dados)
    request.post({
        headers: {
            'X-Schema': schema,
            'apikey': 'Zglk95DUV5O1vhUQl7N80eczWt273Oin',
            'Content-Type': 'application/json'
        },
        url: 'https://portal.stg.eugenio.io/api/v1/data',
        body: body,
        json: true
    }, function (error, response, body) {
        console.log(body);
    });
    console.log("Enviando ...")

}

exports.ModuloHTTP = ModuloHTTP