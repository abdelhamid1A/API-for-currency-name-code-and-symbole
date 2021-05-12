const router = require('express').Router()
const currencyController = require('../controller/currencyController')

router.get('/',currencyController.getAll)
router.get('/:name',currencyController.getOneCurrency)

module.exports = router