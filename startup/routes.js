const express = require('express');
const inicio = require('../routes/inicio');
module.exports = function(app) {
    app.use(express.json());
    app.use('/', inicio)
}