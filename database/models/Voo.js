module.exports = (sequelize, DataTypes) => {
    const voo = sequelize.define(
        'Voos',
        {
            numeroDoVoo: DataTypes.STRING,
            companiasaereas_id: DataTypes.INTEGER,
            horario: DataTypes.TIME
        },
        {
            tableName: 'Voos',
            timestamps: false
        });
        voo.associate = (models) => {
            voo.belongsTo(
                models.companiasaereas,
                {
                    as: 'companiasaereas',
                    foreignKey:'companiasaereas_id',
                    
                }
            )
        }
    return voo;
}