const { CompaniaAerea ,sequelize } = require('./database/models');

CompaniaAerea.findByPk(1).then(
    u => {
        console.log(u.toJSON());
        sequelize.close();
    }
);
