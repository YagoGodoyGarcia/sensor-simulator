const express = require('express');
const app = express();
const { DadosAmbientais } = require('./simuladores/ambientais')
require('./startup/routes')(app);

DadosAmbientais()
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Escutando porta ${port}...`));