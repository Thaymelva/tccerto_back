const express  = require('express');
const router = express.Router();

const usuariosController = require('./controllers/usuariosController.js');

router.get('/usuarios',usuariosController.buscarTodos);
router.get('/usuario/:id',usuariosController.buscarUm);
router.post('/usuario',usuariosController.inserir);

module.exports = router;