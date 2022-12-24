const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    static associate(models) {
        Orders.hasOne(models.Orderportions,{
            foreignKey: 'orderId', as: 'orderportions'
        })
        Orders.hasOne(models.Offers,{
            foreignKey: 'orderId', as: 'offers'
        })
        Orders.belongsTo(models.Cnpjs,{
            foreignKey: 'cnpjId', as: 'cnpjs'
        })
        Orders.belongsTo(models.Users,{
            foreignKey: 'userId', as: 'users'
        })
        Orders.belongsTo(models.Providers,{
            foreignKey: 'providerId', as: 'providers'
        })
        Orders.belongsTo(models.Buyers,{
            foreignKey: 'buyerId', as: 'buyers'
        })
    }
  }
  Orders.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
     orderNfId: DataTypes.STRING,
     orderNumber: DataTypes.STRING,
     orderPath: DataTypes.STRING,
     orderFileName: DataTypes.STRING,
     orderOriginalName: DataTypes.STRING,
     emissionDate: DataTypes.STRING,
     pdfFile: DataTypes.STRING,
     emitedTo: DataTypes.STRING,
     nNf: DataTypes.STRING,
     CTE: DataTypes.STRING,
     value: DataTypes.STRING,
     createdAt: DataTypes.DATE,
     updatedAt: DataTypes.DATE,
     cnpjId: DataTypes.INTEGER,
     userId: DataTypes.INTEGER,
     buyerId: DataTypes.INTEGER,
     providerId: DataTypes.INTEGER,
     orderStatusBuyer: DataTypes.STRING,
     orderStatusProvider: DataTypes.STRING,
     cargoPackingList: DataTypes.STRING,
     deliveryCtrc: DataTypes.STRING,
    },
    {
      // options
      sequelize,
      modelName: 'Orders',
      tableName: 'orders',
      underscore: true,
    },
  );
  return Orders;
};