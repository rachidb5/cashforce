const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Providers extends Model {
    static associate(models) {
        Providers.belongsTo(models.Cnpjs,{
            foreignKey: 'cnpjId', as: 'cnpjs'
        })
        Providers.hasOne(models.Orders,{
            foreignKey: 'providerId', as: 'orders'
        })
    }
  }
  Providers.init(
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
     bank: DataTypes.STRING,
     bankAgency: DataTypes.STRING,
     account: DataTypes.STRING,
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
      modelName: 'Providers',
      tableName: 'providers',
      underscore: true,
    },
  );
  return Providers;
};