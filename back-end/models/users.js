const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
        Users.hasOne(models.Orders,{
            foreignKey: 'userId', as: 'orders'
        })
    }
  }
  Users.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
     name: DataTypes.STRING,
     email: DataTypes.STRING,
     phoneNumber: DataTypes.STRING,
     mobile: DataTypes.STRING,
     departament: DataTypes.STRING,
     verificationCode: DataTypes.STRING,
     emailChecked: DataTypes.INTEGER,
     createdAt: DataTypes.DATE,
     updatedAt: DataTypes.DATE,
     cashforceAdm: DataTypes.INTEGER,
    },
    {
      // options
      sequelize,
      modelName: 'Users',
      tableName: 'users',
      underscore: true,
    },
  );
  return Users;
};