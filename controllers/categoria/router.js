const controler = require('./categoriaController');
const router = require('express').Router();

router.get('/categorias', async (req, res) => {
    res.send(
        await controler.listar()
    )
})

module.exports = router;