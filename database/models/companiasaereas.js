module.exports = (sequelize, DataTypes) => {
    const companiasaereas = sequelize.define(
        'companiasaereas',
        {
            nome: DataTypes.STRING,

        },
        {
            tableName: "companiasaereas",
            timestamps:false
        }
    );
    companiasaereas.associate = (models) => {
        
        // uma compania possui muitos voos
        companiasaereas.hasMany(
            models.Voo,
            {
                as: 'Voo',
                foreignKey:'companiasaereas_id'
                
            }
        );
    }
    return companiasaereas;
}