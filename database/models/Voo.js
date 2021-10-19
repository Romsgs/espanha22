module.exports = (sequelize, DataTypes) => {

    const voo = sequelize.define(
        //nome da tabela na model
        'Voo',
        {
            numeroDoVoo: DataTypes.STRING,
            companiasaereas_id: DataTypes.INTEGER,
            horario: DataTypes.TIME,
            trajeto: DataTypes.STRING

        },
        {
            tableName: 'voos', //nome da tabela no Banco de dados
            timestamps: false
        });
        voo.associate = (models) => {
            voo.belongsTo(
                models.CompaniaAerea,
                {
                    as: 'Voo_Compania_Aerea', // nome da tabela como apelido que sera usado no controller
                    foreignKey:'companiasaereas_id'
                    
                }
            )
        }
    return voo;
}