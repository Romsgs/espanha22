const {Voo, CompaniaAerea} = require('../database/models')
module.exports = {
    barcelona: (req, res) => {
        res.render('barcelona')
    },
    voos: async (req, res) => {
        //const usuario = await Usuario.findOne({where:{email}});
        const voos = await Voo.findAll({include: 'Voo_Compania_Aerea'})
        // voos = JSON.stringify(voos)
        console.log(typeof(voos) + "==================================")
        
        res.render('voo', {voos: voos})
        
    }

}