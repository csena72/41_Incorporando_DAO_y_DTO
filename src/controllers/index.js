const services = require('../services');
const productoController = require('./productoController');

module.exports = {
    productoController: productoController(services),
}