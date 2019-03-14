function ModuloHTTP(schema, dados) {
    var schema = schema
    var body = dados
    var request = require('request');
    
    request.post({
        headers: {
            'X-Schema': schema,
            'apikey': 'hA6UfRIhj8GDinCmvvtX1mA0ACGKodtK',
            'Content-Type': 'application/json'
        },
        url: 'https://portal.dev.eugenio.swlogicalis.com/api/v1/data',
        body: body,
        json: true
    }, function (error, response, body) {
        console.log(body);
    });

}

exports.ModuloHTTP = ModuloHTTP