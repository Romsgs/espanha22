const {Voo, companiasaereas} = require('../database/models')
module.exports = {
    barcelona: (req, res) => {
        res.render('barcelona')
    },
    voos: async (req, res) => {
        // let voos = Voo.findAll({include: {model:companiasaereas, as:'companiasaereas'}})
        const voos = await Voo.findAll()
        //const companias = await companiasaereas.findAll()
        console.log(voos)
        res.render('voos',{Voos })
    }

}