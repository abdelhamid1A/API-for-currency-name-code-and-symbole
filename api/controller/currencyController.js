const currncy = require('../Currnecy.json')
class CurrencyController{
    getAll(req,res){
        res.status(200).json(currncy)
    }
    getOneCurrency(req,res){
        const name = req.params.name
        const oneCurrcy = currncy[name]
        res.status(200).json(oneCurrcy)
    }
}

module.exports = new CurrencyController()