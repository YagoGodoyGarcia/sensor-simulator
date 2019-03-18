const express = require('express');
const app = express();
const { DadosAmbientais } = require('./simuladores/ambientais')
const { DadosEcofisiologicos } = require('./simuladores/ecofisiologicos')
require('./startup/routes')(app);
 

DadosAmbientais()
DadosEcofisiologicos()
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Escutando porta ${port}...`));