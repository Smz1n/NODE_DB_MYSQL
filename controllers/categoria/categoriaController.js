const {executarNoBanco} = require('../../connection')
async function listar() {
    return await executarNoBanco('SELECT * FROM tb_categoria');
}


module.exports = {
    listar,
}