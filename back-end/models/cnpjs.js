const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cnpjs extends Model {
    static associate(models) {
      Cnpjs.hasOne(
        models.Sponsors, { foreignKey: 'cnpjId', as: 'sponsors'}
      )  
      Cnpjs.hasOne(
        models.Providers, { foreignKey: 'cnpjId', as: 'providers'}
      )  
      Cnpjs.hasOne(
        models.Orders, { foreignKey: 'cnpjId', as: 'orders'}
      )  
      Cnpjs.hasOne(
        models.Buyers, { foreignKey: 'cnpjId', as: 'buyers'}
      )  
    }
  }
  Cnpjs.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
     cnpj: DataTypes.STRING,
     companyType: DataTypes.STRING,
     date_created: DataTypes.DATE,
     date_updated: DataTypes.DATE
    },
    {
      // options
      sequelize,
      modelName: 'Cnpjs',
      tableName: 'cnpjs',
      createdAt: 'date_created',
      updatedAt: 'date_updated',
      underscore: true,
    },
  );
  return Cnpjs;
};