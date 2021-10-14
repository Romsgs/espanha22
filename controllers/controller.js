const {Voo, companiasaereas} = require('../database/models')
module.exports = {
    barcelona: (req, res) => {
        res.render('barcelona')
    },
    voos: (req, res) => {
        let voos = Voo.findAll({include: {model:companiasaereas, as:'Companias Aereas'}})
        console.log(voo)
        res.render('voos',{Voo})
    }

}