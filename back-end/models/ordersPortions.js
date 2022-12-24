const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orderportions extends Model {
    static associate(models) {
        Orderportions.belongsTo(models.Orders,{
            foreignKey: 'orderId', as: 'orders'
        })
    }
  }
  Orderportions.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
     name: DataTypes.STRING,
     nDup: DataTypes.STRING,
     dVenc: DataTypes.STRING,
     vDup: DataTypes.STRING,
     availableToMarket: DataTypes.INTEGER,
     date_created: DataTypes.DATE,
     date_updated: DataTypes.DATE,
     orderId: DataTypes.INTEGER,
    },
    {
      // options
      sequelize,
      modelName: 'Orderportions',
      tableName: 'orderportions',
      createdAt: 'date_created',
      updatedAt: 'date_updated',
      underscore: true,
    },
  );
  return Orderportions;
};