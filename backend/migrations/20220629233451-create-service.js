'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('service', {
      service_id: {
        type:  DataTypes.UUID,
        primaryKey: true,
        unique: true,
        defaultValue: DataTypes.UUIDV4
      },
      service_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      service_price: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      service_duration: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('service');
  }
};