const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Buyers extends Model {
    static associate(models) {
        Buyers.belongsTo(models.Cnpjs,{
            foreignKey: 'cnpjId', as: 'cnpjs'
        })
        Buyers.hasOne(models.Orders,{
            foreignKey: 'buyerId', as: 'orders'
        })
    }
  }
  Buyers.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
     name: DataTypes.STRING,
     tradingName: DataTypes.STRING,
     cashforceTax: DataTypes.STRING,
     responsibleName: DataTypes.STRING,
     responsibleEmail: DataTypes.STRING,
     responsiblePosition: DataTypes.STRING,
     responsiblePhone: DataTypes.STRING,
     responsibleMobile: DataTypes.STRING,
     website: DataTypes.STRING,
     postalCode: DataTypes.STRING,
     address: DataTypes.STRING,
     number: DataTypes.STRING,
     complement: DataTypes.STRING,
     neighborhood: DataTypes.STRING,
     city: DataTypes.STRING,
     state: DataTypes.STRING,
     phoneNumber: DataTypes.STRING,
     situation: DataTypes.STRING,
     situationDate: DataTypes.STRING,
     createdAt: DataTypes.DATE,
     updatedAt: DataTypes.DATE,
     cnpjId: DataTypes.INTEGER,
     email: DataTypes.STRING,
    },
    {
      // options
      sequelize,
      modelName: 'Buyers',
      tableName: 'buyers',
      underscore: true,
    },
  );
  return Buyers;
};