const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Offers extends Model {
    static associate(models) {
      Offers.belongsTo(
        models.Sponsors, { foreignKey: 'sponsorId', as: 'sponsors'}
      )  
      Offers.belongsTo(
        models.Orders, { foreignKey: 'orderId', as: 'orders'}
      )    
    }
  }
  Offers.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
     tax: DataTypes.STRING,
     tariff: DataTypes.STRING,
     adValorem: DataTypes.STRING,
     float: DataTypes.STRING,
     expiresIn: DataTypes.DATE,
     paymentStatusSponsor:DataTypes.INTEGER,
     paymentStatusProvider:DataTypes.INTEGER,
     iof: DataTypes.STRING,
     date_created: DataTypes.DATE,
     date_updated: DataTypes.DATE,
     orderId:DataTypes.INTEGER,
     sponsorId:DataTypes.INTEGER,
    },
    {
      // options
      sequelize,
      modelName: 'Offers',
      tableName: 'offers',
      createdAt: 'date_created',
      updatedAt: 'date_updated',
      underscore: true,
    },
  );
  return Offers;
};