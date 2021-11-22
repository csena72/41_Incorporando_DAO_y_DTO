const productoDao = require('../dal/dao/models/productoDao');
const productoService = require('./productoService');

module.exports = {
    productoService: productoService(productoDao),
}