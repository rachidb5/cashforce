'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      orderNfId: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      orderNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      orderPath: {
        type: Sequelize.STRING,
        unique: true,
      },
      orderFileName: {
        type: Sequelize.STRING,
        unique: true,
      },
      orderOriginalName: {
        type: Sequelize.STRING,
        unique: true,
      },
      emissionDate: {
        type: Sequelize.STRING,
      },
      pdfFile: {
        type: Sequelize.STRING,
      },
      emitedTo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nNf: {
        type: Sequelize.STRING,
      },
      CTE: {
        type: Sequelize.STRING,
      },
      value: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      cnpjId: {
        type: Sequelize.INTEGER,
        references: {
          key: 'id',
          model: 'cnpjs'
        },
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          key: 'id',
          model: 'users'
        },
      },
      buyerId: {
        type: Sequelize.INTEGER,
        references: {
          key: 'id',
          model: 'buyers'
        },
      },
      providerId: {
        type: Sequelize.INTEGER,
        references: {
          key: 'id',
          model: 'providers'
        },
      },
      orderStatusBuyer: {
        type: Sequelize.STRING,
        defaultValue: '0',
      },
      orderStatusProvider: {
        type: Sequelize.STRING,
        defaultValue: '0',
      },
      deliveryReceipt: {
        type: Sequelize.STRING,
      },
      cargoPackingList: {
        type: Sequelize.STRING,
      },
      deliveryCtrc: {
        type: Sequelize.STRING
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('orders');
  }
};