const { DataTypes } = require('Sequelize')
module.exports = (sequelize, DataTypes) => {
    
    const companiasaereas = sequelize.define(
        'CompaniaAerea',//nome da tabela na model
        {
            nome: DataTypes.STRING,

        },
        {
            tableName: "companiasaereas",//nome da tabela no Banco de dados
            timestamps:false
        }
    );
    companiasaereas.associate = (models) => {
        
        // uma compania possui muitos voos
        companiasaereas.hasMany(
            models.Voo,
            {
                as: 'companiasaereas_voo', // nome da tabela como apelido que sera usado no controller
                foreignKey:'companiasaereas_id'
                
            }
        );
    }
    return companiasaereas;
}