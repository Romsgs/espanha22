module.exports = (sequelize, DataTypes) => {

    const voo = sequelize.define(
        'voos',
        {
            numeroDoVoo: DataTypes.STRING,
            companiasaereas_id: DataTypes.INTEGER,
            horario: DataTypes.TIME,
            trajeto: DataTypes.STRING

        },
        {
            tableName: 'voos',
            timestamps: false
        });
        // voo.associate = (models) => {
        //     voo.belongsTo(
        //         models.companiasaereas,
        //         {
        //             as: 'companiasaereas',
        //             foreignKey:'companiasaereas_id'
                    
        //         }
        //     )
        // }
    return voo;
}